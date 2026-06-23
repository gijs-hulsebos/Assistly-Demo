'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { href: '/probleem', label: 'Probleem' },
  { href: '/werking', label: 'Werking' },
  { href: '/rekentool', label: 'Rekentool' },
  { href: '/prijs', label: 'Prijs' },
  { href: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_0_rgb(0,0,0,0.02)]' : 'bg-white/30 backdrop-blur-sm border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-medium text-lg tracking-tight text-slate-900 group">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          Assistly
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 bg-white/50 px-2 py-1.5 rounded-full border border-slate-200/60 shadow-[0_1px_2px_0_rgb(0,0,0,0.02)] backdrop-blur-md">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${pathname === link.href ? 'bg-slate-100/80 text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a href="tel:+31000000000" className="inline-flex items-center justify-center text-sm font-medium bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95">
            Bel de demo
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === link.href ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+31000000000" className="mt-4 text-center text-sm font-medium bg-blue-600 text-white px-5 py-3.5 rounded-xl shadow-sm hover:bg-blue-700">
                Bel de demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
