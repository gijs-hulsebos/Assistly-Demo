import { Reveal } from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe het werkt - Assistly',
  description: 'Geen nieuw nummer. Gewoon een nieuw stemmetje erbij.',
};

export default function WerkingPage() {
  const steps = [
    {
      id: '1',
      title: 'Klant belt als altijd',
      description: 'Je eigen nummer, geen omhaal: niemand merkt dat er iets veranderd is. Je behoudt je eigen vertrouwde uitstraling.',
    },
    {
      id: '2',
      title: 'Assistly pakt op',
      description: 'Binnen 3 tellen, in gewoon Nederlands. Geen keuzemenu. Direct een vriendelijke stem die luistert.',
    },
    {
      id: '3',
      title: 'Afspraak staat vast',
      description: 'Tegen de tijd dat jij pauze hebt, is het al geregeld. De klant heeft een afspraak en jij hebt overzicht.',
    },
    {
      id: '4',
      title: 'Push bij spoed',
      description: 'Lekkage, storing, gaslucht: die appjes negeer je toch niet. Je krijgt direct een WhatsApp bericht bij noodgevallen.',
    },
  ];

  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32 relative overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-left mb-20">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Geen nieuw nummer.<br className="hidden sm:block"/> <span className="text-slate-400">Een nieuw stemmetje.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 font-medium">
              We hebben het onboarding proces extreem simpel gemaakt. Jij vult je agenda en voorkeuren in, wij doen de rest.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl mt-16 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.1}>
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                  <dt className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-900 font-bold text-sm">
                      {step.id}
                    </span>
                    {step.title}
                  </dt>
                  <dd className="text-lg text-slate-500 leading-relaxed pl-14">
                    {step.description}
                  </dd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
