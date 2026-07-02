import type { Metadata } from 'next';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = {
  title: 'Nossos Cursos',
  description:
    'Catálogo completo de cursos de capacitação para gestores e servidores públicos municipais. Filtre por área temática ou público-alvo.',
};

export default function CursosPage() {
  return (
    <div>
      <div className="relative overflow-hidden bg-brand-navy text-white py-20">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
            Catálogo completo
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Nossos Cursos</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Catálogo completo de capacitações para a gestão pública municipal. Encontre o curso ideal para sua área de atuação.
          </p>
        </div>
      </div>
      <CoursesClient />
    </div>
  );
}
