import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/Faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen - Assistly',
  description: 'Antwoorden op de meest gestelde vragen over Assistly.',
};

export default function FaqPage() {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32 relative overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-left md:text-center mb-16">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Veelgestelde vragen
            </h2>
            <p className="mt-6 text-xl text-slate-500 font-medium">
              Heb je nog andere vragen? Bel gerust ons demo-nummer of stuur een e-mail. We helpen je graag verder.
            </p>
          </Reveal>
        </div>
        
        <Reveal delay={0.2}>
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <Faq />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
