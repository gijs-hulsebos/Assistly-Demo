'use client';

import { Star } from 'lucide-react';

const caseStudies = [
  { name: 'Tandartspraktijk de Vries', result: 'Bespaart 12 uur per week', rating: 5 },
  { name: 'Kapsalon Joris', result: 'Geen gemiste boekingen meer', rating: 5 },
  { name: 'Loodgieter Jansen', result: '+15% meer spoedklussen', rating: 5 },
  { name: 'Fysio Fit', result: 'Rust tijdens behandelingen', rating: 5 },
  { name: 'Autogarage de Boer', result: 'Altijd bereikbaar voor klanten', rating: 5 },
  { name: 'Huisartsenpraktijk Zuid', result: 'Kortere wachttijden aan de lijn', rating: 5 },
];

export function CaseStudyCarousel() {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap mb-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group/carousel carousel-wrapper">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .carousel-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="flex gap-6 w-max py-4 will-change-transform animate-marquee"
      >
        {[...caseStudies, ...caseStudies].map((study, i) => (
          <div 
            key={i} 
            className="group flex flex-col items-start px-6 py-5 bg-white border border-slate-200/50 hover:border-blue-200 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 min-w-[280px] cursor-default"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(study.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300 delay-75" />
              ))}
            </div>
            <span className="font-semibold text-slate-800 mb-0.5">{study.name}</span>
            <span className="text-sm text-slate-500 font-medium">{study.result}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
