import Link from 'next/link';
import Logo from './Logo';

const quickLinks = [
  { href: '/', label: 'Início' },
  { href: '/cursos', label: 'Nossos Cursos' },
  { href: '/sobre', label: 'Sobre a Empresa' },
  { href: '/contato', label: 'Contato' },
];

const areas = [
  'Gestão Fiscal e Orçamentária',
  'Tributação Municipal',
  'Saúde (SUS)',
  'Assistência Social',
  'Educação (FUNDEB)',
  'Auditoria e Controle Interno',
  'Planejamento Municipal',
  'Administração Pública',
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size="sm" variant="full" invertText={true} />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mt-3">
              Especialistas em capacitação técnica para gestores e servidores do serviço público municipal. Conhecimento que transforma a administração pública.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
              Áreas de Atuação
            </h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Governança&Mais Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Capacitação técnica para a gestão pública municipal
          </p>
        </div>
      </div>
    </footer>
  );
}
