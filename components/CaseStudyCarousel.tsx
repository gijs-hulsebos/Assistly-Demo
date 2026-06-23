'use client';

import { motion } from 'motion/react';
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
    <div className="w-full overflow-hidden flex whitespace-nowrap mb-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-6 w-max py-4 will-change-transform"
        animate={{ x: ['0%', 'calc(-50% - 0.75rem)'] }}
        transition={{
          ease: 'linear',
          duration: 35,
          repeat: Infinity,
        }}
      >
        {[...caseStudies, ...caseStudies].map((study, i) => (
          <div 
            key={i} 
            className="flex flex-col items-start px-6 py-4 bg-white border border-slate-200/50 rounded-2xl shadow-sm min-w-[280px]"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(study.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-slate-800 mb-0.5">{study.name}</span>
            <span className="text-sm text-slate-500 font-medium">{study.result}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
