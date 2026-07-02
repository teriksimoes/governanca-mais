import type { Metadata } from 'next';
import CoursesClient from './CoursesClient';

export const metadata: Metadata = {
  title: 'Nossos Cursos',
  description:
    'Catalogo completo de cursos de capacitacao para gestores e servidores publicos municipais. Filtre por area tematica ou publico-alvo.',
};

export default function CursosPage() {
  return (
    <div>
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Nossos Cursos</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Catalogo completo de capacitacoes para a gestao publica municipal. Encontre o curso ideal para sua area de atuacao.
          </p>
        </div>
      </div>
      <CoursesClient />
    </div>
  );
}
