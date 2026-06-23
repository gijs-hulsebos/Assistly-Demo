'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
