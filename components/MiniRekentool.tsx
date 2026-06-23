'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';
import Link from 'next/link';

function Counter({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(prevValue.current, value, {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // smooth spring-like feel
      onUpdate(val) {
        node.textContent = Math.round(val).toLocaleString('nl-NL');
      },
    });

    prevValue.current = value;

    return () => controls.stop();
  }, [value]);

  return <span ref={nodeRef}>0</span>;
}

export function MiniRekentool() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [calls, setCalls] = useState(0);
  const [averagePrice, setAveragePrice] = useState(100);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (isInView && !hasInteracted) {
      const callsControls = animate(2, 12, {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        onUpdate: (value) => {
          if (!hasInteracted) {
            setCalls(Math.round(value));
          }
        }
      });
      const priceControls = animate(100, 800, {
        duration: 11,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        onUpdate: (value) => {
          if (!hasInteracted) {
            setAveragePrice(Math.round(value / 50) * 50);
          }
        }
      });
      return () => {
        callsControls.stop();
        priceControls.stop();
      };
    }
  }, [isInView, hasInteracted]);

  // Simplified calculation: 4 weeks * 40% conversion = 1.6 factor. We'll simplify to just Calls * Average Price to make it easy to understand for the mini tool.
  // Wait, if it's per week missed calls. 4 weeks * 40% = 1.6 factor. Let's use factor of 1.6. Or let's just do calls * average price * 1.6.
  // Previously: calls * 800 (when avg price was 500). 500 * 1.6 = 800. So we do calls * averagePrice * 1.6.
  const monthlyLoss = calls * averagePrice * 1.6;

  return (
    <div ref={ref} className="group relative mx-auto rounded-[2rem] overflow-hidden bg-white border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 p-5 sm:p-8 md:p-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-500"></div>

      <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 items-center relative z-10">
        <div>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 sm:mb-4">De onzichtbare kosten</h3>
          <p className="text-slate-500 text-sm sm:text-lg mb-4 sm:mb-8 leading-relaxed">
            Zelfs een paar gemiste oproepen per week kosten je al snel duizenden euro's aan omzet. Speel met de sliders en zie het direct.
          </p>

          <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8 p-4 sm:p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
            <div>
              <div className="flex justify-between items-baseline mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-slate-700">
                <label htmlFor="mini-calls">Gemiste oproepen per week</label>
                <span className="text-blue-600 bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-base shadow-sm border border-blue-100/50">{calls}</span>
              </div>
              <input
                type="range"
                id="mini-calls"
                min="0"
                max="15"
                value={calls}
                onChange={(e) => {
                  setHasInteracted(true);
                  setCalls(Number(e.target.value));
                }}
                onTouchStart={() => setHasInteracted(true)}
                onMouseDown={() => setHasInteracted(true)}
                className="w-full h-2 sm:h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 transition-all hover:bg-slate-300"
              />
            </div>
            
            <div className="pt-3 sm:pt-4 border-t border-slate-200/60">
              <div className="flex justify-between items-baseline mb-2 sm:mb-4 text-xs sm:text-sm font-semibold text-slate-700">
                <label htmlFor="mini-price">Gemiddelde klus prijs</label>
                <span className="text-blue-600 bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-xs sm:text-base shadow-sm border border-blue-100/50">€{averagePrice}</span>
              </div>
              <input
                type="range"
                id="mini-price"
                min="50"
                max="2000"
                step="50"
                value={averagePrice}
                onChange={(e) => {
                  setHasInteracted(true);
                  setAveragePrice(Number(e.target.value));
                }}
                onTouchStart={() => setHasInteracted(true)}
                onMouseDown={() => setHasInteracted(true)}
                className="w-full h-2 sm:h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 transition-all hover:bg-slate-300"
              />
            </div>
          </div>

          <Link href="/rekentool" className="inline-flex items-center text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors group mb-4 lg:mb-0">
            Open uitgebreide rekentool
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="bg-slate-950 rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden flex flex-col justify-center min-h-[180px] sm:min-h-[240px] md:min-h-[320px] shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none"></div>
           
           <div className="relative z-10">
             <div className="text-[10px] sm:text-sm font-semibold text-slate-400 mb-2 sm:mb-4 uppercase tracking-widest">Misgelopen omzet</div>
             <div className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-3 sm:mb-6 transition-transform">
               €<Counter value={monthlyLoss} />
             </div>
             <div className="inline-block bg-white/10 border border-white/10 text-slate-300 text-[9px] sm:text-xs px-2.5 sm:px-4 py-1 sm:py-2 rounded-full font-medium">
               Per maand, o.b.v. €{averagePrice} per klus
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
