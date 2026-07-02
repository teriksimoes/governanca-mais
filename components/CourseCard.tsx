import Link from 'next/link';
import type { Course } from '@/data/courses';
import { audienceLabels, categoryLabels } from '@/data/courses';

const categoryColors: Record<string, string> = {
  'fiscal-orcamentaria': 'bg-blue-100 text-blue-800',
  tributacao: 'bg-amber-100 text-amber-800',
  saude: 'bg-green-100 text-green-800',
  'assistencia-social': 'bg-purple-100 text-purple-800',
  educacao: 'bg-orange-100 text-orange-800',
  planejamento: 'bg-teal-100 text-teal-800',
  administracao: 'bg-slate-100 text-slate-700',
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="flex flex-wrap gap-2">
        <span
          className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium ${
            categoryColors[course.category] ?? 'bg-gray-100 text-gray-700'
          }`}
        >
          {categoryLabels[course.category]}
        </span>
      </div>

      <h3 className="font-bold text-brand-dark text-base leading-snug">
        {course.title}
      </h3>

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
        {course.description}
      </p>

      {course.modules && (
        <p className="text-xs text-gray-500">
          {course.modules.length} módulos
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {course.audience.map((a) => (
          <span
            key={a}
            className="inline-block px-2 py-0.5 rounded-full text-xs bg-brand-light text-brand-navy font-medium border border-brand-navy/10"
          >
            {audienceLabels[a]}
          </span>
        ))}
      </div>

      <Link
        href={`/contato?curso=${course.slug}`}
        className="mt-auto inline-block text-center px-4 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-accent transition-colors"
      >
        Tenho interesse
      </Link>
    </div>
  );
}
