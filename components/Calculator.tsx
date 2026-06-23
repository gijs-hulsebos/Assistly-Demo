'use client';
import { useState } from 'react';

function formatCurrency(n: number) {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

function formatNumber(n: number) {
  return new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 1 }).format(n);
}

export function Calculator() {
  const [calls, setCalls] = useState(5);
  const [value, setValue] = useState(250);
  const [conv, setConv] = useState(40);
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState(28);

  const monthly = calls * 4;
  const leads = Math.round(monthly * (conv / 100));
  const loss = leads * value;

  const monthlyHours = hours * 4.33;
  const timeLoss = monthlyHours * rate;

  const totalLoss = loss + timeLoss;
  const roi = totalLoss - 500;

  return (
    <div className="grid md:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden mt-12 max-w-5xl mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60">
      <div className="md:col-span-3 p-8 md:p-12 bg-slate-50/50">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 pb-3 border-b border-slate-200/60">Gemiste oproepen</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-3 text-sm font-medium text-slate-700">
              <label htmlFor="calls">Gemiste oproepen per week</label>
              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">{calls}</span>
            </div>
            <input type="range" id="calls" min="1" max="30" value={calls} onChange={(e) => setCalls(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-3 text-sm font-medium text-slate-700">
              <label htmlFor="value">Gem. waarde per nieuwe klant</label>
              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">€{value}</span>
            </div>
            <input type="range" id="value" min="50" max="1000" step="25" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-3 text-sm font-medium text-slate-700">
              <label htmlFor="conv">Conversie oproep naar klant</label>
              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">{conv}%</span>
            </div>
            <input type="range" id="conv" min="10" max="80" value={conv} onChange={(e) => setConv(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
        </div>

        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 pb-3 border-b border-slate-200/60 mt-12">Personeel aan de telefoon</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-3 text-sm font-medium text-slate-700">
              <label htmlFor="hours">Uren personeel per week aan telefoon</label>
              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">{formatNumber(hours)}</span>
            </div>
            <input type="range" id="hours" min="0" max="40" step="0.5" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-3 text-sm font-medium text-slate-700">
              <label htmlFor="rate">Loonkosten per uur (incl. lasten)</label>
              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded">€{rate}</span>
            </div>
            <input type="range" id="rate" min="15" max="60" step="1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>
        </div>
      </div>

      <div className="md:col-span-2 p-8 md:p-10 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Gemiste oproepen</div>
          <div className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-slate-400">Oproepen / maand</span>
            <span className="font-semibold">{monthly}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-slate-400">Nieuwe klanten</span>
            <span className="font-semibold">{leads}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-slate-400">Misgelopen omzet</span>
            <span className="font-semibold">{formatCurrency(loss)}</span>
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 mt-8">Personeel</div>
          <div className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-slate-400">Uren / maand</span>
            <span className="font-semibold">{formatNumber(monthlyHours)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-white/10 text-sm">
            <span className="text-slate-400">Loonkosten</span>
            <span className="font-semibold">{formatCurrency(timeLoss)}</span>
          </div>

          <div className="flex justify-between py-4 border-y border-white/20 mt-6 text-base font-semibold">
            <span>Totale kosten</span>
            <span className="text-white">{formatCurrency(totalLoss)}</span>
          </div>
          <div className="flex justify-between py-3 text-sm">
            <span className="text-slate-400">Kosten Assistly</span>
            <span className="font-semibold">€500 / mnd</span>
          </div>
        </div>

        <div className="mt-8 relative z-10 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-center shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] ring-1 ring-white/20">
          <div className="text-xs text-blue-100 mb-1 font-medium tracking-wide uppercase">Netto besparing</div>
          <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">{formatCurrency(roi)}</div>
          <div className="text-[11px] text-blue-200">Per maand, op basis van jouw cijfers</div>
        </div>
      </div>
    </div>
  );
}
