import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Governança&Mais Consultoria. Solicite uma proposta de capacitação para sua prefeitura ou órgão público.',
};

export default function ContatoPage() {
  return (
    <div>
      <div className="relative overflow-hidden bg-brand-navy text-white py-20">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
            Fale conosco
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Entre em Contato</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Solicite uma proposta, tire dúvidas sobre nossos cursos ou agende uma conversa com nossa equipe de especialistas.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Carregando...</div>}>
        <ContactPageClient />
      </Suspense>
    </div>
  );
}
