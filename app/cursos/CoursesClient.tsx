'use client';

import { useState } from 'react';
import { courses, categoryLabels, audienceLabels } from '@/data/courses';
import type { CourseCategory, Audience } from '@/data/courses';
import CourseCard from '@/components/CourseCard';

const ALL = 'all';

export default function CoursesClient() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | typeof ALL>(ALL);
  const [activeAudience, setActiveAudience] = useState<Audience | typeof ALL>(ALL);

  const filtered = courses.filter((c) => {
    const catOk = activeCategory === ALL || c.category === activeCategory;
    const audOk = activeAudience === ALL || c.audience.includes(activeAudience as Audience);
    return catOk && audOk;
  });

  const categories = Object.entries(categoryLabels) as [CourseCategory, string][];
  const audiences = Object.entries(audienceLabels) as [Audience, string][];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filters */}
      <div className="mb-10 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Filtrar por área</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(ALL)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === ALL
                  ? 'bg-brand-navy text-white border-brand-navy'
                  : 'border-gray-300 text-gray-600 hover:border-brand-navy hover:text-brand-navy'
              }`}
            >
              Todas as áreas
            </button>
            {categories.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === key
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'border-gray-300 text-gray-600 hover:border-brand-navy hover:text-brand-navy'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Filtrar por público</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveAudience(ALL)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeAudience === ALL
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'border-gray-300 text-gray-600 hover:border-brand-accent hover:text-brand-accent'
              }`}
            >
              Todos os públicos
            </button>
            {audiences.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveAudience(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeAudience === key
                    ? 'bg-brand-accent text-white border-brand-accent'
                    : 'border-gray-300 text-gray-600 hover:border-brand-accent hover:text-brand-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-6">
        {filtered.length} {filtered.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 bg-brand-light rounded-2xl">
          <p className="text-lg">Nenhum curso encontrado com os filtros selecionados.</p>
          <button
            onClick={() => { setActiveCategory(ALL); setActiveAudience(ALL); }}
            className="mt-4 text-brand-accent underline text-sm"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
