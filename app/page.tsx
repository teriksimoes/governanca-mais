import type { Metadata } from 'next';
import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Inicio — Governanca&Mais Consultoria',
  description:
    'Capacitacao tecnica para prefeitos, secretarios, vereadores e servidores municipais. Gestao fiscal, saude, licitacoes, tributos e muito mais.',
};

const areas = [
  {
    icon: '📊',
    title: 'Gestao Fiscal e Orcamentaria',
    desc: 'PPA, LDO, LOA, LRF e equilíbrio fiscal. Domínio completo do ciclo orçamentário municipal.',
  },
  {
    icon: '📋',
    title: 'Licitacoes e Contratos',
    desc: 'Nova Lei de Licitacoes (14.133/2021), pregao eletronico, contratos administrativos e fiscalizacao.',
  },
  {
    icon: '🏥',
    title: 'Saude (SUS)',
    desc: 'Gestao do SUS municipal, financiamento, auditoria e contratacao de servicos de saude.',
  },
  {
    icon: '🤝',
    title: 'Assistencia Social',
    desc: 'SUAS, CRAS, CREAS, cofinanciamento federal e regulamentacao da politica municipal.',
  },
  {
    icon: '🎓',
    title: 'Educacao (FUNDEB)',
    desc: 'Novo FUNDEB, EC 108/2020, aplicacao de recursos e conformidade com o MEC.',
  },
  {
    icon: '🔍',
    title: 'Auditoria e Controle Interno',
    desc: 'Estruturacao do controle interno, metodologias de auditoria e relacionamento com o TCE.',
  },
  {
    icon: '💰',
    title: 'Tributacao Municipal',
    desc: 'IPTU, ITBI, ISS, cobrança administrativa, divida ativa e cadastro tecnico municipal.',
  },
  {
    icon: '🏗️',
    title: 'Obras e Patrimonio',
    desc: 'Licitacao de obras, fiscalizacao, gestao de contratos e patrimonio publico municipal.',
  },
];

const audiences = [
  { icon: '🏛️', title: 'Prefeitos e Vice-Prefeitos', desc: 'Lideranca estrategica com responsabilidade legal' },
  { icon: '📁', title: 'Secretarios Municipais', desc: 'Gestao de areas criticas com seguranca tecnica' },
  { icon: '⚖️', title: 'Vereadores', desc: 'Fiscalizacao, legislacao e representacao eficaz' },
  { icon: '🧾', title: 'Contadores e Tecnicos Contabeis', desc: 'Dominio da contabilidade publica e legislacao fiscal' },
  { icon: '🔎', title: 'Controladores Internos', desc: 'Auditoria, conformidade e relacionamento com o TCE' },
  { icon: '⚖️', title: 'Assessores Juridicos', desc: 'Licitacoes, contratos e legislacao municipal atualizada' },
  { icon: '👥', title: 'Servidores Publicos em Geral', desc: 'Atualizacao profissional em diversas areas da gestao' },
];

const diferenciais = [
  {
    icon: '🎯',
    title: 'Expertise em Gestao Publica',
    desc: 'Equipe de especialistas com ampla experiencia na administracao publica municipal, conhecendo a realidade e os desafios dos gestores.',
  },
  {
    icon: '📐',
    title: 'Conteudo Pratico e Aplicavel',
    desc: 'Metodologia focada em situacoes reais do dia a dia da gestao municipal. O conhecimento e imediatamente aplicavel na rotina administrativa.',
  },
  {
    icon: '🔄',
    title: 'Atualizacao Permanente',
    desc: 'Conteudo constantemente revisado para refletir as mudancas na legislacao, normas dos tribunais de contas e melhores praticas de gestao.',
  },
  {
    icon: '🗺️',
    title: 'Alcance Nacional',
    desc: 'Atendimento a municipios de todo o Brasil, com cursos adaptaveis as especificidades regionais e ao porte do municipio.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" variant="full" invertText={true} />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
            Capacitacao tecnica para uma gestao publica
            <span className="text-brand-blue block md:inline"> eficiente e responsavel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Formamos prefeitos, secretarios, vereadores e servidores com o conhecimento tecnico necessario para administrar com excelencia, seguranca juridica e resultados reais para o municipio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="px-8 py-4 bg-brand-blue text-white font-bold rounded hover:bg-brand-accent transition-colors text-base"
            >
              Conhecer os cursos
            </Link>
            <Link
              href="/contato"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-brand-navy transition-colors text-base"
            >
              Falar com um consultor
            </Link>
          </div>
        </div>
      </section>

      {/* Areas de atuacao */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-3">Areas de Atuacao</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cobertura completa das areas estrategicas da administracao publica municipal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md hover:border-brand-blue transition-all"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2 text-sm">{area.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem e */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-3">Para Quem e</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cursos desenvolvidos para os diferentes perfis do servico publico municipal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-brand-light border border-gray-100"
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
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-3">Por que a Governanca&Mais</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Diferenciais que fazem a diferenca na capacitacao da gestao publica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d) => (
              <div key={d.title} className="flex flex-col gap-3">
                <div className="text-4xl">{d.icon}</div>
                <h3 className="font-bold text-brand-dark">{d.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Pronto para transformar sua gestao municipal?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Entre em contato e descubra como a Governanca&Mais pode capacitar sua equipe.
          </p>
          <Link
            href="/contato"
            className="inline-block px-10 py-4 bg-brand-blue text-white font-bold rounded hover:bg-brand-accent transition-colors text-base"
          >
            Falar com nossa equipe
          </Link>
        </div>
      </section>
    </>
  );
}
