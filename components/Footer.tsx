import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link href="/" className="flex items-center gap-2.5 font-medium text-slate-900 group text-base">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            Assistly
          </Link>
          <span className="text-center md:text-left text-slate-400">Opgezet na te veel gemiste oproepen.</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 font-medium">
          <Link href="/probleem" className="hover:text-slate-900 transition-colors">Probleem</Link>
          <Link href="/werking" className="hover:text-slate-900 transition-colors">Werking</Link>
          <Link href="/rekentool" className="hover:text-slate-900 transition-colors">Rekentool</Link>
          <Link href="/prijs" className="hover:text-slate-900 transition-colors">Prijs</Link>
          <a href="mailto:info@assistly.nl" className="hover:text-slate-900 transition-colors">info@assistly.nl</a>
        </div>
      </div>
    </footer>
  );
}
