/**
 * OPERAÇÃO DIREITA BRASIL — BANCO DE DADOS EDITORIAL E ESTATÍSTICO
 * Rigor factual, profundidade filosófica e contextualização institucional.
 */

const ODB_DATA = {
  // Metadados Gerais
  meta: {
    title: "Operação Direita Brasil — Plataforma de Fundamentos, Ideias e Futuro",
    edition: "Edição Estratégica 2026/2030",
    curation: "Conselho Editorial de Políticas Públicas e Estudos Estratégicos",
    institution: "Comitê Acadêmico & Tecnológico",
    lastUpdated: "2026"
  },

  // Equipe de Pesquisa & Autoria do Projeto (Integrantes do Grupo)
  team: [
    { name: "Miguel Henrique", role: "Coordenação Geral & Pesquisa Estratégica", area: "Estratégia & Coordenação" },
    { name: "Allan Brito", role: "Pesquisa Institucional & Constitucional", area: "História & Instituições" },
    { name: "Yago Luiz", role: "Análise Econômica & Livre Mercado", area: "Economia & Políticas Públicas" },
    { name: "Pietro Duarte", role: "Finanças Públicas & Responsabilidade Fiscal", area: "Economia & Finanças" },
    { name: "Pedro Costa", role: "Modelagem de Dados & Séries Históricas", area: "Estatística & Indicadores" },
    { name: "Kaua Fonseca", role: "Segurança Pública & Análise Jurídica", area: "Legislação & Justiça" },
    { name: "Gabriel Pereira", role: "Estudos Históricos & Teoria Política", area: "História & Teoria" },
    { name: "Gabriel Antonio", role: "Filosofia Política & Escolas de Pensamento", area: "Filosofia Política" },
    { name: "Pedro Roque", role: "Educação, Meritocracia & Capital Humano", area: "Educação & Sociedade" },
    { name: "Bernardo Henrique", role: "Arquitetura Digital & Engenharia Web", area: "Tecnologia & Sistemas" },
    { name: "Maria Leticia", role: "Redação Editorial & Análise de Políticas Públicas", area: "Comunicação & Conteúdo" },
    { name: "Sara Fidelix", role: "Direção de Arte, Identidade Visual & UX/UI", area: "Design & UX/UI" },
    { name: "Eduardo Ribeiro", role: "Curadoria Bibliográfica & Verificação Factual", area: "Acervo & Metodologia" }
  ],

  // As 4 Grandes Vertentes da Direita
  schools: [
    {
      id: "liberalismo",
      name: "Liberalismo Clássico & Econômico",
      tagline: "Primazia do indivíduo, livre mercado, governo limitado e império da lei.",
      thinkers: ["Adam Smith", "John Locke", "Friedrich Hayek", "Milton Friedman", "Ludwig von Mises", "Roberto Campos"],
      corePrinciple: "A liberdade individual é indissociável da liberdade econômica; a ordem espontânea de mercado aloca recursos com maior eficiência do que o planejamento central.",
      roleOfState: "Garantir direitos fundamentais (vida, liberdade, propriedade), segurança pública, defesa nacional, cumprimento de contratos e regulação estritamente necessária.",
      brazilianContext: "Inspirou o Manifesto dos Pioneiros da Educação Nova no aspecto de liberdade, a criação do Banco Central por Campos e Bulhões (PAEG 1964-67), as reformas de desestatização dos anos 90 e a Lei de Liberdade Econômica (Lei 13.874/2019).",
      divergence: "Diverge dos conservadores no que tange a costumes (liberais tendem ao individualismo laico) e dos nacional-desenvolvimentistas ao rejeitar subsídios estatais a empresas escolhidas ('campeãs nacionais')."
    },
    {
      id: "conservadorismo",
      name: "Conservadorismo Constitucional & Filosófico",
      tagline: "Preservação da ordem moral, prudência institucional, família e corpos intermediários.",
      thinkers: ["Edmund Burke", "Alexis de Tocqueville", "Russell Kirk", "Michael Oakeshott", "Roger Scruton", "Gilberto Freyre"],
      corePrinciple: "A sociedade é uma parceria entre os mortos, os vivos e os que ainda vão nascer; reformas devem ser prudentes e respeitar as instituições testadas pelo tempo.",
      roleOfState: "Proteger a ordem pública, salvaguardar a soberania nacional, preservar as tradições civilizatórias ocidentais e assegurar um ambiente institucional de estabilidade moral.",
      brazilianContext: "Marcou o pensamento político do Império (Bernardo Pereira de Vasconcelos, Marquês de Olinda), a União Democrática Nacional (UDN), a fundação de think tanks contemporâneos e movimentos em defesa da família e da liberdade religiosa.",
      divergence: "Critica o materialismo estrito ou utilitarismo desmedido de certos liberais; enfatiza que mercados livres requerem um alicerce moral sólido para não degenerarem em anomia ou cronismo."
    },
    {
      id: "libertarianismo",
      name: "Libertarianismo & Escola Austríaca",
      tagline: "Soberania individual absoluta, princípio da não-agressão e mercado irrestrito.",
      thinkers: ["Murray Rothbard", "David Friedman", "Robert Nozick", "Hans-Hermann Hoppe"],
      corePrinciple: "Todo indivíduo tem autopropriedade irrestrita; qualquer intervenção estatal coativa é ilegítima ou antieconômica. Defesa radical da propriedade e dos contratos privados.",
      roleOfState: "Minarquismo (Estado ultrarreduzido apenas a polícias, tribunais e defesa) ou Anarcocapitalismo (todos os serviços prestados pela iniciativa privada em concorrência).",
      brazilianContext: "Ganhou expressivo protagonismo no Brasil a partir de 2013 com think tanks juvenis (Instituto Mises Brasil, Estudantes Pela Liberdade), conferências e ampla penetração em faculdades de Economia e Direito.",
      divergence: "Opõe-se com veemência tanto ao conservadorismo moral compulsório (por meio da lei) quanto a qualquer forma de intervenção estatal defendida pela direita desenvolvimentista."
    },
    {
      id: "nacional",
      name: "Direita Nacional-Desenvolvimentista / Ordoliberalismo",
      tagline: "Soberania geoestratégica, ordem institucional forte, infraestrutura e segurança da Pátria.",
      thinkers: ["Alexander Hamilton", "Wilhelm Röpke", "Walter Eucken", "Golbery do Couto e Silva", "Mário Henrique Simonsen"],
      corePrinciple: "O mercado opera com excelência quando inserido em uma moldura legal rigorosa (ordoliberalismo); o Estado tem papel estratégico em infraestrutura crítica, fronteiras, soberania alimentar e aeroespacial.",
      roleOfState: "Garante soberania territorial, defesa cibernética e aeroespacial, e constrói redes estruturantes que o setor privado isoladamente não financia no curto prazo.",
      brazilianContext: "Historicamente presente na geopolítica da Escola Superior de Guerra (ESG), nos grandes projetos de infraestrutura da década de 1970 (Itaipu, Embraer, telecomunicações) e na bancada ruralista pró-defesa das fronteiras agrícolas.",
      divergence: "Defende papel ativo do Estado em áreas estratégicas de soberania e defesa, contrastando com o ceticismo dos liberais puros em relação a gastos públicos de fomento."
    }
  ],

  // Linha do Tempo Histórica
  timeline: [
    {
      year: "1789",
      title: "Origem do Termo: Assembleia Nacional Constituinte Francesa",
      desc: "À direita do presidente da Assembleia sentavam-se os moderados e defensores da estabilidade constitucional, da monarquia parlamentar e da continuidade das leis; à esquerda, os jacobinos radicais partidários da ruptura revolucionária.",
      impact: "Nasce a distinção política entre evolução gradual com respeito às instituições versus engenharia social utópica."
    },
    {
      year: "1824-1889",
      title: "Império do Brasil: Constitucionalismo e o Partido Conservador",
      desc: "Lideranças como Bernardo Pereira de Vasconcelos, Marquês de Olinda e Paulino José Soares de Sousa construíram a estabilidade do Império, a unidade territorial do Brasil e o parlamentarismo com a Carta de 1824.",
      impact: "Preservação da integridade continental do Brasil frente à fragmentação hispano-americana."
    },
    {
      year: "1891-1930",
      title: "República Velha e o Liberalismo Jurídico de Rui Barbosa",
      desc: "Rui Barbosa e juristas da época redigem a primeira Constituição Republicana, inspirada no modelo federalista americano, assegurando garantias individuais, o habeas corpus e a separação entre Igreja e Estado.",
      impact: "Estabelecimento do federalismo, descentralização inicial e primazia dos direitos civis."
    },
    {
      year: "1945-1964",
      title: "A UDN e a Batalha das Ideias: Roberto Campos e Eugênio Gudin",
      desc: "Fundação da UDN e protagonismo de economistas pioneiros como Eugênio Gudin e Roberto Campos, que alertavam contra o nacionalismo inflacionário e defendiam atração de capitais estrangeiros, rigor orçamentário e câmbio livre.",
      impact: "Consolidação da primeira tradição liberal-conservadora moderna na imprensa e na academia brasileira."
    },
    {
      year: "1964-1985",
      title: "O Período Militar: Sucessos Técnicos e Limitações Institucionais",
      desc: "Análise crítica e factual: Implementou reformas fiscais e financeiras modernas (PAEG - Bulhões e Campos), criou o SFH, FGTS e BC, mas manteve viés estatizante (mais de 200 estatais), inflacionário e sem as liberdades civis da democracia constitucional plena.",
      impact: "Evidenciou para a direita democrática moderna que prosperidade sustentável exige indispensavelmente Estado de Direito, liberdade civil e freios constitucionais."
    },
    {
      year: "1988-1994",
      title: "Redemocratização, Nova Constituição e o Plano Real",
      desc: "Diante da hiperinflação descontrolada, uma equipe de economistas liberais e pragmáticos estruturou o Plano Real (1994), ancorado na disciplina monetária, abertura comercial, privatizações e na Lei de Responsabilidade Fiscal subsequente.",
      impact: "Fim do imposto inflacionário que corroía o salário dos mais vulneráveis e restauração do cálculo econômico."
    },
    {
      year: "2014-2019",
      title: "O Despertar da Sociedade Civil e Reformas Estruturantes",
      desc: "Milhões de cidadãos tomam as ruas em defesa da ética pública, combate à corrupção (Lava Jato) e responsabilidade orçamentária. Conquistas legislativas históricas: Teto de Gastos (EC 95), Reforma Trabalhista (Lei 13.467), Reforma da Previdência (EC 103) e Lei da Liberdade Econômica (Lei 13.874).",
      impact: "Surgimento de novos partidos, renovação parlamentar histórica e popularização do pensamento liberal e conservador."
    },
    {
      year: "2020-2026+",
      title: "Nova Agenda Institucional: Autonomia do BC, Marcos Legais e Desafios",
      desc: "Aprovação da autonomia formal do Banco Central (LC 179/21), o Marco Legal do Saneamento Básico (Lei 14.026/20 - alavancando mais de R$ 100 bilhões em investimentos privados), Nova Lei das Ferrovias e do Gás.",
      impact: "Consolidação de uma direita propositiva, focada em investimento privado em infraestrutura, modernização do Estado e integridade institucional."
    }
  ],

  // 8 Pilares Fundamentais
  pillars: [
    {
      id: "liberdade-individual",
      title: "Liberdade Individual & Autonomia da Pessoa",
      badge: "Fundamento Moral",
      short: "A pessoa humana é dotada de dignidade inalienável e não pode ser tratada como mero instrumento de desígnios coletivos ou do Estado.",
      philosophy: "Ancorada na filosofia de John Locke, Immanuel Kant e Friedrich Hayek. Todo indivíduo possui o direito à vida, à liberdade e à busca da própria felicidade, cabendo ao Estado proteger essa esfera inviolável contra coerções ilegítimas.",
      application: "Garantia de ampla liberdade de consciência, manifestação do pensamento, locomoção, escolha profissional e proteção contra vigilância excessiva, censura prévia ou arbitrária de opiniões.",
      benefits: "Gera inovação cultural e científica, estimula o pluralismo social, previne a tirania estatal e descentraliza a tomada de decisões para os próprios cidadãos.",
      criticism: "Críticos alegam que o individualismo excessivo pode enfraquecer os laços comunitários e ignorar assimetrias sociais de partida.",
      counterArg: "A direita democrática distingue individualismo moral de egoísmo: a verdadeira liberdade floresce em cooperação voluntária, respeito às famílias e instituições civis, e na igualdade de direitos sob o império da lei.",
      bibliography: "HAYEK, F. A. Os Fundamentos da Liberdade (1960); LOCKE, J. Segundo Tratado sobre o Governo Civil (1689); MILL, J. S. Sobre a Liberdade (1859)."
    },
    {
      id: "livre-mercado",
      title: "Livre Mercado, Empreendedorismo & Concorrência",
      badge: "Motor da Riqueza",
      short: "A livre iniciativa privada e a concorrência aberta são os métodos mais comprovados da história para gerar abundância e elevar a qualidade de vida.",
      philosophy: "Baseia-se em Adam Smith (mão invisível e divisão do trabalho) e Ludwig von Mises (problema do cálculo econômico no socialismo). O sistema de preços livres transmite informações dispersas e ajusta oferta e demanda sem necessidade de burocratas centrais.",
      application: "Desregulamentação de atividades de baixo risco, fim de cartórios e barreiras de entrada, simplificação para abertura de empresas e atração de investimento estrangeiro.",
      benefits: "Maior variedade e qualidade de produtos com preços decrescentes; incentivo permanente à inovação tecnológica e produtividade.",
      criticism: "Argumenta-se que mercados livres levam a monopólios privados e exploração da mão de obra sem intervenção rigorosa.",
      counterArg: "A maioria dos monopólios perniciosos nasce de privilégios e reservas de mercado concedidos pelo próprio Estado. A concorrência aberta e o livre comércio global são os maiores destruidores de monopólios rentistas.",
      bibliography: "SMITH, A. A Riqueza das Nações (1776); MISES, L. v. Ação Humana: Um Tratado de Economia (1949); FRIEDMAN, M. Capitalismo e Liberdade (1962)."
    },
    {
      id: "propriedade-privada",
      title: "Inviolabilidade da Propriedade Privada",
      badge: "Segurança Jurídica",
      short: "O direito de posse e fruição legítima dos bens é o sustentáculo material da liberdade civil e da prosperidade no campo e na cidade.",
      philosophy: "Locke demonstrou que a propriedade decorre do trabalho exercido sobre a natureza. Onde a propriedade não é segura, o indivíduo vira servo de quem detém o poder político.",
      application: "Titulação fundiária urbana e rural massiva (como preconizado por Hernando de Soto), segurança jurídica contra invasões de terras e imóveis, e respeito a patentes e direitos autorais.",
      benefits: "Desbloqueia o capital morto (permitindo hipotecas, crédito e investimentos duradouros), incentiva o cuidado com os recursos (evita a 'tragédia dos comuns') e pacifica conflitos sociais.",
      criticism: "Defensores de ocupações sociais afirmam que o princípio da função social da propriedade autoriza desapropriações e invasões populares.",
      counterArg: "A função social não pode anular o núcleo do direito de propriedade. O melhor caminho para inclusão patrimonial é a regularização fundiária legal e acesso ao crédito, nunca a violação da lei.",
      bibliography: "SOTO, H. de. O Mistério do Capital (2000); EPSTEIN, R. Takings: Private Property and the Power of Eminent Domain (1985)."
    },
    {
      id: "responsabilidade-fiscal",
      title: "Responsabilidade Fiscal & Moeda Sadia",
      badge: "Sustentabilidade Macroeconômica",
      short: "Governos não têm recursos próprios além dos impostos do povo; gastar mais do que se arrecada gera inflação, juros altos e recessão.",
      philosophy: "Escola da Escolha Pública (James Buchanan e Gordon Tullock) e teoria monetária de Milton Friedman. Políticos e burocratas tendem a inflar déficits em benefício próprio, exigindo rédeas constitucionais rígidas.",
      application: "Cumprimento rigoroso da Lei de Responsabilidade Fiscal (LC 101/2000), controle do endividamento público, autonomia do Banco Central e reforma da previdência para evitar a falência intergeracional.",
      benefits: "Controle da inflação (que pune prioritariamente os mais pobres), taxas de juros de longo prazo mais baixas, atração de poupança externa e estabilidade para investimentos produtivos.",
      criticism: "Críticos afirmam que a austeridade orçamentária impede investimentos em infraestrutura e comprime programas sociais essenciais.",
      counterArg: "Não existe justiça social sustentada por déficit crônico e inflação. O descontrole fiscal resulta inevitavelmente em crises severas que devastam os salários dos mais pobres, como ocorreu no Brasil em 2014-2016.",
      bibliography: "BUCHANAN, J. & WAGNER, R. Democracy in Deficit (1977); SOWELL, T. Fatos e Falácias da Economia (2011)."
    },
    {
      id: "seguranca-juridica",
      title: "Império da Lei & Segurança Pública",
      badge: "Ordem & Justiça",
      short: "Uma nação soberana necessita de leis claras, aplicadas com equidade, com proteção à integridade física do cidadão e combate implacável ao crime.",
      philosophy: "Hobbes, Beccaria e a doutrina do Rule of Law britânico (A. V. Dicey). O primeiro dever moral de qualquer governo legítimo é salvaguardar a vida e a segurança dos indivíduos de bem contra predadores da lei.",
      application: "Isolamento de lideranças de facções criminosas em presídios federais de segurança máxima, uso intensivo de inteligência policial, celeridade no cumprimento da pena e proteção irrestrita às vítimas de crimes.",
      benefits: "Redução drástica das taxas de homicídios, atração de investimentos produtivos (que evitam regiões com risco de extorsão ou roubo de carga) e garantia da paz social em comunidades vulneráveis.",
      criticism: "Aponta-se o risco de encarceramento em massa e desproporção na atuação das forças policiais contra populações periféricas.",
      counterArg: "A primazia da lei defende exatamente o morador da favela, que é o primeiro refém do narcotráfico e das milícias. Segurança pública eficiente exige protocolos rigorosos, formação técnica das polícias e punição certa do criminoso.",
      bibliography: "DICEY, A. V. Introduction to the Study of the Law of the Constitution (1885); WILSON, J. Q. & KELLING, G. L. Broken Windows (1982)."
    },
    {
      id: "familia-sociedade-civil",
      title: "Valorização da Família & Subsidiariedade",
      badge: "Tecido Social",
      short: "A família e as instituições da sociedade civil são o núcleo formador de virtudes e a primeira barreira contra o autoritarismo estatal.",
      philosophy: "Alexis de Tocqueville e Edmund Burke (os 'pequenos pelotões' da sociedade). O princípio da subsidiariedade preconiza que o que pode ser resolvido pelo indivíduo, família ou município não deve ser absorvido pelo Estado central.",
      application: "Respeito à primazia dos pais na educação moral e religiosa dos filhos, incentivo a entidades beneficentes do terceiro setor e desoneração tributária para núcleos familiares.",
      benefits: "Menor dependência de tutelas estatais, redes comunitárias de apoio voluntário mais resilientes e desenvolvimento emocional e cognitivo seguro para crianças e jovens.",
      criticism: "Argumenta-se que a ênfase na família tradicional exclui arranjos contemporâneos ou impõe moralismo religioso sobre o Estado laico.",
      counterArg: "A direita democrática defende a família como instituição natural e protetora, reconhecendo a igualdade de todos perante a lei e respeitando o Estado laico sem cair no secularismo beligerante.",
      bibliography: "BURKE, E. Reflexões sobre a Revolução na França (1790); TOCQUEVILLE, A. de. A Democracia na América (1835); SCRUTON, R. Como ser um Conservador (2014)."
    },
    {
      id: "federalismo",
      title: "Federalismo Real & Descentralização",
      badge: "Poder Local",
      short: "Mais Brasil, menos Brasília. Aproximar as decisões políticas e a arrecadação dos cidadãos nos municípios e estados federados.",
      philosophy: "O Federalista (James Madison, Alexander Hamilton, John Jay). A concentração de poder em capitais distantes gera clientelismo, ineficiência burocrática e corrupção sistêmica.",
      application: "Redistribuição federativa dos tributos para que a maior fatia fique nos municípios e estados; liberdade legislativa para estados inovarem em políticas regulatórias e educacionais.",
      benefits: "Competição regulatória sadia entre estados para atrair empresas, maior fiscalização direta pelos cidadãos e políticas públicas adaptadas às realidades regionais.",
      criticism: "Adversários temem que a descentralização amplie disparidades de arrecadação entre regiões ricas e pobres do país.",
      counterArg: "Fundos de equalização transparentes com foco em metas mensuráveis garantem equilíbrio sem criar dependência perpétua da burocracia central de Brasília.",
      bibliography: "MADISON, J., HAMILTON, A. & JAY, J. Os Artigos Federalistas (1788); OSTROM, V. The Meaning of American Federalism (1991)."
    },
    {
      id: "meritocracia-oportunidades",
      title: "Igualdade de Oportunidades & Mérito",
      badge: "Inclusão Produtiva",
      short: "Justiça social consiste em remover barreiras artificiais e garantir portas abertas para que o talento, esforço e caráter determinem o sucesso de cada um.",
      philosophy: "Thomas Sowell e John Rawls (na vertente de igualdade formal de oportunidades). Oposição veemente à igualdade forçada de resultados, que só pode ser imposta por coerção e nivelamento por baixo.",
      application: "Educação básica e técnica de alto padrão, programas de vouchers para famílias carentes, foco na alfabetização na infância e premiação da produtividade no serviço público e privado.",
      benefits: "Mobilidade social real e sustentável, valorização do trabalho duro e erradicação da cultura do privilégio corporativista.",
      criticism: "Críticos afirmam que a meritocracia é uma ilusão em países com profundas disparidades socioeconômicas históricas.",
      counterArg: "A resposta à desigualdade de largada não é abandonar o mérito ou tabelar resultados, mas prover educação pública de excelência, segurança e ambiente favorável ao empreendedorismo periférico.",
      bibliography: "SOWELL, T. Discriminação e Disparidades (2018); PETERSON, J. B. 12 Regras para a Vida (2018)."
    }
  ],

  // Debates Dialéticos Aprofundados (Argumentos & Contra-argumentos)
  debates: [
    {
      id: "desigualdade",
      theme: "Desigualdade vs. Pobreza Real",
      critique: "A direita prioriza o mercado e a acumulação de capital, demonstrando indiferença frente ao abismo de desigualdade social brasileiro.",
      context: "O Brasil historicamente apresenta coeficientes de Gini elevados, fruto de séculos de patrimonialismo, escravidão e corporativismo estatal com distorções previdenciárias e tributárias.",
      conservativeResponse: "O verdadeiro problema ético e humano é a pobreza absoluta e a falta de mobilidade social, não a disparidade natural de renda decorrente de talentos e escolhas diferentes. A busca obsessiva pela igualdade de resultados destrói os incentivos de criação de riqueza. Países mais livres economicamente têm populações mais prósperas: o 10% mais pobre em economias livres tem renda per capita quase oito vezes superior ao 10% mais pobre em economias reprimidas (dados do Fraser Institute).",
      evidence: "Estudo comparativo do Fraser Institute (Economic Freedom of the World) demonstra correlação direta (R² > 0.70) entre liberdade econômica e renda per capita dos estratos mais pobres. No Brasil, o Plano Real (estabilização) e o Marco do Saneamento geraram muito mais inclusão real do que tabelamentos de preços.",
      limitations: "A extrema concentração de renda em nichos dependentes de subsídios estatais (capitalismo de compadrio) deve ser combatida com firmeza através do fim de isenções seletivas e privilégios corporativos no setor público.",
      sources: "Fraser Institute (2024); IPEA - Desigualdade e Mobilidade Social; Banco Mundial (Relatório sobre Pobreza Global)."
    },
    {
      id: "privatizacoes",
      theme: "Privatizações e Concessões",
      critique: "Vender estatais é 'entregar o patrimônio do povo' a multinacionais e resulta em demissões e tarifas abusivas.",
      context: "O Brasil chegou a ter mais de 400 estatais nos níveis federal, estadual e municipal, acumulando déficits bilionários cobertos com impostos do cidadão e servindo como moeda de troca política.",
      conservativeResponse: "Estatal não é patrimônio do povo, mas sim fonte de apadrinhamento político, loteamento de cargos e corrupção estrutural (como revelado no Petrolão e nos fundos de pensão Postalis e Petros). O patrimônio real do cidadão é água tratada na torneira, internet de alta velocidade, estradas seguras e contas de luz estáveis. A privatização com agências regulatórias independentes atrai investimento privado massivo sem onerar o orçamento da saúde e da educação.",
      evidence: "A privatização da Telebrás em 1998 multiplicou o acesso à telefonia de 22 milhões de linhas para mais de 240 milhões de celulares. O Marco Legal do Saneamento (Lei 14.026/20) já atraiu mais de R$ 110 bilhões em compromissos de investimento privado em Alagoas, Rio de Janeiro e São Paulo, levando água e esgoto a comunidades esquecidas pelo Estado durante 50 anos.",
      limitations: "Privatizações sem concorrência real geram monopólios regulados ineficientes. É indispensável desverticalizar setores, estimular a rivalidade de mercado e garantir agências reguladoras imunes a interferências políticas.",
      sources: "BNDES (Histórico de Desestatizações); Instituto Trata Brasil (Avanços do Marco do Saneamento 2021-2025); TCU."
    },
    {
      id: "tributacao",
      theme: "Carga Tributária e Tamanho do Estado",
      critique: "A proposta de redução de impostos da direita retira recursos essenciais da saúde e educação públicas, beneficiando apenas os ricos.",
      context: "A carga tributária brasileira atinge cerca de 33% a 34% do PIB, equivalente à de países da OCDE, porém entregando serviços públicos de qualidade infinitamente inferior aos padrões europeus.",
      conservativeResponse: "O excesso de impostos e a complexidade bizantina do sistema tributário asfixiam os pequenos e médios empreendedores, encarecem a cesta básica dos mais pobres e travam a produtividade da indústria. O problema brasileiro não é falta de arrecadação, mas sim a ineficiência abissal do gasto público e o custeio de privilégios de altas castas burocráticas. Desonerar a produção expande a base tributária através do crescimento do PIB (Curva de Laffer).",
      evidence: "Segundo o Banco Mundial (Doing Business), as empresas no Brasil gastavam em média 1.500 horas por ano apenas para calcular e pagar impostos. Países que simplificaram e reduziram alíquotas (como a Irlanda nos anos 90 e países do Leste Europeu) viram suas receitas fiscais subirem em decorrência do boom econômico.",
      limitations: "A desoneração tributária deve vir obrigatoriamente acompanhada de reforma administrativa e corte de despesas correntes, para não explodir o déficit fiscal e comprometer o teto orçamentário.",
      sources: "Receita Federal do Brasil (Relatório de Carga Tributária); OCDE (Economic Surveys: Brazil); Insper."
    },
    {
      id: "programas-sociais",
      theme: "Programas Sociais e Transferência de Renda",
      critique: "A direita busca extinguir o Bolsa Família e desmantelar a rede de proteção social do país.",
      context: "Debate recorrente em períodos eleitorais sobre a sustentabilidade e a porta de saída de programas assistenciais.",
      conservativeResponse: "A direita democrática não apenas apoia redes de proteção focalizadas, como foi pioneira na concepção do imposto de renda negativo proposta pelo economista liberal Milton Friedman nos anos 60. As primeiras iniciativas no Brasil (Bolsa Escola) foram criadas na gestão liberal-social de FHC (governo federal e prefeitura de Campinas/DF). O compromisso da direita é garantir que o benefício seja uma ponte para a emancipação e o trabalho, e não uma armadilha de dependência eleitoral perpétua.",
      evidence: "A reformulação do programa com incentivos à inserção no mercado formal (Cadastro Único integrado ao CAGED) e condicionalidades de frequência escolar e vacinação são princípios amplamente defendidos pela bancada de centro-direita no Congresso.",
      limitations: "Sem qualificação técnica profissional e crescimento econômico que crie vagas formais, a taxa de emancipação dos beneficiários permanece baixa.",
      sources: "FRIEDMAN, M. Capitalismo e Liberdade (Capítulo sobre Alívio à Pobreza); IPEA; Ministério do Desenvolvimento Social."
    },
    {
      id: "seguranca-publica",
      theme: "Segurança Pública e Encarceramento",
      critique: "O endurecimento penal defendido pela direita ignora causas sociais da criminalidade e promove encarceramento em massa sem resultados reais.",
      context: "O Brasil alcançou o trágico patamar de mais de 60 mil homicídios anuais em meados de 2017, figurando historicamente entre os países com maior número absoluto de mortes violentas intencionais.",
      conservativeResponse: "A criminalidade não decorre mecanicamente da pobreza — milhões de cidadãos pobres trabalham honradamente e são as maiores vítimas da violência urbana. A impunidade, a certeza da não punição e a fragilidade das penas para crimes violentos é que incentivam o crime (Gary Becker, Nobel de Economia). Isolar chefes de facções criminosas em presídios de segurança máxima e dar respaldo técnico e operacional às polícias reduz homicídios e devolve a paz aos cidadãos.",
      evidence: "Entre 2018 e 2022, a transferência sistemática de lideranças de facções criminosas para o Sistema Penitenciário Federal, combinada com apreensões recordes de drogas e armas, coincidiu com a queda dos homicídios no Brasil de 59 mil para cerca de 41 mil ao ano (Fórum Brasileiro de Segurança Pública e SINESP).",
      limitations: "O endurecimento penal precisa ser acompanhado de triagem penitenciária rigorosa para separar criminosos violentos de infratores de menor potencial ofensivo, evitando o recrutamento de jovens por facções dentro dos presídios.",
      sources: "SINESP (Ministério da Justiça); Anuário Brasileiro de Segurança Pública (2018-2024); BECKER, G. Crime and Punishment: An Economic Approach (1968)."
    },
    {
      id: "meio-ambiente",
      theme: "Meio Ambiente e o Agronegócio Brasileiro",
      critique: "A direita e o agronegócio promovem o desmatamento predatório em detrimento da conservação dos biomas e dos compromissos climáticos.",
      context: "O Brasil é a maior potência agroambiental do planeta, alimentando mais de 1 bilhão de pessoas mundialmente enquanto preserva mais de 66% de sua vegetação nativa.",
      conservativeResponse: "O agronegócio moderno brasileiro (Agro 4.0) é sustentável, intensivo em tecnologia e o mais interessado na preservação hídrica e climática. O Brasil possui o Código Florestal mais rigoroso do mundo (Lei 12.651/12), obrigando os produtores rurais a preservarem de 20% a 80% de suas propriedades nativas sem receber compensação financeira do Estado. Desmatamento ilegal e invasão de terras são crimes que devem ser combatidos com inteligência policial e regularização fundiária.",
      evidence: "Dados da Embrapa Territorial e da NASA atestam que o Brasil utiliza apenas cerca de 8% de seu território com lavouras e preserva mais de 66% de cobertura vegetal nativa, percentual muito superior ao de países europeus (que preservam menos de 20%) e dos Estados Unidos.",
      limitations: "Ainda há deficiências na celeridade de validação do Cadastro Ambiental Rural (CAR) e na fiscalização remota contra o garimpo e corte ilegal em terras públicas devolutas.",
      sources: "EMBRAPA Territorial; Código Florestal Brasileiro (Lei 12.651/2012); NASA Harvest Consortium; MapBiomas."
    },
    {
      id: "reforma-trabalhista",
      theme: "Relações de Trabalho e Emprego",
      critique: "A modernização trabalhista revogou conquistas históricas da CLT e precarizou a mão de obra no país.",
      context: "Aprovada em 2017 (Lei 13.467), a Reforma Trabalhista adequou a CLT (de 1943) à era digital, prestigiou o negociado sobre o legislado e extinguiu o imposto sindical compulsório.",
      conservativeResponse: "A legislação anterior de inspiração getulista e fascista (Carta del Lavoro) criava um dos ambientes mais litigiosos do planeta, com milhões de processos trabalhistas anuais que assustavam contratantes. A flexibilização legal reduziu a litigiosidade em mais de 50%, deu segurança aos acordos coletivos e abriu espaço para novas modalidades como teletrabalho, trabalho intermitente e jornada parcial.",
      evidence: "Após a reforma e a superação da pandemia, o desemprego no Brasil recuou consistentemente e o número de postos de trabalho formais superou os 46 milhões (dados do CAGED/MTE). As ações trabalhistas na Justiça caíram de mais de 2,6 milhões em 2016 para cerca de 1,2 milhão.",
      limitations: "A qualificação da mão de obra brasileira diante da revolução da Inteligência Artificial continua sendo o maior gargalo para ganhos substanciais de produtividade e salários reais.",
      sources: "Tribunal Superior do Trabalho (Estatísticas do TST); CAGED / Novo CAGED; Fundação Getúlio Vargas (FGV IBRE)."
    },
    {
      id: "democracia",
      theme: "Defesa da Democracia Constitucional",
      critique: "A direita brasileira flerta com o autoritarismo e ameaça os freios e contrapesos da República.",
      context: "Tensões institucionais recentes entre os poderes Executivo, Legislativo e Judiciário no cenário político nacional.",
      conservativeResponse: "A verdadeira tradição da direita democrática brasileira é estritamente constitucionalista, baseada no sistema de 'checks and balances' concebido por Montesquieu e consagrado pelos Federalistas. O que a direita defende é a autocontenção judicial, a preservação estrita das competências de cada Poder e o respeito irrestrito às liberdades de expressão e imunidade parlamentar garantidas pela Constituição de 1988. Autoritarismo de qualquer matiz é incompatível com o liberalismo e o conservadorismo cívico.",
      evidence: "As grandes reformas econômicas e institucionais foram votadas e aprovadas pelo Congresso Nacional no rito constitucional legítimo, com debate público, participação de partidos de oposição e respeito ao processo legislativo.",
      limitations: "A direita deve manter vigilância permanente para repelir retóricas populistas ou aventureiras que pretendam violar o rito republicano e as normas constitucionais.",
      sources: "Constituição da República Federativa do Brasil de 1988; MONTESQUIEU. O Espírito das Leis (1748); KELSEN, H. A Democracia (1932)."
    }
  ],

  // Painel de Indicadores Macroeconômicos e Sociais
  indicators: [
    {
      id: "ind-liberdade",
      title: "Índice de Liberdade Econômica",
      source: "Heritage Foundation & Fraser Institute",
      year: "2024",
      score: "53.5 pts",
      status: "Maioritariamente Não-Livre (Rank 124º)",
      historical: [
        { label: "2015", val: 56.6 },
        { label: "2017", val: 52.9 },
        { label: "2019", val: 51.9 },
        { label: "2021", val: 53.7 },
        { label: "2023", val: 53.5 },
        { label: "2024", val: 53.5 }
      ],
      context: "O Brasil continua penalizado pelo peso dos tributos, excesso de burocracia estatal e rigidez orçamentária, demonstrando o imenso potencial represado a ser liberado com reformas pró-mercado.",
      methodology: "Mede Estado de Direito, Tamanho do Governo, Eficiência Regulatória e Abertura dos Mercados."
    },
    {
      id: "ind-inflacao",
      title: "Taxa de Inflação Anual (IPCA)",
      source: "IBGE (Sistema Nacional de Preços ao Consumidor)",
      year: "2015-2024",
      score: "3.92% (2023)",
      status: "Dentro do intervalo de metas do BC",
      historical: [
        { label: "2015", val: 10.67 },
        { label: "2017", val: 2.95 },
        { label: "2019", val: 4.31 },
        { label: "2021", val: 10.06 },
        { label: "2022", val: 5.79 },
        { label: "2023", val: 3.92 }
      ],
      context: "Após a independência formal do Banco Central (LC 179/2021), o Brasil foi um dos primeiros países do mundo a elevar os juros de forma preventiva pós-pandemia, domando a inflação antes da Europa e dos EUA.",
      methodology: "Índice oficial de metas calculador pelo IBGE para famílias com rendimento de 1 a 40 salários mínimos."
    },
    {
      id: "ind-desemprego",
      title: "Taxa de Desocupação (PNAD Contínua)",
      source: "IBGE",
      year: "2016-2024",
      score: "6.8% (2024)",
      status: "Mínima histórica em 10 anos",
      historical: [
        { label: "2016", val: 12.0 },
        { label: "2018", val: 11.6 },
        { label: "2020", val: 13.9 },
        { label: "2022", val: 9.3 },
        { label: "2023", val: 7.8 },
        { label: "2024", val: 6.8 }
      ],
      context: "Reflete os efeitos cumulativos da Reforma Trabalhista de 2017, a Lei da Liberdade Econômica e o avanço da formalização no setor de serviços e agronegócio.",
      methodology: "Pesquisa contínua domiciliar abrangendo a população em idade ativa em busca de trabalho."
    },
    {
      id: "ind-homicidios",
      title: "Taxa de Mortes Violentas Intencionais (por 100 mil hab.)",
      source: "Fórum Brasileiro de Segurança Pública / SINESP",
      year: "2017-2023",
      score: "22.8 por 100k",
      status: "Redução de mais de 25% frente ao pico",
      historical: [
        { label: "2017", val: 30.9 },
        { label: "2019", val: 22.7 },
        { label: "2021", val: 22.4 },
        { label: "2022", val: 23.3 },
        { label: "2023", val: 22.8 }
      ],
      context: "A contenção das facções prisionais, integração de dados de inteligência e o fortalecimento de operações estaduais permitiram salvar dezenas de milhares de vidas em comparação com o desastre de 2017.",
      methodology: "Homicídios dolosos, latrocínios, lesões corporais seguidas de morte e mortes decorrentes de intervenção policial."
    },
    {
      id: "ind-saneamento",
      title: "Investimentos Contratados em Saneamento Básico",
      source: "Ministério das Cidades & Instituto Trata Brasil",
      year: "2020-2024",
      score: "R$ 110+ Bilhões",
      status: "Revolução pós-Marco Legal (Lei 14.026/20)",
      historical: [
        { label: "2018", val: 14.0 },
        { label: "2019", val: 15.2 },
        { label: "2021", val: 42.0 },
        { label: "2022", val: 78.5 },
        { label: "2023", val: 95.0 },
        { label: "2024", val: 112.0 }
      ],
      context: "O setor público investia menos de R$ 15 bilhões por ano, condenando 35 milhões de brasileiros à falta de água tratada. A entrada de capital privado garantiu leilões com ágios expressivos.",
      methodology: "Soma de outorgas e compromissos formais de capex em contratos de concessão e PPPs leiloados na B3."
    },
    {
      id: "ind-divida",
      title: "Dívida Bruta do Governo Geral (% do PIB)",
      source: "Banco Central do Brasil / Tesouro Nacional",
      year: "2014-2024",
      score: "78.5% do PIB",
      status: "Alerta de Sustentabilidade",
      historical: [
        { label: "2014", val: 56.3 },
        { label: "2016", val: 69.8 },
        { label: "2019", val: 75.8 },
        { label: "2020", val: 87.6 },
        { label: "2022", val: 71.7 },
        { label: "2024", val: 78.5 }
      ],
      context: "Demonstra por que a responsabilidade fiscal e a redução do crescimento das despesas obrigatórias são imperativos inadiáveis para afastar o risco de calote ou alta insustentável dos juros.",
      methodology: "Metodologia padrão do FMI adotada pelo Banco Central do Brasil para consolidação do setor público."
    }
  ],

  // Propostas Estratégicas para o Futuro do Brasil (Agenda 2026-2035)
  proposals: [
    {
      id: "prop-tributaria",
      category: "Economia & Tributação",
      title: "Reforma Tributária com Redução de Carga & Imposto Único sobre Consumo",
      problem: "Complexidade tributária que consome milhares de horas das empresas, gera contencioso de mais de 50% do PIB e pune a competitividade nacional.",
      solution: "Unificação de tributos sobre consumo com trava constitucional de alíquota máxima (teto da carga), alíquota uniforme sem exceções corporativistas, e redução progressiva do IRPJ para patamar de 15%.",
      cost: "Neutro no curto prazo (transição federativa); redução de gastos de conformidade em cerca de R$ 80 bilhões anuais.",
      benefits: "Aumento projetado de até 10% no PIB potencial em uma década; fim da guerra fiscal desleal; redução imediata do preço de produtos básicos.",
      risks: "Pressão de lobbies setoriais por regimes especiais e resistência de governadores à padronização do IBS.",
      kpis: "Posição do Brasil no ranking de facilidade de pagar impostos; relação Contencioso Tributário / PIB."
    },
    {
      id: "prop-administrativa",
      category: "Reforma do Estado",
      title: "Reforma Administrativa Ampla e Fim de Privilégios Corporativos",
      problem: "Gasto com funcionalismo que consome cerca de 13% do PIB, com altas castas acumulando supersalários e baixa cobrança por desempenho e metas.",
      solution: "Fim da estabilidade rígida para carreiras não-típicas de Estado, avaliação contínua de desempenho com demissão de ineficientes, extinção de penduricalhos e férias de 60 dias para magistrados e procuradores.",
      cost: "Economia estimada de mais de R$ 300 bilhões em 10 anos.",
      benefits: "Melhoria radical no atendimento nas pontas (saúde, segurança e escolas); valorização dos servidores vocacionados e produtivos.",
      risks: "Forte mobilização corporativa no Congresso e litígios no Judiciário.",
      kpis: "Despesa com pessoal sobre a Receita Corrente Líquida; índice de satisfação do cidadão no Gov.br."
    },
    {
      id: "prop-educacao",
      category: "Educação & Capital Humano",
      title: "Foco na Alfabetização Fônica e Expansão de Vouchers para Ensino Técnico",
      problem: "Brasil gasta percentual do PIB em educação similar à OCDE, mas figura nas últimas posições do PISA; mais da metade das crianças de 8 anos não sabe ler adequadamente.",
      solution: "Adoção obrigatória do método fônico baseado em evidências neurocientíficas nas séries iniciais, premiação dos professores por valor agregado no IDEB, e programa 'Voucher Futuro' para custear ensino técnico profissionalizante em instituições privadas de excelência.",
      cost: "Remanejamento do orçamento atual do MEC, priorizando a educação básica sobre as altas verbas das cúpulas universitárias.",
      benefits: "Erradicação do analfabetismo funcional na infância; inserção rápida de centenas de milhares de jovens no mercado de trabalho formal.",
      risks: "Resistência ideológica de corporações acadêmicas presas a métodos construtivistas superados.",
      kpis: "Pontuação no PISA (Matemática, Leitura e Ciências); taxa de alfabetização na idade certa (SAEB)."
    },
    {
      id: "prop-seguranca",
      category: "Segurança Pública & Justiça",
      title: "Guerra Tecnológica às Facções e Ciclo Completo de Polícia",
      problem: "Domínio territorial de facções criminosas e milícias em capitais; burocracia policial que divide investigação e policiamento ostensivo, gerando taxas de elucidação de homicídios inferiores a 30%.",
      solution: "Instituição gradual do ciclo completo para as polícias estaduais; integração de dados de inteligência com rastreamento financeiro de capitais ilícitos (COAF/PF); isolamento biométrico absoluto em presídios federais; e tipificação rigorosa de narco-terrorismo.",
      cost: "Investimento em tecnologia de monitoramento de fronteiras (Sisfron) e modernização pericial: R$ 5 bilhões anuais.",
      benefits: "Quebra da espinha financeira do crime organizado; elevação da taxa de resolução de homicídios para mais de 70%; queda nos crimes violentos.",
      risks: "Conflitos corporativos de atribuição entre Polícia Militar e Polícia Civil.",
      kpis: "Taxa nacional de homicídios abaixo de 12 por 100 mil habitantes; volume de ativos sequestrados de facções."
    },
    {
      id: "prop-infraestrutura",
      category: "Infraestrutura & Energia",
      title: "Desestatização Completa de Portos e Aceleração de Ferrovias Privadas",
      problem: "Custo logístico consome cerca de 12% do PIB nacional; dependência excessiva do transporte rodoviário encarece as exportações do agronegócio e da indústria.",
      solution: "Concessão e privatização das autoridades portuárias restantes (incluindo Porto de Santos); aceleração das autorizações ferroviárias privadas sem ingerência estatal no traçado; e expansão do mercado livre de energia.",
      cost: "Custo fiscal zero para o Tesouro; previsão de atração de R$ 250 bilhões em capex 100% privado.",
      benefits: "Redução do frete em até 30%; integração de corredores bioceânicos para escoamento para a Ásia; descarbonização da matriz logística.",
      risks: "Demora na liberação de licenças ambientais pelo IBAMA e disputas fundiárias em novas faixas de domínio.",
      kpis: "Participação do modal ferroviário na matriz de transportes (meta: 35%); tempo médio de atracação portuária."
    },
    {
      id: "prop-agro",
      category: "Agronegócio & Sustentabilidade",
      title: "Segurança Jurídica no Campo e Mercado de Crédito de Carbono Regulado",
      problem: "Insegurança decorrente de invasões de terras, morosidade na emissão de títulos de propriedade e barreiras comerciais injustificadas da Europa sob pretexto verde.",
      solution: "Tolerância zero com invasões ilegais de propriedades produtivas; agilização massiva do CAR com inteligência artificial; implantação do mercado voluntário e regulado de créditos de carbono valorizando a mata preservada pelo produtor rural.",
      cost: "R$ 1,2 bilhão para modernização de cartórios digitais e sensoriamento aeroespacial.",
      benefits: "Monetização das florestas nativas mantidas em fazendas privadas; consolidação da liderança global do Brasil no Agro Sustentável.",
      risks: "Protecionismo agrícola disfarçado nos mercados da União Europeia.",
      kpis: "Percentual de propriedades com CAR validado; volume negociado em ativos verdes e CPR-Verde na B3."
    }
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      q: "O que significa ser de direita no Brasil contemporâneo?",
      a: "Ser de direita no Brasil significa defender a primazia do indivíduo sobre o Estado, a valorização da iniciativa privada, o respeito aos contratos e à propriedade, a responsabilidade fiscal contra o endividamento público, o império da lei com punição aos criminosos, e a preservação das instituições e laços fundamentais que sustentam a sociedade civil, como a família e a liberdade religiosa."
    },
    {
      q: "Toda pessoa de direita tem as mesmas posições?",
      a: "Não. A direita é plural e composta por diversas vertentes intelectuais. Liberais enfatizam a desregulamentação, livre comércio e liberdades individuais; conservadores priorizam a estabilidade moral, a prudência nas reformas e a família; libertários defendem a redução máxima ou extinção do Estado; e nacional-desenvolvimentistas focam na soberania militar e infraestrutura estratégica. O ponto de convergência é a rejeição ao socialismo, ao estatismo sufocante e ao coletivismo autoritário."
    },
    {
      q: "A direita defende o fim de programas sociais como o Bolsa Família?",
      a: "Mito absoluto. A direita democrática apoia redes de segurança focalizadas contra a miséria extrema — conceito preconizado pelo próprio economista liberal Milton Friedman (Imposto de Renda Negativo). A distinção crucial é que a direita encara o programa social como uma ponte temporária e digna para o mercado de trabalho e para a autonomia da família, e não como um instrumento de tutela política e dependência eleitoral."
    },
    {
      q: "Privatização sempre melhora a qualidade do serviço prestado?",
      a: "A privatização é uma ferramenta de eficiência comprovada quando acompanhada de regras claras e concorrência aberta. Exemplos como as telecomunicações brasileiras e o Marco do Saneamento provam que a gestão privada expande o serviço mais rápido do que estatais sucateadas. Onde o mercado é monopolístico por natureza (como redes elétricas ou trens metropolitanos), é vital contar com agências regulatórias técnicas e independentes que fiscalizem metas contratuais e punam descumprimentos com rigor."
    },
    {
      q: "Como reduzir impostos sem quebrar as contas públicas?",
      a: "Redução responsável de impostos é precedida ou acompanhada de corte de desperdícios no Estado, privatização de estatais deficitárias e reforma administrativa para conter supersalários. Além disso, a eliminação de burocracias e alíquotas abusivas estimula novos negócios e desestimula a sonegação, ampliando a base de contribuintes — efeito conhecido na economia como Curva de Laffer."
    },
    {
      q: "A pauta da direita é incompatível com a preservação do meio ambiente?",
      a: "Pelo contrário. A economia de mercado e a garantia dos direitos de propriedade são os instrumentos mais eficazes de conservação ecológica ('quem é dono cuida, o que é de todos é degradado'). O agronegócio moderno brasileiro preserva mais de 66% da vegetação nativa do país graças à ciência da Embrapa e à tecnologia. A direita defende a punição de criminosos que desmatam ilegalmente e a criação de mercados de créditos de carbono que paguem o produtor por manter a floresta em pé."
    },
    {
      q: "Qual é a relação da direita moderna com a democracia e as instituições?",
      a: "A direita democrática é a guardiã do constitucionalismo clássico e dos freios e contrapesos da República. Defende o império da lei uniforme, eleições periódicas limpas, liberdade de expressão irrestrita e um Judiciário que respeite a autocontenção e a separação dos poderes sem legislar no lugar do Parlamento eleito pelo povo."
    },
    {
      q: "Por que a direita critica o modelo educacional atual do Brasil?",
      a: "Porque apesar de o Brasil investir somas vultosas em educação, o modelo atual foca excessivamente em doutrinação político-ideológica e teorias pedagógicas sem comprovação empírica, deixando o país nos últimos lugares do PISA. A direita defende foco absoluto na alfabetização fônica, valorização de exatas e língua portuguesa, disciplina em sala de aula, expansão do ensino técnico e liberdade para as famílias escolherem a educação dos filhos."
    }
  ],

  // Acervo Bibliográfico e Fontes Primárias
  library: [
    {
      title: "Constituição da República Federativa do Brasil de 1988",
      author: "Assembleia Nacional Constituinte",
      type: "Legislação & Direito",
      institution: "Presidência da República / Congresso Nacional",
      year: "1988",
      url: "http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      desc: "Texto magno que consagra o Estado Democrático de Direito, garantias fundamentais invioláveis (Art. 5º) e os princípios da ordem econômica (Art. 170: livre iniciativa, propriedade privada e livre concorrência)."
    },
    {
      title: "Lei de Liberdade Econômica (Lei nº 13.874/2019)",
      author: "Congresso Nacional",
      type: "Legislação & Direito",
      institution: "Diário Oficial da União",
      year: "2019",
      url: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13874.htm",
      desc: "Estabelece a declaração de direitos de liberdade econômica, presunção de boa-fé do empreendedor, desregulamentação de atividades de baixo risco e proibição de abusos regulatórios."
    },
    {
      title: "Novo Marco Legal do Saneamento Básico (Lei nº 14.026/2020)",
      author: "Congresso Nacional",
      type: "Legislação & Direito",
      institution: "Presidência da República",
      year: "2020",
      url: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14026.htm",
      desc: "Modernizou o marco regulatório permitindo a livre concorrência entre empresas públicas e privadas com a meta de universalizar água e esgoto até 2033."
    },
    {
      title: "Lei Complementar nº 179/2021 (Autonomia do Banco Central)",
      author: "Congresso Nacional",
      type: "Legislação & Direito",
      institution: "Banco Central do Brasil",
      year: "2021",
      url: "http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp179.htm",
      desc: "Define os objetivos e estabelece mandatos fixos para a diretoria do Banco Central do Brasil para blindar a política monetária de interferências políticas eleitoreiras."
    },
    {
      title: "Economic Freedom of the World: 2024 Annual Report",
      author: "Gwartney, J., Lawson, R., Hall, J. & Murphy, R.",
      type: "Estudos Internacionais",
      institution: "Fraser Institute (Canadá)",
      year: "2024",
      url: "https://www.fraserinstitute.org/studies/economic-freedom-of-the-world-2024",
      desc: "O mais respeitado estudo global correlacionando liberdade econômica com longevidade, renda dos mais pobres, redução da corrupção e índices de desenvolvimento humano."
    },
    {
      title: "Index of Economic Freedom",
      author: "The Heritage Foundation",
      type: "Estudos Internacionais",
      institution: "The Heritage Foundation (Washington D.C.)",
      year: "2024",
      url: "https://www.heritage.org/index/",
      desc: "Avaliação anual de 184 países em 12 liberdades econômicas agrupadas em quatro pilares fundamentais de governança e mercado."
    },
    {
      title: "Os Fundamentos da Liberdade",
      author: "Friedrich A. Hayek (Prêmio Nobel de Economia 1974)",
      type: "Filosofia Política & Teoria",
      institution: "University of Chicago Press / Ed. Avis Rara",
      year: "1960",
      url: "https://www.mises.org.br",
      desc: "Obra-prima sobre a evolução da liberdade ocidental, o império da lei, a ordem espontânea e os perigos da engenharia social coercitiva."
    },
    {
      title: "A Lanterna na Popa: Memórias",
      author: "Roberto Campos",
      type: "História & Economia Brasileira",
      institution: "Editora Topbooks",
      year: "1994",
      url: "https://www.topbooks.com.br",
      desc: "Depoimento essencial sobre a história econômica e institucional brasileira no século XX, diagnosticando as causas da inflação, o corporativismo e os vícios do estatismo tupiniquim."
    },
    {
      title: "Fatos e Falácias da Economia",
      author: "Thomas Sowell",
      type: "Economia Aplicada",
      institution: "Editora Record",
      year: "2011",
      url: "https://www.record.com.br",
      desc: "Exame rigoroso de crenças populares sobre desigualdade, salários, raça, comércio internacional e moradia com base em estatísticas e evidências reais."
    },
    {
      title: "Reflexões sobre a Revolução na França",
      author: "Edmund Burke",
      type: "Filosofia Política & Teoria",
      institution: "Edipro",
      year: "1790",
      url: "https://www.edipro.com.br",
      desc: "O texto fundador do conservadorismo moderno que alertava com precisão cirúrgica sobre os horrores totalitários provocados pela destruição violenta de tradições e instituições."
    },
    {
      title: "Anuário Brasileiro de Segurança Pública 2024",
      author: "Fórum Brasileiro de Segurança Pública",
      type: "Dados & Estatísticas",
      institution: "FBSP",
      year: "2024",
      url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/",
      desc: "Principal compilação empírica de registros criminais, efetivo policial, gastos em segurança e dados penitenciários de todos os estados brasileiros."
    },
    {
      title: "Carga Tributária no Brasil: Análise e Evolução",
      author: "Centro de Estudos Tributários e Aduaneiros (CETAD)",
      type: "Dados & Estatísticas",
      institution: "Receita Federal do Brasil",
      year: "2024",
      url: "https://www.gov.br/receitafederal/pt-br",
      desc: "Série histórica oficial consolidando a arrecadação das três esferas de governo em proporção ao Produto Interno Bruto."
    }
  ]
};

// Exporta globalmente para uso no browser
if (typeof window !== "undefined") {
  window.ODB_DATA = ODB_DATA;
}
