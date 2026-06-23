import { Reveal } from '@/components/Reveal';
import { Metadata } from 'next';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prijs - Assistly',
  description: 'Eén pakket. Geen verrassingen.',
};

export default function PrijsPage() {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32 relative overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Eén pakket.<br/> <span className="text-slate-400">Geen verrassingen.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 font-medium">
              Geen ingewikkelde abonnementen of verborgen kosten. Een vast bedrag per maand voor volledige rust.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-lg mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-between gap-x-4 mb-6">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Assistly Pro</h3>
            </div>
            
            <p className="flex items-baseline gap-x-1 mb-2">
              <span className="text-6xl font-bold tracking-tighter text-slate-900">€500</span>
              <span className="text-base font-medium text-slate-500">/ maand</span>
            </p>
            <p className="text-sm text-slate-500 font-medium pb-8 border-b border-slate-100">+ €250 eenmalige installatie</p>
            
            <ul role="list" className="mt-8 space-y-4 text-base text-slate-600 font-medium">
              {[
                '24/7 AI-telefoniste (Nederlands)',
                'Automatische agendakoppeling',
                'WhatsApp-melding bij spoed',
                'Maandelijkse gesprekslogs',
                'Maandelijks opzegbaar'
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3 items-center">
                  <Check className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <a
              href="tel:+31000000000"
              className="mt-10 block rounded-full bg-slate-900 px-3.5 py-4 text-center text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all active:scale-95"
            >
              Bel de live demo
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
