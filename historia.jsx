import { useState } from "react";
import styles from "./historia.module.css";

const blocos = [
  {
    id: "contexto",
    numero: "01",
    periodo: "1918 — 1932",
    titulo: "Contexto histórico",
    subtitulo: "A Alemanha antes do regime nazista",
    imagem: "/assets/historia/contexto-versalhes.jpg",
    alt: "Delegação alemã durante as negociações do Tratado de Versalhes",
    legenda:
      "Delegação alemã nas negociações de paz após a Primeira Guerra Mundial.",
    fonte: "Fonte sugerida: Bundesarchiv / Wikimedia Commons",
    introducao:
      "A ascensão do nazismo ocorreu em meio a uma profunda crise econômica, política e social vivida pela Alemanha depois da Primeira Guerra Mundial.",
    itens: [
      {
        titulo: "Derrota na Primeira Guerra Mundial",
        texto:
          "Em 1918, a Alemanha foi derrotada na Primeira Guerra Mundial. O fim da guerra provocou instabilidade política, crise social e um forte sentimento de frustração em parte da população.",
      },
      {
        titulo: "Tratado de Versalhes",
        texto:
          "Assinado em 1919, o tratado responsabilizou a Alemanha pela guerra, impôs reparações financeiras, perdas territoriais e limitações militares. Nacionalistas exploraram essas condições como símbolo de humilhação nacional.",
      },
      {
        titulo: "Crise da República de Weimar",
        texto:
          "A jovem democracia alemã enfrentou conflitos políticos, tentativas de golpe e graves problemas econômicos. Em 1923, o país sofreu uma hiperinflação que destruiu economias de muitas famílias.",
      },
      {
        titulo: "Crise de 1929",
        texto:
          "A quebra da Bolsa de Nova York atingiu duramente a Alemanha. Empresas faliram, o desemprego cresceu e milhões de pessoas passaram a enfrentar insegurança econômica.",
      },
      {
        titulo: "Radicalização política",
        texto:
          "O medo do comunismo, a desconfiança na democracia e a crise econômica fortaleceram partidos radicais. O Partido Nazista prometia ordem, empregos e restauração do poder alemão.",
      },
      {
        titulo: "Quem apoiou a ascensão?",
        texto:
          "Os nazistas conquistaram apoio entre diferentes grupos sociais, incluindo parcelas da classe média, nacionalistas, setores conservadores, empresários, trabalhadores e eleitores afetados pela crise.",
      },
    ],
  },

  {
    id: "ascensao",
    numero: "02",
    periodo: "1932 — 1934",
    titulo: "Ascensão ao poder",
    subtitulo: "Da crise política à ditadura",
    imagem: "/assets/historia/ascensao-reichstag.jpg",
    alt: "Incêndio do Reichstag em Berlim em 1933",
    legenda:
      "O incêndio do Reichstag, em fevereiro de 1933, foi usado pelo governo nazista para ampliar a repressão política.",
    fonte: "Fonte sugerida: U.S. National Archives / Wikimedia Commons",
    introducao:
      "Hitler não chegou inicialmente ao governo por um golpe militar. Sua chegada à chancelaria ocorreu dentro do sistema político alemão, seguida pela rápida destruição das instituições democráticas.",
    itens: [
      {
        titulo: "Crescimento eleitoral",
        texto:
          "Durante a crise econômica, o NSDAP ampliou sua presença no Parlamento e tornou-se o maior partido do Reichstag nas eleições de 1932, embora não tivesse maioria absoluta.",
      },
      {
        titulo: "30 de janeiro de 1933",
        texto:
          "O presidente Paul von Hindenburg nomeou Adolf Hitler chanceler da Alemanha. Políticos conservadores acreditavam que poderiam controlar Hitler dentro de um governo de coalizão.",
      },
      {
        titulo: "Incêndio do Reichstag",
        texto:
          "Em 27 de fevereiro de 1933, o Parlamento alemão foi incendiado. O episódio foi utilizado pelo governo para justificar medidas de emergência, suspender liberdades civis e perseguir especialmente comunistas.",
      },
      {
        titulo: "Lei de Plenos Poderes",
        texto:
          "Em março de 1933, a Lei de Plenos Poderes permitiu que o governo aprovasse leis sem a participação normal do Parlamento, tornando-se uma etapa decisiva para a construção da ditadura.",
      },
      {
        titulo: "Fim da oposição",
        texto:
          "Partidos políticos foram proibidos ou dissolvidos, sindicatos independentes foram eliminados e o Partido Nazista tornou-se o único partido permitido.",
      },
    ],
  },

  {
    id: "lider",
    numero: "03",
    periodo: "1889 — 1945",
    titulo: "Adolf Hitler",
    subtitulo: "O líder e o culto à personalidade",
    imagem: "/assets/historia/adolf-hitler.jpg",
    alt: "Fotografia histórica de Adolf Hitler",
    legenda:
      "Adolf Hitler em fotografia oficial durante o período do Terceiro Reich.",
    fonte: "Fonte sugerida: Bundesarchiv / Wikimedia Commons",
    introducao:
      "Adolf Hitler foi o principal líder do Partido Nacional-Socialista dos Trabalhadores Alemães e tornou-se o centro do sistema político criado pelo regime nazista.",
    itens: [
      {
        titulo: "Origem",
        texto:
          "Hitler nasceu em Braunau am Inn, na Áustria, em 1889. Viveu durante alguns anos em Viena e mudou-se posteriormente para Munique, na Alemanha.",
      },
      {
        titulo: "Primeira Guerra Mundial",
        texto:
          "Serviu no Exército alemão durante a Primeira Guerra Mundial. Após a derrota alemã, passou a participar de movimentos nacionalistas e anticomunistas.",
      },
      {
        titulo: "Partido Nazista",
        texto:
          "Ingressou no partido que se transformaria no NSDAP e rapidamente tornou-se seu principal orador e líder.",
      },
      {
        titulo: "Putsch da Cervejaria",
        texto:
          "Em 1923, participou de uma tentativa fracassada de golpe em Munique. Foi preso e, durante sua prisão, escreveu parte de Mein Kampf, obra em que apresentou elementos centrais de sua ideologia.",
      },
      {
        titulo: "Führer",
        texto:
          "Após a morte do presidente Hindenburg, em 1934, Hitler concentrou as funções de chefe de Estado e de governo e adotou o título de Führer, palavra alemã para 'líder' ou 'guia'.",
      },
      {
        titulo: "Culto à personalidade",
        texto:
          "A propaganda apresentava Hitler como o líder capaz de recuperar a Alemanha. Fotografias, discursos, rádio, cinema, cerimônias e grandes manifestações reforçavam sua imagem pública.",
      },
    ],
  },

  {
    id: "ideologia",
    numero: "04",
    periodo: "1933 — 1945",
    titulo: "Ideologia e organização do Estado",
    subtitulo: "Como funcionava o Terceiro Reich",
    imagem: "/assets/historia/estado-nazista.jpg",
    alt: "Grande concentração política nazista em Nuremberg",
    legenda:
      "Grandes concentrações políticas eram utilizadas para demonstrar disciplina, força e unidade em torno do regime.",
    fonte: "Fonte sugerida: Bundesarchiv / Wikimedia Commons",
    introducao:
      "O nazismo rejeitava a democracia liberal e defendia um Estado autoritário baseado no nacionalismo extremo, militarismo, racismo e obediência ao Führer.",
    itens: [
      {
        titulo: "Estado autoritário",
        texto:
          "O poder político foi centralizado. Instituições públicas, organizações profissionais e diferentes áreas da sociedade foram submetidas à influência do regime.",
      },
      {
        titulo: "Partido único",
        texto:
          "O NSDAP tornou-se o único partido político legal. A estrutura do partido passou a se misturar com diversas instituições do Estado.",
      },
      {
        titulo: "Nacionalismo e militarismo",
        texto:
          "O regime defendia a expansão do poder alemão, o rearmamento e a conquista de território, especialmente no leste europeu, ideia relacionada ao chamado Lebensraum, ou 'espaço vital'.",
      },
      {
        titulo: "Anticomunismo",
        texto:
          "Comunistas e outros grupos de esquerda foram classificados como inimigos do regime e estiveram entre os primeiros grupos submetidos a prisões e perseguições.",
      },
      {
        titulo: "Racismo e antissemitismo",
        texto:
          "A ideologia nazista afirmava falsamente a existência de uma hierarquia racial e colocava os chamados 'arianos' no topo. Judeus foram transformados em alvo central da perseguição racial.",
      },
      {
        titulo: "Economia",
        texto:
          "O governo promoveu obras públicas e principalmente o rearmamento, reduziu o desemprego e direcionou progressivamente a economia para a preparação militar e para a guerra.",
      },
      {
        titulo: "Religião",
        texto:
          "O regime tentou controlar instituições religiosas e entrou em conflito com membros de igrejas que se opunham às suas políticas. A relação entre nazismo e religião foi complexa e variou ao longo do período.",
      },
    ],
  },

  {
    id: "propaganda",
    numero: "05",
    periodo: "Propaganda de Estado",
    titulo: "Símbolos e propaganda",
    subtitulo: "A construção da imagem do regime",
    imagem: "/assets/historia/propaganda-nazista.jpg",
    alt: "Cartaz histórico de propaganda produzido pelo regime nazista",
    legenda:
      "Cartazes políticos foram utilizados para divulgar mensagens do NSDAP e fortalecer a imagem de Hitler.",
    fonte: "Fonte sugerida: Bundesarchiv / Wikimedia Commons",
    introducao:
      "O regime utilizou intensamente os meios de comunicação, manifestações públicas e símbolos políticos para influenciar a população e controlar a narrativa pública.",
    itens: [
      {
        titulo: "Suástica",
        texto:
          "A suástica, chamada Hakenkreuz em alemão, foi apropriada pelo movimento nazista e tornou-se o principal emblema do partido e posteriormente do Estado nazista.",
      },
      {
        titulo: "Saudação nazista",
        texto:
          "A saudação com o braço erguido e a expressão 'Heil Hitler' tornou-se uma demonstração pública de lealdade ao regime.",
      },
      {
        titulo: "Uniformes",
        texto:
          "Organizações como a SA, conhecida pelos uniformes marrons, e a SS, associada principalmente aos uniformes negros em parte de sua história, utilizavam roupas e símbolos próprios.",
      },
      {
        titulo: "Joseph Goebbels",
        texto:
          "O Ministério da Propaganda, comandado por Joseph Goebbels, coordenava grande parte das mensagens divulgadas pelo regime.",
      },
      {
        titulo: "Rádio e imprensa",
        texto:
          "O governo incentivou a difusão de aparelhos de rádio e utilizou transmissões para levar discursos e mensagens oficiais a milhões de pessoas.",
      },
      {
        titulo: "Cinema",
        texto:
          "Filmes foram empregados como instrumentos de propaganda. Produções associadas a Leni Riefenstahl registraram e transformaram eventos do regime em grandes espetáculos visuais.",
      },
      {
        titulo: "Arquitetura e manifestações",
        texto:
          "Eventos de massa em Nuremberg e projetos de arquitetura monumental foram utilizados para transmitir ideias de grandeza, força, ordem e unidade.",
      },
    ],
  },

  {
    id: "repressao",
    numero: "06",
    periodo: "Terror de Estado",
    titulo: "Repressão e violência",
    subtitulo: "Perseguição, censura e genocídio",
    imagem: "/assets/historia/repressao-holocausto.jpg",
    alt: "Registro histórico relacionado às perseguições realizadas pelo regime nazista",
    legenda:
      "As perseguições nazistas atingiram milhões de pessoas em toda a Europa ocupada.",
    fonte: "Fonte sugerida: USHMM / Yad Vashem / Bundesarchiv",
    introducao:
      "A violência não foi um elemento secundário do nazismo. A repressão política, o racismo institucional e a perseguição sistemática fizeram parte do funcionamento do regime.",
    itens: [
      {
        titulo: "Gestapo",
        texto:
          "A Polícia Secreta do Estado, conhecida como Gestapo, investigava opositores e colaborava na repressão contra pessoas consideradas inimigas do regime.",
      },
      {
        titulo: "SS e SD",
        texto:
          "A SS tornou-se uma das principais organizações de repressão e terror do regime. Seu serviço de segurança, o SD, também participava da vigilância e perseguição política.",
      },
      {
        titulo: "Censura",
        texto:
          "Livros, jornais, obras de arte, músicas e produções consideradas contrárias ao regime foram censuradas. Em 1933 ocorreram grandes queimas públicas de livros.",
      },
      {
        titulo: "Campos de concentração",
        texto:
          "Dachau foi aberto em 1933 e serviu inicialmente para aprisionar opositores políticos. Com o tempo, a rede de campos foi ampliada e passou a atingir numerosos grupos perseguidos.",
      },
      {
        titulo: "Grupos perseguidos",
        texto:
          "Judeus, Roma e Sinti, pessoas com deficiência, homossexuais, Testemunhas de Jeová, comunistas, social-democratas, sindicalistas, integrantes da resistência e outros grupos foram perseguidos.",
      },
      {
        titulo: "Holocausto",
        texto:
          "Durante a Segunda Guerra Mundial, o regime nazista e seus colaboradores assassinaram aproximadamente seis milhões de judeus europeus. Milhões de outras pessoas também foram vítimas das políticas de perseguição, ocupação, trabalho forçado e assassinato em massa.",
      },
    ],
  },

  {
    id: "fim",
    numero: "07",
    periodo: "1944 — 1945",
    titulo: "Fim do regime",
    subtitulo: "Derrota militar e queda do Terceiro Reich",
    imagem: "/assets/historia/fim-regime.jpg",
    alt: "Berlim destruída após a Segunda Guerra Mundial",
    legenda:
      "A destruição causada pela guerra marcou o fim do regime nazista e o início da ocupação aliada da Alemanha.",
    fonte: "Fonte sugerida: Bundesarchiv / arquivos dos Aliados",
    introducao:
      "A expansão territorial promovida pelo regime levou a Alemanha à Segunda Guerra Mundial. Após anos de conflito, as forças alemãs foram derrotadas pelos Aliados.",
    itens: [
      {
        titulo: "Derrota militar",
        texto:
          "A partir de 1943, a Alemanha enfrentou derrotas cada vez maiores. Tropas soviéticas avançaram pelo leste enquanto forças dos Estados Unidos, Reino Unido e outros aliados avançavam pelo oeste.",
      },
      {
        titulo: "Batalha de Berlim",
        texto:
          "Em abril de 1945, tropas soviéticas cercaram e entraram em Berlim, enquanto o governo nazista entrava em colapso.",
      },
      {
        titulo: "Morte de Hitler",
        texto:
          "Em 30 de abril de 1945, Adolf Hitler morreu por suicídio em seu bunker em Berlim.",
      },
      {
        titulo: "Rendição",
        texto:
          "A Alemanha assinou sua rendição incondicional em maio de 1945. O regime nazista deixou de existir.",
      },
      {
        titulo: "Consequências",
        texto:
          "A Alemanha foi ocupada pelas potências vencedoras, iniciou-se um processo de desnazificação e importantes dirigentes nazistas foram posteriormente julgados nos Julgamentos de Nuremberg.",
      },
    ],
  },

  {
    id: "legado",
    numero: "08",
    periodo: "1945 — Hoje",
    titulo: "Legado e memória",
    subtitulo: "Como esse passado é tratado atualmente",
    imagem: "/assets/historia/memorial-holocausto.jpg",
    alt: "Memorial aos Judeus Mortos da Europa em Berlim",
    legenda:
      "Memorial aos Judeus Mortos da Europa, inaugurado em Berlim em 2005.",
    fonte: "Fonte sugerida: Wikimedia Commons",
    introducao:
      "A memória do nazismo ocupa um lugar central na sociedade alemã contemporânea e no estudo da história do século XX.",
    itens: [
      {
        titulo: "Desnazificação",
        texto:
          "Depois da guerra, os Aliados iniciaram políticas destinadas a retirar nazistas de posições de poder e eliminar a influência institucional do regime.",
      },
      {
        titulo: "Julgamentos de Nuremberg",
        texto:
          "Entre 1945 e 1946, importantes dirigentes nazistas foram julgados por crimes de guerra, crimes contra a humanidade e outros delitos internacionais.",
      },
      {
        titulo: "Educação",
        texto:
          "O nazismo e o Holocausto são amplamente estudados nas escolas alemãs, com visitas a memoriais, museus e antigos campos de concentração.",
      },
      {
        titulo: "Memoriais",
        texto:
          "Diversos monumentos e centros de documentação preservam a memória das vítimas, como o Memorial aos Judeus Mortos da Europa, localizado em Berlim.",
      },
      {
        titulo: "Leis",
        texto:
          "A legislação alemã restringe a propaganda de organizações nazistas e, em muitos contextos, o uso de seus símbolos. A negação do Holocausto também pode ser punida criminalmente.",
      },
      {
        titulo: "Extremismo atual",
        texto:
          "Grupos neonazistas e movimentos extremistas ainda existem. Por isso, autoridades, pesquisadores e organizações civis continuam discutindo formas de enfrentar o extremismo e preservar a memória histórica.",
      },
    ],
  },
];

const linhaDoTempo = [
  ["1918", "Derrota alemã na Primeira Guerra Mundial"],
  ["1919", "Tratado de Versalhes e início da República de Weimar"],
  ["1923", "Hiperinflação e fracasso do Putsch da Cervejaria"],
  ["1929", "Grande Depressão atinge duramente a Alemanha"],
  ["1933", "Hitler é nomeado chanceler"],
  ["1934", "Hitler assume o título de Führer"],
  ["1935", "Leis de Nuremberg institucionalizam a perseguição racial"],
  ["1938", "Kristallnacht amplia a violência contra os judeus"],
  ["1939", "Invasão da Polônia e início da Segunda Guerra Mundial"],
  ["1941", "Escalada do assassinato sistemático de judeus europeus"],
  ["1945", "Derrota da Alemanha e fim do regime nazista"],
];

export default function Historia() {
  const [menuAberto, setMenuAberto] = useState(false);

  const navegar = (id) => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuAberto(false);
  };

  const tratarErroImagem = (event) => {
    event.currentTarget.style.display = "none";

    const fallback = event.currentTarget.nextElementSibling;

    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  return (
    <div className={styles.pagina}>
      {/* ======================================================
          HERO
      ====================================================== */}

      <header className={styles.hero} id="inicio">
        <div className={styles.heroOverlay}></div>

        <nav className={styles.navbar}>
          <button
            className={styles.logo}
            onClick={() => navegar("inicio")}
            type="button"
          >
            <span className={styles.logoLinha}></span>

            <span>
              HISTÓRIA
              <small>Século XX</small>
            </span>
          </button>

          <button
            type="button"
            className={styles.menuMobile}
            onClick={() => setMenuAberto((valor) => !valor)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`${styles.links} ${
              menuAberto ? styles.linksAberto : ""
            }`}
          >
            <button type="button" onClick={() => navegar("contexto")}>
              Contexto
            </button>

            <button type="button" onClick={() => navegar("ascensao")}>
              Ascensão
            </button>

            <button type="button" onClick={() => navegar("lider")}>
              O líder
            </button>

            <button type="button" onClick={() => navegar("ideologia")}>
              Ideologia
            </button>

            <button type="button" onClick={() => navegar("repressao")}>
              Repressão
            </button>

            <button type="button" onClick={() => navegar("legado")}>
              Legado
            </button>
          </div>
        </nav>

        <div className={styles.heroConteudo}>
          <div className={styles.heroBadge}>
            Conteúdo histórico e educativo
          </div>

          <p className={styles.heroAcima}>ALEMANHA • 1933 — 1945</p>

          <h1>
            Nazismo
            <span>e o Terceiro Reich</span>
          </h1>

          <p className={styles.heroTexto}>
            Da crise da República de Weimar à consolidação de uma ditadura,
            passando pela propaganda, repressão, Holocausto, guerra e memória
            histórica.
          </p>

          <div className={styles.heroAcoes}>
            <button
              type="button"
              className={styles.botaoPrincipal}
              onClick={() => navegar("contexto")}
            >
              Explorar a história
              <span>↓</span>
            </button>

            <button
              type="button"
              className={styles.botaoSecundario}
              onClick={() => navegar("linha-tempo")}
            >
              Ver linha do tempo
            </button>
          </div>
        </div>

        <div className={styles.heroNumeros}>
          <div>
            <strong>1933</strong>
            <span>Início do regime</span>
          </div>

          <div>
            <strong>12 anos</strong>
            <span>de ditadura</span>
          </div>

          <div>
            <strong>1945</strong>
            <span>Fim do Terceiro Reich</span>
          </div>
        </div>

        <div className={styles.scroll}>
          <span></span>
          ROLE PARA EXPLORAR
        </div>
      </header>

      {/* ======================================================
          INTRODUÇÃO
      ====================================================== */}

      <main>
        <section className={styles.introducao}>
          <div className={styles.container}>
            <div className={styles.tituloCentral}>
              <span className={styles.eyebrow}>ANTES DE COMEÇAR</span>

              <h2>O que estamos estudando?</h2>

              <p>
                O nazismo foi uma forma extrema de ditadura fascista,
                nacionalista, racista e antissemita que governou a Alemanha
                entre 1933 e 1945.
              </p>
            </div>

            <div className={styles.introGrid}>
              <article className={styles.introPrincipal}>
                <span className={styles.numeroDecorativo}>01</span>

                <h3>Fascismo e nazismo</h3>

                <p>
                  O termo <strong>fascismo</strong> surgiu relacionado ao regime
                  de Benito Mussolini na Itália. Posteriormente, também passou a
                  ser utilizado de forma mais ampla para analisar movimentos
                  autoritários e ultranacionalistas surgidos especialmente no
                  período entre as duas guerras mundiais.
                </p>

                <p>
                  O nazismo alemão possuía características comuns ao fascismo
                  italiano, como autoritarismo, nacionalismo extremo,
                  anticomunismo, culto ao líder e mobilização política das
                  massas.
                </p>
              </article>

              <article className={styles.introDestaque}>
                <span className={styles.aspas}>“</span>

                <p>
                  Uma característica fundamental para compreender o nazismo é a
                  posição central ocupada pelo racismo biológico e pelo
                  antissemitismo em sua ideologia.
                </p>

                <span className={styles.destaqueRodape}>
                  PONTO IMPORTANTE PARA O DEBATE
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================
            LINHA DO TEMPO
        ====================================================== */}

        <section className={styles.timelineSection} id="linha-tempo">
          <div className={styles.container}>
            <div className={styles.sectionCabecalho}>
              <span className={styles.eyebrowClaro}>VISÃO GERAL</span>

              <h2>Linha do tempo</h2>

              <p>
                Alguns dos principais acontecimentos que ajudam a compreender a
                ascensão, consolidação e queda do regime.
              </p>
            </div>

            <div className={styles.timeline}>
              {linhaDoTempo.map(([ano, evento], index) => (
                <div className={styles.timelineItem} key={ano}>
                  <div className={styles.timelineMarcador}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className={styles.timelineConteudo}>
                    <strong>{ano}</strong>
                    <p>{evento}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================
            8 BLOCOS
        ====================================================== */}

        <div className={styles.blocos}>
          {blocos.map((bloco, index) => (
            <section
              id={bloco.id}
              key={bloco.id}
              className={`${styles.bloco} ${
                index % 2 !== 0 ? styles.blocoAlternado : ""
              }`}
            >
              <div className={styles.container}>
                <div className={styles.blocoTopo}>
                  <span className={styles.blocoNumero}>{bloco.numero}</span>

                  <div>
                    <span className={styles.periodo}>{bloco.periodo}</span>

                    <h2>{bloco.titulo}</h2>

                    <p className={styles.subtitulo}>{bloco.subtitulo}</p>
                  </div>
                </div>

                <div
                  className={`${styles.blocoApresentacao} ${
                    index % 2 !== 0 ? styles.apresentacaoInvertida : ""
                  }`}
                >
                  <figure className={styles.figura}>
                    <div className={styles.imagemWrapper}>
                      <img
                        src={bloco.imagem}
                        alt={bloco.alt}
                        loading="lazy"
                        onError={tratarErroImagem}
                      />

                      <div className={styles.imageFallback}>
                        <span>IMAGEM HISTÓRICA</span>

                        <strong>
                          Adicione:
                          <br />
                          {bloco.imagem}
                        </strong>
                      </div>

                      <span className={styles.imageNumero}>
                        {bloco.numero}
                      </span>
                    </div>

                    <figcaption>
                      <p>{bloco.legenda}</p>
                      <span>{bloco.fonte}</span>
                    </figcaption>
                  </figure>

                  <div className={styles.blocoIntroducao}>
                    <span className={styles.label}>CONTEXTO</span>

                    <p>{bloco.introducao}</p>

                    <div className={styles.linhaDecorativa}></div>
                  </div>
                </div>

                <div className={styles.cards}>
                  {bloco.itens.map((item, itemIndex) => (
                    <article className={styles.card} key={item.titulo}>
                      <div className={styles.cardNumero}>
                        {String(itemIndex + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h3>{item.titulo}</h3>
                        <p>{item.texto}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ======================================================
            DEBATE
        ====================================================== */}

        <section className={styles.debate}>
          <div className={styles.container}>
            <div className={styles.debateGrid}>
              <div className={styles.debateTitulo}>
                <span>OBSERVAÇÃO CRÍTICA</span>

                <h2>
                  O que diferencia o nazismo de outros regimes fascistas?
                </h2>
              </div>

              <div className={styles.debateTexto}>
                <p>
                  Alemanha e Itália são geralmente consideradas os casos mais
                  claros de regimes fascistas no período entre guerras.
                  Entretanto, eles não eram idênticos.
                </p>

                <p>
                  No nazismo, o <strong>racismo biológico</strong> e o{" "}
                  <strong>antissemitismo</strong> ocuparam uma posição central.
                  A população era classificada de acordo com ideias raciais
                  pseudocientíficas e determinados grupos foram apresentados
                  como ameaças à sociedade alemã.
                </p>

                <p>
                  Essa visão contribuiu para políticas cada vez mais violentas,
                  que culminaram no <strong>Holocausto</strong>: a perseguição e
                  o assassinato sistemático de aproximadamente seis milhões de
                  judeus europeus, além da perseguição e morte de milhões de
                  outras vítimas do regime nazista.
                </p>

                <div className={styles.pergunta}>
                  <span>PARA O SEMINÁRIO</span>

                  <p>
                    Por que o racismo e o antissemitismo são fundamentais para
                    compreender as particularidades do nazismo?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            FONTES
        ====================================================== */}

        <section className={styles.fontes}>
          <div className={styles.container}>
            <div className={styles.tituloCentral}>
              <span className={styles.eyebrow}>PESQUISA HISTÓRICA</span>

              <h2>Fontes confiáveis</h2>

              <p>
                Para imagens, documentos e aprofundamento do trabalho, priorize
                instituições históricas e arquivos reconhecidos.
              </p>
            </div>

            <div className={styles.fontesGrid}>
              <article>
                <span>01</span>
                <h3>Bundesarchiv</h3>
                <p>
                  Arquivo Federal Alemão com fotografias e documentos
                  históricos da Alemanha.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>USHMM</h3>
                <p>
                  United States Holocaust Memorial Museum, com amplo acervo
                  documental sobre o Holocausto.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Yad Vashem</h3>
                <p>
                  Centro mundial de documentação, pesquisa e memória das
                  vítimas do Holocausto.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Wikimedia Commons</h3>
                <p>
                  Reúne imagens de diversos arquivos históricos, incluindo
                  materiais disponibilizados pelo Bundesarchiv.
                </p>
              </article>
            </div>

            <div className={styles.notaFontes}>
              <span>!</span>

              <p>
                Toda imagem utilizada no seminário deve possuir{" "}
                <strong>legenda e indicação de fonte</strong>, conforme
                solicitado no roteiro da atividade.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTopo}>
            <div>
              <span className={styles.footerTag}>HISTÓRIA • 3º ANO</span>
              <h2>Nazismo e o Terceiro Reich</h2>
            </div>

            <button type="button" onClick={() => navegar("inicio")}>
              Voltar ao início
              <span>↑</span>
            </button>
          </div>

          <div className={styles.footerLinha}></div>

          <p className={styles.footerAviso}>
            Página desenvolvida para fins educacionais. Símbolos, imagens e
            referências ao regime nazista são apresentados exclusivamente em
            contexto histórico e crítico.
          </p>
        </div>
      </footer>
    </div>
  );
}