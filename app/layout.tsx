import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Assistly - Mis nooit meer een klant',
  description: 'AI-telefoniste voor loodgieters, elektriciens en installateurs.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="nl" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
