export type CourseCategory =
  | 'fiscal-orcamentaria'
  | 'tributacao'
  | 'saude'
  | 'assistencia-social'
  | 'educacao'
  | 'planejamento'
  | 'administracao';

export type Audience =
  | 'prefeito'
  | 'secretario'
  | 'vereador'
  | 'contador'
  | 'controlador'
  | 'assessor-juridico'
  | 'servidor';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  audience: Audience[];
  description: string;
  modules?: string[];
  slug: string;
}

export interface CourseGroup {
  category: CourseCategory;
  label: string;
  courses: Course[];
}

export const audienceLabels: Record<Audience, string> = {
  prefeito: 'Prefeitos',
  secretario: 'Secretários',
  vereador: 'Vereadores',
  contador: 'Contadores',
  controlador: 'Controladores Internos',
  'assessor-juridico': 'Assessores Jurídicos',
  servidor: 'Servidores Públicos',
};

export const categoryLabels: Record<CourseCategory, string> = {
  'fiscal-orcamentaria': 'Gestão Fiscal e Orçamentária',
  tributacao: 'Tributação e Arrecadação',
  saude: 'Saúde (SUS)',
  'assistencia-social': 'Assistência Social',
  educacao: 'Educação',
  planejamento: 'Planejamento',
  administracao: 'Administração e Ordem Pública',
};

export const courses: Course[] = [
  // Gestão Fiscal, Orçamentária e Administrativa
  {
    id: 'ordenador-despesas',
    slug: 'ordenador-despesas',
    title: 'Curso do Ordenador de Despesas no Município',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario'],
    description:
      'Curso completo e estruturado para ordenadores de despesas municipais, abordando todas as responsabilidades legais e técnicas do cargo. Capacita gestores para atuar com segurança jurídica e eficiência administrativa nas diversas frentes da gestão pública.',
    modules: [
      'Obrigações do Ordenador de Despesas',
      'Recursos Humanos e Gestão de Pessoas',
      'Portal da Transparência',
      'Planejamento Estratégico',
      'Contabilidade Pública',
      'Execução Orçamentária',
      'Temas Recorrentes em Licitações',
      'Obras',
      'Gestão de Recursos Físicos',
      'Auditoria Interna',
    ],
  },
  {
    id: 'orcamento-publico',
    slug: 'orcamento-publico',
    title: 'Orçamento Público Municipal',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario', 'contador', 'servidor'],
    description:
      'Fundamentos e práticas do ciclo orçamentário municipal, desde a elaboração do PPA e LDO até a execução da LOA. Conteúdo essencial para gestores e técnicos envolvidos no planejamento financeiro do município.',
  },
  {
    id: 'equilibrio-fiscal',
    slug: 'equilibrio-fiscal',
    title: 'Equilíbrio Fiscal nas Contas Públicas do Município',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario', 'contador'],
    description:
      'Estratégias e instrumentos para manutenção do equilíbrio fiscal municipal, com foco na Lei de Responsabilidade Fiscal e nas boas práticas de gestão das finanças públicas.',
  },
  {
    id: 'eficiencia-financeira',
    slug: 'eficiencia-financeira',
    title: 'Eficiência na Gestão Financeira Municipal e sua Relação com os Gastos nas Funções de Governo',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario', 'contador'],
    description:
      'Análise da eficiência dos gastos públicos municipais por função de governo. Ferramentas de avaliação e monitoramento para otimização dos recursos disponíveis.',
  },
  {
    id: 'controle-interno',
    slug: 'controle-interno',
    title: 'Controle Interno Municipal',
    category: 'fiscal-orcamentaria',
    audience: ['controlador', 'contador', 'servidor'],
    description:
      'Estruturação e operação do sistema de controle interno municipal conforme as normas dos Tribunais de Contas. Responsabilidades, metodologias e rotinas de auditoria interna.',
  },
  {
    id: 'gestao-pessoal',
    slug: 'gestao-pessoal',
    title: 'Gestão de Pessoal no Serviço Público Municipal',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario', 'servidor'],
    description:
      'Legislação e práticas de gestão de recursos humanos no âmbito municipal. Regime jurídico, folha de pagamento, limites de gastos com pessoal e conformidade com a LRF.',
  },
  {
    id: 'politicas-publicas',
    slug: 'politicas-publicas',
    title: 'Políticas Públicas para o Município',
    category: 'fiscal-orcamentaria',
    audience: ['prefeito', 'secretario', 'vereador'],
    description:
      'Formulação, implementação e avaliação de políticas públicas no contexto municipal. Ciclo de políticas públicas, participação social e indicadores de desempenho.',
  },

  // Tributação e Arrecadação
  {
    id: 'itbi',
    slug: 'itbi',
    title: 'Arrecadação do ITBI — Imposto sobre Transmissão de Bens Imóveis',
    category: 'tributacao',
    audience: ['contador', 'servidor'],
    description:
      'Legislação, cálculo e procedimentos de arrecadação do ITBI. Redução da renúncia fiscal e melhores práticas de cobrança e fiscalização.',
  },
  {
    id: 'cobranca-tributos',
    slug: 'cobranca-tributos',
    title: 'Cobrança Administrativa de Tributos Municipais',
    category: 'tributacao',
    audience: ['contador', 'servidor', 'assessor-juridico'],
    description:
      'Procedimentos administrativos para cobrança eficiente de tributos municipais. Notificações, parcelamentos, inscrição em dívida ativa e execução fiscal.',
  },
  {
    id: 'iptu',
    slug: 'iptu',
    title: 'O Imposto sobre a Propriedade Predial e Territorial Urbana (IPTU)',
    category: 'tributacao',
    audience: ['contador', 'servidor', 'secretario'],
    description:
      'Legislação, base de cálculo, lançamento e cobrança do IPTU. Atualização da planta genérica de valores e incremento da arrecadação municipal.',
  },
  {
    id: 'cadastro-tecnico',
    slug: 'cadastro-tecnico',
    title: 'A Importância da Criação e Implementação do Cadastro Técnico Municipal',
    category: 'tributacao',
    audience: ['secretario', 'servidor'],
    description:
      'Criação e gestão do Cadastro Técnico Municipal como instrumento de planejamento urbano e tributação. Geoprocessamento, dados imobiliários e incremento da receita própria.',
  },

  // Saúde (SUS)
  {
    id: 'gestor-sus',
    slug: 'gestor-sus',
    title: 'Formação e Qualificação de Gestor Municipal do SUS',
    category: 'saude',
    audience: ['secretario', 'servidor'],
    modules: ['Módulo 1', 'Módulo 2', 'Módulo 3', 'Módulo 4', 'Módulo 5', 'Módulo 6'],
    description:
      'Programa completo de formação para gestores municipais de saúde. Seis módulos abrangendo legislação do SUS, financiamento, planejamento em saúde, vigilância epidemiológica, atenção primária e gestão de redes de atenção.',
  },
  {
    id: 'financiamento-aps',
    slug: 'financiamento-aps',
    title: 'Entendendo o Novo Modelo de Financiamento da Atenção Primária em Saúde',
    category: 'saude',
    audience: ['secretario', 'servidor', 'contador'],
    description:
      'Novo modelo de financiamento da Atenção Primária em Saúde (APS), incluindo o Previne Brasil. Capitação ponderada, pagamento por desempenho e incentivos para saúde bucal.',
  },
  {
    id: 'auditoria-saude',
    slug: 'auditoria-saude',
    title: 'Desenvolvendo a Moderna Auditoria no Serviço Municipal de Saúde',
    category: 'saude',
    audience: ['controlador', 'servidor'],
    description:
      'Metodologias modernas de auditoria aplicadas ao setor municipal de saúde. Auditoria assistencial, de sistemas e de gestão. Conformidade com as normas do SUS.',
  },
  {
    id: 'contratacao-saude',
    slug: 'contratacao-saude',
    title: 'Orientações para Contratação de Serviços de Saúde',
    category: 'saude',
    audience: ['secretario', 'assessor-juridico', 'servidor'],
    description:
      'Marco legal e procedimentos para contratação de serviços de saúde pelo município. Contratos com OS, OSCIP, parcerias e prestadores privados.',
  },
  {
    id: 'rede-colaborativa',
    slug: 'rede-colaborativa',
    title: 'Formação de Rede Colaborativa para o Fortalecimento da Gestão Municipal do SUS',
    category: 'saude',
    audience: ['secretario', 'servidor'],
    description:
      'Construção de redes colaborativas intermunicipais para fortalecer a gestão do SUS. Consórcios públicos de saúde, pactuações regionais e integração de serviços.',
  },
  {
    id: 'emendas-saude',
    slug: 'emendas-saude',
    title: 'Conhecimento de Aplicação de Verbas Oriundas de Emendas Parlamentares, Convênios, Repasses e Demais Verbas do Ministério da Saúde',
    category: 'saude',
    audience: ['secretario', 'contador', 'servidor'],
    description:
      'Captação, aplicação e prestação de contas de recursos federais para saúde. Emendas parlamentares, convênios, transferências fundo a fundo e demais mecanismos de financiamento.',
  },

  // Assistência Social e Gestão de Crises
  {
    id: 'politica-assistencia',
    slug: 'politica-assistencia',
    title: 'Regulamentação da Política Municipal de Assistência Social',
    category: 'assistencia-social',
    audience: ['secretario', 'servidor'],
    description:
      'SUAS, CRAS, CREAS e demais equipamentos da rede de assistência social. Cofinanciamento federal, gestão do SUAS e conformidade com as normativas do MDS.',
  },
  {
    id: 'gerenciamento-crises',
    slug: 'gerenciamento-crises',
    title: 'Gerenciamento de Crises',
    category: 'assistencia-social',
    audience: ['prefeito', 'secretario'],
    description:
      'Metodologias e ferramentas para gestão de crises no âmbito municipal. Protocolos de comunicação, tomada de decisão sob pressão e recuperação institucional.',
  },

  // Educação
  {
    id: 'fundeb',
    slug: 'fundeb',
    title: 'Aplicação no Ensino e as Novas Regras de Funcionamento do FUNDEB',
    category: 'educacao',
    audience: ['secretario', 'contador', 'servidor'],
    description:
      'Novo FUNDEB: regras de distribuição, complementação da União, contas específicas e aplicação dos recursos. Conformidade com a EC 108/2020 e legislação complementar.',
  },

  // Planejamento
  {
    id: 'ppa-municipal',
    slug: 'ppa-municipal',
    title: 'Formação de Multiplicadores para Organizar a Elaboração do PPA Municipal — Ferramentas Metodológicas',
    category: 'planejamento',
    audience: ['secretario', 'servidor'],
    description:
      'Capacitação de multiplicadores para conduzir o processo participativo de elaboração do Plano Plurianual Municipal. Ferramentas metodológicas, diagnóstico territorial e alinhamento com ODS.',
  },

  // Administração e Ordem Pública
  {
    id: 'posturas-municipais',
    slug: 'posturas-municipais',
    title: 'Posturas Municipais',
    category: 'administracao',
    audience: ['secretario', 'servidor', 'assessor-juridico'],
    description:
      'Legislação de posturas municipais: poder de polícia, licenciamento de atividades, fiscalização urbana e aplicação de sanções. Atualização do código de posturas e conformidade constitucional.',
  },
];

export const courseGroups: CourseGroup[] = Object.entries(categoryLabels).map(
  ([category, label]) => ({
    category: category as CourseCategory,
    label,
    courses: courses.filter((c) => c.category === category),
  })
);
