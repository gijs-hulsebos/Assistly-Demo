'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  { q: 'Klinkt het echt niet als een robot?', a: 'Eerlijk gezegd: bel gewoon het demo-nummer en luister zelf. Dat overtuigt sneller dan wat wij erover kunnen zeggen.' },
  { q: 'Moet ik mijn telefoonnummer veranderen?', a: 'Nee. We schakelen gewoon je bestaande nummer door, of je kiest voor een nieuw nummer. Wat jij prettiger vindt.' },
  { q: 'Hoe snel staat het live?', a: 'Meestal binnen 5 werkdagen. Je vult een kort formulier in over je bedrijf en wij regelen de rest.' },
  { q: 'Waarom telt personeelstijd mee in de rekentool?', a: 'Omdat elk uur dat iemand aan de telefoon hangt, een uur is dat niet gefactureerd wordt. Dat is een reële kostenpost, naast de klanten die je misloopt.' },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-200">
      {faqs.map((faq, i) => (
        <div key={i} className="py-6">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full justify-between items-center text-left text-lg font-medium text-slate-900 group focus:outline-none"
          >
            <span className="group-hover:text-blue-600 transition-colors">{faq.q}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 ml-4 ${openIndex === i ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600 transition-colors'}`}
            >
              <Plus size={24} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
