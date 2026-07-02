import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheca a Governanca&Mais Consultoria, especialistas em capacitacao tecnica para gestores e servidores publicos municipais.',
};

const valores = [
  {
    title: 'Excelencia Tecnica',
    desc: 'Conteudo elaborado por especialistas com profundo conhecimento da administracao publica municipal e das normas dos tribunais de contas estaduais.',
  },
  {
    title: 'Aplicabilidade Pratica',
    desc: 'Metodologia focada em situacoes reais do dia a dia da gestao publica. Cada modulo e desenhado para gerar impacto imediato na rotina administrativa.',
  },
  {
    title: 'Atualizacao Permanente',
    desc: 'Nossos cursos sao revisados continuamente para refletir mudancas na legislacao, jurisprudencias dos tribunais e evolucao das boas praticas de gestao.',
  },
  {
    title: 'Comprometimento com o Resultado',
    desc: 'Medimos nosso sucesso pelo impacto real na qualidade da gestao dos municipios atendidos. Nosso compromisso vai alem da capacitacao: e com a transformacao.',
  },
];

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Sobre a Governanca&Mais</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Especialistas em capacitacao tecnica para a gestao publica municipal. Conhecimento que transforma administracoes.
          </p>
        </div>
      </section>

      {/* Missao */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider">Nossa Missao</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2 mb-6">
                Capacitar gestores e servidores publicos municipais com conhecimento tecnico, pratico e atualizado
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Governanca&Mais Consultoria nasceu da conviccao de que a qualidade da gestao publica municipal impacta diretamente a vida de milhoes de brasileiros. Municipios bem administrados entregam melhores servicos de saude, educacao, infraestrutura e assistencia social para seus cidadaos.
                </p>
                <p>
                  Atuamos com foco exclusivo na capacitacao de gestores e servidores do servico publico municipal, oferecendo cursos tecnicos de alta qualidade nas principais areas da administracao publica: gestao fiscal e orcamentaria, tributacao, saude, licitacoes, controle interno, educacao e muito mais.
                </p>
                <p>
                  Nossa equipe reune profissionais com decadas de experiencia pratica na gestao publica municipal, professores universitarios especializados em direito administrativo e financas publicas, e consultores com dominio das normas dos tribunais de contas de todo o pais.
                </p>
              </div>
            </div>
            <div className="bg-brand-light rounded-2xl p-10 flex flex-col gap-6">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-brand-navy">+20</div>
                <div className="text-sm text-gray-600 mt-1">Cursos no catalogo</div>
              </div>
              <div className="h-px bg-gray-200" />
              <div className="text-center">
                <div className="text-5xl font-extrabold text-brand-navy">7</div>
                <div className="text-sm text-gray-600 mt-1">Areas de atuacao</div>
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
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider">Nossos Valores</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2">
              O que nos guia em cada capacitacao
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valores.map((v, i) => (
              <div key={v.title} className="bg-white rounded-lg p-7 border border-gray-200">
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

      {/* Publico */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider">Nossa Abordagem</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mt-2">
              Capacitacao desenhada para a realidade municipal
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5 text-gray-600 leading-relaxed">
            <p>
              Diferentemente dos cursos academicos tradicionais, nossa metodologia parte dos problemas reais enfrentados pelos gestores municipais. Cada curso e estruturado com casos praticos, exemplos da legislacao em vigor e orientacoes diretamente aplicaveis na rotina da prefeitura.
            </p>
            <p>
              Atendemos municipios de todos os portes, do interior ao litoral, adaptando o conteudo as especificidades regionais e ao nivel de estrutura administrativa de cada prefeitura. Trabalhamos com secretarias, camaras municipais, orgaos de controle interno e com os proprios prefeitos e vereadores.
            </p>
            <p>
              Nosso compromisso e com a formacao de gestores tecnicamente preparados, capazes de tomar decisoes fundamentadas, evitar irregularidades e entregar melhores resultados para as populacoes que servem.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contato"
              className="inline-block px-8 py-3.5 bg-brand-navy text-white font-bold rounded hover:bg-brand-accent transition-colors"
            >
              Fale com nossa equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
