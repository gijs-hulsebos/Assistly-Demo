import { Reveal } from '@/components/Reveal';
import { CaseStudyCarousel } from '@/components/CaseStudyCarousel';
import { MiniRekentool } from '@/components/MiniRekentool';
import { Star, Phone, Calendar, Zap, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#FAFAFA] relative overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6">
              Altijd iemand <br className="hidden md:block"/>
              <span className="text-slate-400">aan de lijn.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Assistly beantwoordt elke oproep, plant de afspraak in, en waarschuwt je direct bij spoed. Focus op je vak, wij doen de rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="tel:+31000000000" className="w-full sm:w-auto inline-flex items-center justify-center font-medium bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95">
                Bel de live demo
              </a>
              <Link href="/rekentool" className="w-full sm:w-auto inline-flex items-center justify-center font-medium text-slate-600 bg-white border border-slate-200/80 px-8 py-3.5 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                Bereken je verlies
              </Link>
            </div>
          </Reveal>

          <CaseStudyCarousel />

          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden bg-slate-950 p-8 sm:p-12 text-left text-white shadow-2xl ring-1 ring-slate-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none" />
              
              <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-10 items-center">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Live gespreksverslag
                  </div>
                  <div className="text-2xl md:text-4xl font-semibold tracking-tight mb-3 text-white">Lekkage gemeld om 14:32</div>
                  <div className="text-slate-400 md:text-lg leading-relaxed max-w-lg">De klant is gerustgesteld. Afspraak staat in de agenda. Monteur is via WhatsApp gewaarschuwd.</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md min-w-[160px] shadow-inner">
                  <div className="text-4xl md:text-6xl font-bold mb-2 tracking-tighter bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">2,7s</div>
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Reactietijd</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mini Rekentool Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <MiniRekentool />
          </Reveal>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Een complete frontdesk.<br/><span className="text-slate-400">Zonder het bureau.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1} className="md:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between group hover:border-blue-200 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Vloeiend Nederlands</h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-md">Geen stotterende robot. Assistly spreekt vloeiend, begrijpt context en reageert empathisch op noodsituaties.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="md:col-span-1">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between group hover:border-blue-200 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Directe actie</h3>
                  <p className="text-slate-500 leading-relaxed">Bij spoed zoals een gaslucht krijg je direct een pushmelding op WhatsApp.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="md:col-span-1">
              <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-sm h-full flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">Altijd paraat</h3>
                  <p className="text-slate-400 leading-relaxed">Of je nu onder de vloer ligt, in de auto zit, of slaapt. Assistly neemt op.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="md:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between group hover:border-blue-200 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Naadloze agenda integratie</h3>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-md">Assistly kent jouw beschikbaarheid en plant afspraken direct in. Geen dubbele boekingen of eindeloos heen en weer bellen.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ervaringen / Social Proof */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Wat installateurs zeggen</h2>
            <p className="text-lg text-slate-500">Bewezen in de praktijk door vakmensen door heel Nederland.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-[#FAFAFA] h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-slate-900 mb-6">
                  {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-grow">"Ik dacht eerst: een AI aan de telefoon, dat wordt niks. Na een week belde een klant terug om te zeggen hoe soepel het ging."</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">L</div>
                  <div className="text-sm font-medium text-slate-900">Loodgietersbedrijf<br/><span className="text-slate-500 font-normal">Randstad</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-[#FAFAFA] h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-slate-900 mb-6">
                  {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-grow">"Drie extra klussen in de eerste maand die ik anders gewoon gemist had. De rekensom is heel simpel."</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">E</div>
                  <div className="text-sm font-medium text-slate-900">Elektrotechnisch installateur<br/><span className="text-slate-500 font-normal">Zuid-Holland</span></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl border border-slate-200 bg-[#FAFAFA] h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex gap-1 text-slate-900 mb-6">
                  {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 flex-grow">"De WhatsApp bij spoedgevallen is geniaal. Ik weet binnen tien seconden of ik moet stoppen met mijn huidige klus."</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm">C</div>
                  <div className="text-sm font-medium text-slate-900">CV-monteur<br/><span className="text-slate-500 font-normal">Noord-Holland</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Ervaar het zelf</h2>
            <p className="text-xl text-slate-500 mb-10">Bel het demo-nummer. Twee minuten, geen verplichtingen. Luister hoe professioneel je nieuwe assistent klinkt.</p>
            <a href="tel:+31000000000" className="inline-flex items-center justify-center font-medium bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 text-lg">
              Bel +31 (0)00 000 0000
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
