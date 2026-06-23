import { Reveal } from '@/components/Reveal';
import { Wrench, PhoneOff, Euro } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Het Probleem - Assistly',
  description: 'Je bent met je handen bezig. De telefoon trekt zich daar niks van aan.',
};

export default function ProbleemPage() {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32 relative overflow-hidden min-h-[calc(100vh-64px)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-left md:text-center mb-20">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              Je bent bezig.<br className="hidden md:block"/> <span className="text-slate-400">De telefoon niet.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 font-medium">
              Telefoontjes op de verkeerde momenten leiden tot gemiste inkomsten en frustratie. Ontdek waarom de traditionele manier van werken je geld kost.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl mt-16 sm:mt-20">
          <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow group">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:scale-110 transition-transform">
                    <Wrench className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="flex flex-col flex-auto">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Onder de leiding</h3>
                  <p className="flex-auto text-lg text-slate-500 leading-relaxed">Handen vol, oren vol herrie. De telefoon gaat vier keer over en valt stil. Weer een nummer dat je straks moet uitzoeken.</p>
                </dd>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow group">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:scale-110 transition-transform">
                    <PhoneOff className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="flex flex-col flex-auto">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">De voicemail valkuil</h3>
                  <p className="flex-auto text-lg text-slate-500 leading-relaxed">Niemand spreekt tegenwoordig nog graag een voicemail in. Ze hangen op en bellen gewoon de volgende op hun lijstje.</p>
                </dd>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow group">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900 mb-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 group-hover:scale-110 transition-transform">
                    <Euro className="h-6 w-6" aria-hidden="true" />
                  </div>
                </dt>
                <dd className="flex flex-col flex-auto">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Dure receptioniste</h3>
                  <p className="flex-auto text-lg text-slate-500 leading-relaxed">Fulltime iemand aannemen voor een paar uur bellen per dag? Voor de meeste installateurs slaat die rekensom nergens op.</p>
                </dd>
              </div>
            </Reveal>
          </dl>
        </div>
      </div>
    </div>
  );
}
