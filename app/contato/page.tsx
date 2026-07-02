import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Governanca&Mais Consultoria. Solicite uma proposta de capacitacao para sua prefeitura ou orgao publico.',
};

export default function ContatoPage() {
  return (
    <div>
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Entre em Contato</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Solicite uma proposta, tire duvidas sobre nossos cursos ou agende uma conversa com nossa equipe de especialistas.
          </p>
        </div>
      </div>
      <Suspense fallback={<div className="py-20 text-center text-gray-400">Carregando...</div>}>
        <ContactPageClient />
      </Suspense>
    </div>
  );
}
