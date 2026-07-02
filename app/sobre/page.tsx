import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a Governança&Mais Consultoria, especialistas em capacitação técnica para gestores e servidores públicos municipais.',
};

const valores = [
  {
    title: 'Excelência Técnica',
    desc: 'Conteúdo elaborado por especialistas com profundo conhecimento da administração pública municipal e das normas dos tribunais de contas estaduais.',
  },
  {
    title: 'Aplicabilidade Prática',
    desc: 'Metodologia focada em situações reais do dia a dia da gestão pública. Cada módulo é desenhado para gerar impacto imediato na rotina administrativa.',
  },
  {
    title: 'Atualização Permanente',
    desc: 'Nossos cursos são revisados continuamente para refletir mudanças na legislação, jurisprudências dos tribunais e evolução das boas práticas de gestão.',
  },
  {
    title: 'Comprometimento com o Resultado',
    desc: 'Medimos nosso sucesso pelo impacto real na qualidade da gestão dos municípios atendidos. Nosso compromisso vai além da capacitação: é com a transformação.',
  },
];

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white py-20">
        <div className="absolute inset-0 hero-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4">
            Quem somos
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Sobre a Governança&Mais</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Especialistas em capacitação técnica para a gestão pública municipal. Conhecimento que transforma administrações.
          </p>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">Nossa Missão</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2 mb-6">
                Capacitar gestores e servidores públicos municipais com conhecimento técnico, prático e atualizado
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Governança&Mais Consultoria nasceu da convicção de que a qualidade da gestão pública municipal impacta diretamente a vida de milhões de brasileiros. Municípios bem administrados entregam melhores serviços de saúde, educação, infraestrutura e assistência social para seus cidadãos.
                </p>
                <p>
                  Atuamos com foco exclusivo na capacitação de gestores e servidores do serviço público municipal, oferecendo cursos técnicos de alta qualidade nas principais áreas da administração pública: gestão fiscal e orçamentária, tributação, saúde, licitações, controle interno, educação e muito mais.
                </p>
                <p>
                  Nossa equipe reúne profissionais com décadas de experiência prática na gestão pública municipal, professores universitários especializados em direito administrativo e finanças públicas, e consultores com domínio das normas dos tribunais de contas de todo o país.
                </p>
              </div>
            </div>
            <div className="bg-brand-light rounded-2xl p-10 flex flex-col gap-6">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-brand-navy">+20</div>
                <div className="text-sm text-gray-600 mt-1">Cursos no catálogo</div>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="text-center">
                <div className="text-5xl font-extrabold text-brand-navy">7</div>
                <div className="text-sm text-gray-600 mt-1">Áreas de atuação</div>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="text-center">
                <div className="text-5xl font-extrabold text-brand-navy">🇧🇷</div>
                <div className="text-sm text-gray-600 mt-1">Alcance nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">Nossos Valores</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2">
              O que nos guia em cada capacitação
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-brand-dark">{v.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Público */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">Nossa Abordagem</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2">
              Capacitação desenhada para a realidade municipal
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5 text-gray-600 leading-relaxed">
            <p>
              Diferentemente dos cursos acadêmicos tradicionais, nossa metodologia parte dos problemas reais enfrentados pelos gestores municipais. Cada curso é estruturado com casos práticos, exemplos da legislação em vigor e orientações diretamente aplicáveis na rotina da prefeitura.
            </p>
            <p>
              Atendemos municípios de todos os portes, do interior ao litoral, adaptando o conteúdo às especificidades regionais e ao nível de estrutura administrativa de cada prefeitura. Trabalhamos com secretarias, câmaras municipais, órgãos de controle interno e com os próprios prefeitos e vereadores.
            </p>
            <p>
              Nosso compromisso é com a formação de gestores tecnicamente preparados, capazes de tomar decisões fundamentadas, evitar irregularidades e entregar melhores resultados para as populações que servem.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contato"
              className="inline-block px-8 py-3.5 bg-brand-navy text-white font-bold rounded-full hover:bg-brand-accent transition-colors"
            >
              Fale com nossa equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
