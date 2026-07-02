import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Governança&Mais Consultoria',
    default: 'Governança&Mais Consultoria — Capacitação para a Gestão Pública Municipal',
  },
  description:
    'Cursos e capacitação técnica para prefeitos, secretários, vereadores, contadores e servidores públicos municipais. Governança&Mais Consultoria.',
  openGraph: {
    title: 'Governança&Mais Consultoria',
    description: 'Capacitação técnica para uma gestão pública eficiente e responsável.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
