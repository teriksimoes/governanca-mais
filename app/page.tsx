import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Início — Governança&Mais Consultoria',
  description:
    'Capacitação técnica para prefeitos, secretários, vereadores e servidores municipais. Gestão fiscal, saúde, licitações, tributos e muito mais.',
};

const areas = [
  {
    icon: '📊',
    title: 'Gestão Fiscal e Orçamentária',
    desc: 'PPA, LDO, LOA, LRF e equilíbrio fiscal. Domínio completo do ciclo orçamentário municipal.',
  },
  {
    icon: '📋',
    title: 'Licitações e Contratos',
    desc: 'Nova Lei de Licitações (14.133/2021), pregão eletrônico, contratos administrativos e fiscalização.',
  },
  {
    icon: '🏥',
    title: 'Saúde (SUS)',
    desc: 'Gestão do SUS municipal, financiamento, auditoria e contratação de serviços de saúde.',
  },
  {
    icon: '🤝',
    title: 'Assistência Social',
    desc: 'SUAS, CRAS, CREAS, cofinanciamento federal e regulamentação da política municipal.',
  },
  {
    icon: '🎓',
    title: 'Educação (FUNDEB)',
    desc: 'Novo FUNDEB, EC 108/2020, aplicação de recursos e conformidade com o MEC.',
  },
  {
    icon: '🔍',
    title: 'Auditoria e Controle Interno',
    desc: 'Estruturação do controle interno, metodologias de auditoria e relacionamento com o TCE.',
  },
  {
    icon: '💰',
    title: 'Tributação Municipal',
    desc: 'IPTU, ITBI, ISS, cobrança administrativa, dívida ativa e cadastro técnico municipal.',
  },
  {
    icon: '🏗️',
    title: 'Obras e Patrimônio',
    desc: 'Licitação de obras, fiscalização, gestão de contratos e patrimônio público municipal.',
  },
];

const audiences = [
  { icon: '🏛️', title: 'Prefeitos e Vice-Prefeitos', desc: 'Liderança estratégica com responsabilidade legal' },
  { icon: '📁', title: 'Secretários Municipais', desc: 'Gestão de áreas críticas com segurança técnica' },
  { icon: '⚖️', title: 'Vereadores', desc: 'Fiscalização, legislação e representação eficaz' },
  { icon: '🧾', title: 'Contadores e Técnicos Contábeis', desc: 'Domínio da contabilidade pública e legislação fiscal' },
  { icon: '🔎', title: 'Controladores Internos', desc: 'Auditoria, conformidade e relacionamento com o TCE' },
  { icon: '⚖️', title: 'Assessores Jurídicos', desc: 'Licitações, contratos e legislação municipal atualizada' },
  { icon: '👥', title: 'Servidores Públicos em Geral', desc: 'Atualização profissional em diversas áreas da gestão' },
];

const diferenciais = [
  {
    icon: '🎯',
    title: 'Expertise em Gestão Pública',
    desc: 'Equipe de especialistas com ampla experiência na administração pública municipal, conhecendo a realidade e os desafios dos gestores.',
  },
  {
    icon: '📐',
    title: 'Conteúdo Prático e Aplicável',
    desc: 'Metodologia focada em situações reais do dia a dia da gestão municipal. O conhecimento é imediatamente aplicável na rotina administrativa.',
  },
  {
    icon: '🔄',
    title: 'Atualização Permanente',
    desc: 'Conteúdo constantemente revisado para refletir as mudanças na legislação, normas dos tribunais de contas e melhores práticas de gestão.',
  },
  {
    icon: '🗺️',
    title: 'Alcance Nacional',
    desc: 'Atendimento a municípios de todo o Brasil, com cursos adaptáveis às especificidades regionais e ao porte do município.',
  },
];

const stats = [
  { value: '+20', label: 'Cursos no catálogo' },
  { value: '7', label: 'Áreas de atuação' },
  { value: '100%', label: 'Conteúdo atualizado' },
  { value: 'BR', label: 'Alcance nacional' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white py-24 md:py-36">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" variant="full" invertText={true} />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-6">
            Capacitação para a gestão pública municipal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            Capacitação técnica para uma gestão pública
            <span className="text-brand-blue block md:inline"> eficiente e responsável</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Formamos prefeitos, secretários, vereadores e servidores com o conhecimento técnico necessário para administrar com excelência, segurança jurídica e resultados reais para o município.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="px-8 py-4 bg-brand-blue text-brand-navy font-bold rounded-full shadow-lg shadow-black/20 hover:bg-white hover:-translate-y-0.5 transition-all text-base"
            >
              Conhecer os cursos
            </Link>
            <Link
              href="/contato"
              className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white hover:text-brand-navy hover:border-white transition-all text-base"
            >
              Falar com um consultor
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-navy">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas de atuação */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">O que oferecemos</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-3">Áreas de Atuação</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cobertura completa das áreas estratégicas da administração pública municipal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center text-2xl mb-4">
                  {area.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-2 text-sm">{area.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">Público-alvo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-3">Para Quem É</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cursos desenvolvidos para os diferentes perfis do serviço público municipal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-center text-center p-7 rounded-2xl bg-brand-light hover:bg-brand-soft transition-colors"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="font-bold text-brand-navy mb-1 text-sm">{a.title}</h3>
                <p className="text-xs text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-2 mb-3">Por que a Governança&Mais</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Diferenciais que fazem a diferença na capacitação da gestão pública.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d) => (
              <div key={d.title} className="flex flex-col gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                  {d.icon}
                </div>
                <h3 className="font-bold text-brand-dark">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-brand-navy text-white">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pronto para transformar sua gestão municipal?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Entre em contato e descubra como a Governança&Mais pode capacitar sua equipe.
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-brand-blue text-brand-navy font-bold rounded-full shadow-lg shadow-black/20 hover:bg-white hover:-translate-y-0.5 transition-all text-base"
          >
            Falar com nossa equipe
          </Link>
        </div>
      </section>
    </>
  );
}
