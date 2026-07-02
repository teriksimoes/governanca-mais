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
    template: '%s | Governanca&Mais Consultoria',
    default: 'Governanca&Mais Consultoria — Capacitacao para a Gestao Publica Municipal',
  },
  description:
    'Cursos e capacitacao tecnica para prefeitos, secretarios, vereadores, contadores e servidores publicos municipais. Governanca&Mais Consultoria.',
  openGraph: {
    title: 'Governanca&Mais Consultoria',
    description: 'Capacitacao tecnica para uma gestao publica eficiente e responsavel.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
