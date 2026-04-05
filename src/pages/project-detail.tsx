import { Navigation } from '../components/ui';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import MachadoPDF from '../assets/machado-de-assis/machado-de-assis-e-o-feminino.pdf';
import ICPDF from '../assets/iniciacao-cientifica/iniciacao-cientifica-ensaio.pdf';
import Bio1PDF from '../assets/diagramacao-apostilas/apostila-biologia-1.pdf';
import Geo2PDF from '../assets/diagramacao-apostilas/apostila-geografia-2.pdf';
import AutobiografiePDF from '../assets/italiano/autobiografie-linguistiche.pdf';
import DiagramacaoIMG from '../assets/diagramacao-apostilas/diagramacao-apostila-preview.jpeg';
import ItalianoCapaIMG from '../assets/italiano/italiano-capa-ilustracao.jpeg';
import JaquetaAzulIMG from '../assets/jaqueta-italiano-usp/italiano-jaqueta-azul.png';
import VarsityIMG from '../assets/jaqueta-italiano-usp/italiano-varsity-jacket.jpeg';
import VarsityColoridaIMG from '../assets/jaqueta-italiano-usp/italiano-varsity-jacket-colorida.jpeg';
import CamisetaIMG from '../assets/jaqueta-italiano-usp/italiano-camiseta.jpeg';
import MachadoCardIMG from '../assets/machado-de-assis/machado-de-assis-card.jpeg';
import ICCardIMG from '../assets/iniciacao-cientifica/iniciacao-cientifica-card.jpeg';
import FuturoCapaIMG from '../assets/futuro-do-preterito/futuro-do-preterito-capa.png';
import AosOlhosCapaIMG from '../assets/aos-olhos-do-coracao/aos-olhos-do-coracao-capa.jpg';
import ContosCapaIMG from '../assets/contos-em-preto-e-branco/contos-em-preto-e-branco-capa.png';

interface ProjectData {
  title: string;
  subtitle: string;
  role: string[];
  tools: string[];
  timeline: string;
  description: string;
  context: string[];
  heroImage?: string;
  images: { src: string; alt: string }[];
  caseStudyLink?: string;
  isDownload?: boolean;
}

const projectPdfs: Record<string, { href: string; filename: string; label: string }[]> = {
  'machado-de-assis-e-o-feminino': [
    { href: MachadoPDF, filename: 'MACHADO DE ASSIS E O FEMININO.pdf', label: 'Baixar PDF' },
  ],
  'iniciacao-cientifica': [
    { href: ICPDF, filename: 'Ensaio final IC (2024).pdf', label: 'Baixar PDF' },
  ],
  'diagramacao-apostilas': [
    { href: Bio1PDF, filename: 'Biologia 1 - Apostila.pdf', label: 'Biologia 1' },
    { href: Geo2PDF, filename: 'Geografia 2 - Apostila.pdf', label: 'Geografia 2' },
  ],
  'italiano': [
    { href: AutobiografiePDF, filename: 'Autobiografie Linguistiche.pdf', label: 'Baixar PDF' },
  ],
};

const projects: Record<string, ProjectData> = {
  "aos-olhos-do-coracao": {
    title: "Aos Olhos do Coração",
    subtitle: "Livro Publicado",
    role: ["Autora", "Poetisa"],
    tools: ["Escrita Criativa", "Amazon Kindle"],
    timeline: "2021",
    description: "Um livro de poesias e reflexões sobre amor, vida e as emoções que nos fazem humanos.",
    context: [
      "Aos Olhos do Coração é uma obra literária que mergulha nas profundezas das emoções humanas, explorando temas como amor, saudade, esperança e autoconhecimento.",
      "Cada poesia foi cuidadosamente escrita para tocar a alma do leitor, criando uma conexão íntima entre as palavras e os sentimentos mais profundos do coração."
    ],
    images: [
      { src: AosOlhosCapaIMG, alt: "Capa do livro Aos Olhos do Coração" },
    ],
    caseStudyLink: "https://www.amazon.com.br/Aos-olhos-Do-Cora%C3%A7%C3%A3o-Nicolle-ebook/dp/B09FSJ36XL"
  },
  "contos-em-preto-e-branco": {
    title: "Contos em Preto e Branco",
    subtitle: "Livro Publicado",
    role: ["Autora", "Contista"],
    tools: ["Escrita Criativa", "Editora Minimalismos"],
    timeline: "2025",
    description: "Uma coleção de contos que costura com delicadeza memórias, partidas e retornos.",
    context: [
      "Contos em Preto e Branco nasceu durante um semestre dedicado ao conto na faculdade, quando as primeiras histórias começaram a ser rascunhadas sem imaginar que ali nasceria um livro.",
      "Foi num caderno de sketch comprado numa feira literária que tudo se misturou: desenhos, palavras, lembranças e presenças. Aos poucos, percebi que estava costurando com delicadeza os pedaços daquilo que me atravessava.",
      "Gosto do que é sutil, do que passa quase despercebido, do que pulsa no fundo das coisas. E talvez seja por isso que escrevo: para que os detalhes sobrevivam ao tempo."
    ],
    images: [
      { src: ContosCapaIMG, alt: "Capa do livro Contos em Preto e Branco" },
    ],
    caseStudyLink: "https://www.editoraminimalismos.com/product-page/contos-em-preto-e-branco-de-nicolle-marinho-martins"
  },
  "futuro-do-preterito": {
    title: "Futuro do Pretérito",
    subtitle: "Capa de Revista Acadêmica",
    role: ["Designer", "Ilustradora"],
    tools: ["Design Editorial", "Ilustração"],
    timeline: "2024",
    description: "Criação da capa da edição 14 da revista Futuro do Pretérito, publicação acadêmica da Faculdade de Educação da USP.",
    context: [
      "A revista Futuro do Pretérito é uma publicação acadêmica da Faculdade de Educação da Universidade de São Paulo (FE-USP), dedicada a reflexões sobre educação, memória e cultura.",
      "A edição 14 foi minha primeira participação no projeto, onde tive a oportunidade de criar a capa, unindo minha paixão por design editorial e ilustração.",
      "O processo criativo envolveu uma imersão nos temas abordados pela revista, buscando traduzir visualmente as discussões sobre passado e futuro que permeiam a publicação."
    ],
    images: [
      { src: FuturoCapaIMG, alt: "Capa da edição 14 da revista Futuro do Pretérito" },
    ],
    caseStudyLink: "https://www4.fe.usp.br/wp-content/uploads/futuropreterito-2024-03.pdf"
  },
  "machado-de-assis-e-o-feminino": {
    title: "Machado de Assis e o Feminino",
    subtitle: "Trabalho Acadêmico",
    role: ["Pesquisadora", "Ilustradora"],
    tools: ["Pesquisa Literária", "Ilustração", "Design Editorial"],
    timeline: "2025",
    description: "Análise visual e literária das representações do feminino na obra de Machado de Assis.",
    context: [
      "Este trabalho acadêmico explora as representações femininas na obra de Machado de Assis, um dos maiores escritores da literatura brasileira.",
      "A pesquisa analisa como Machado construiu personagens femininas complexas e multifacetadas, que desafiavam as convenções sociais de sua época.",
      "O projeto une análise literária com criação visual, traduzindo elementos do texto machadiano para a linguagem da ilustração e do design editorial."
    ],
    images: [
      { src: MachadoCardIMG, alt: "Ilustração do projeto Machado de Assis e o Feminino" },
    ],
    caseStudyLink: "/assets/machado-de-assis-e-o-feminino.pdf",
    isDownload: true
  },
  "iniciacao-cientifica": {
    title: "Iniciação Científica",
    subtitle: "Pesquisa Acadêmica",
    role: ["Pesquisadora", "Autora"],
    tools: ["Pesquisa Literária", "Análise Textual", "Escrita Acadêmica"],
    timeline: "2024",
    description: "Pesquisa acadêmica desenvolvida durante a graduação em Letras na USP.",
    context: [
      "A Iniciação Científica é uma modalidade de pesquisa acadêmica voltada para estudantes de graduação, oferecendo a oportunidade de desenvolvimento de habilidades de investigação científica.",
      "Este projeto foi desenvolvido durante minha graduação em Letras na Universidade de São Paulo, sob orientação de professores do departamento.",
      "A pesquisa explora temas relacionados à literatura, língua e cultura, contribuindo para minha formação como pesquisadora e escritora."
    ],
    images: [
      { src: ICCardIMG, alt: "Iniciação Científica - Tempo e modernidade em Véspera de Carla Madeira" },
    ],
    caseStudyLink: "ic",
    isDownload: true
  },
  "diagramacao-apostilas": {
    title: "Diagramação Apostilas",
    subtitle: "Design Editorial Freelance",
    role: ["Designer", "Diagramadora"],
    tools: ["Design Editorial", "InDesign"],
    timeline: "2025",
    description: "Diagramação de apostilas didáticas de Biologia e Geografia para o ensino médio.",
    context: [
      "Este projeto envolve a diagramação de apostilas didáticas para o ensino médio, abrangendo as disciplinas de Biologia 1 e Geografia 2, dentro da área de Ciências da Natureza e Ciências Humanas.",
      "O trabalho consiste em organizar visualmente o conteúdo pedagógico de forma clara e atrativa, integrando textos, imagens, infográficos e elementos visuais que facilitem a compreensão dos alunos.",
      "Cada apostila segue um sistema editorial coeso, com hierarquia tipográfica bem definida, paleta de cores por disciplina e elementos gráficos que tornam o material didático mais acessível e envolvente."
    ],
    images: [
      { src: DiagramacaoIMG, alt: "Página de apostila de Geografia - Estruturas etária e ocupacional" },
    ],
    caseStudyLink: "diagramacao",
    isDownload: true
  },
  "italiano": {
    title: "Autobiografie Linguistiche",
    subtitle: "Autobiografia Linguística em Italiano",
    role: ["Designer", "Ilustradora"],
    tools: ["Design Editorial", "Ilustração"],
    timeline: "2025",
    description: "Projeto de identidade visual e ilustração para a publicação coletiva de autobiografias linguísticas em italiano.",
    context: [
      "Autobiografie Linguistiche é uma publicação coletiva desenvolvida no contexto do estudo da língua italiana, reunindo narrativas pessoais sobre a relação dos autores com os idiomas que fazem parte de suas vidas.",
      "O projeto envolveu a criação da identidade visual completa da publicação, incluindo capa ilustrada, projeto gráfico e diagramação, traduzindo visualmente a diversidade cultural e linguística presente nos textos.",
      "A ilustração da capa retrata figuras em movimento que evocam a energia e a pluralidade das experiências linguísticas compartilhadas, com uma paleta de cores que remete à bandeira italiana e ao encontro entre culturas."
    ],
    images: [
      { src: ItalianoCapaIMG, alt: "Ilustração de capa - Autobiografie Linguistiche" },
    ],
    caseStudyLink: "italiano",
    isDownload: true
  },
  "jaqueta-italiano-usp": {
    title: "Kit 2026 Calouros Italiano",
    subtitle: "Design do Kit da Habilitação Italiano — Letras USP",
    role: ["Designer", "Ilustradora"],
    tools: ["Ilustração", "Design de Estampa"],
    timeline: "2026",
    description: "Criação do design de um college, uma camiseta e um corta-vento para os calouros da habilitação Italiano da Letras USP.",
    context: [
      "O projeto consistiu na criação do kit de boas-vindas para os calouros de 2026 da habilitação em Italiano do curso de Letras da Universidade de São Paulo.",
      "Foram desenvolvidas três peças — uma camiseta, um college e um corta-vento — todas com designs que remetem à Itália, incorporando elementos como a Vespa, o Coliseu, a Torre de Pisa e a tipografia clássica de 'La dolce vita'.",
      "Cada peça traz uma proposta visual diferente, unindo a iconografia italiana com o espírito universitário, para que os alunos pudessem vestir com orgulho a identidade da sua habilitação."
    ],
    images: [
      { src: CamisetaIMG, alt: "Camiseta Italiano USP - La dolce vita" },
      { src: JaquetaAzulIMG, alt: "Jaqueta azul Italiano USP - La dolce vita" },
      { src: VarsityIMG, alt: "Varsity jacket Italia - Vivere all'italiana" },
      { src: VarsityColoridaIMG, alt: "Varsity jacket Italia - design colorido" },
    ],
  },
};

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navigation />
        <div className="pt-28 pb-24 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">{t('work.notFound')}</h1>
            <Link to="/work" className="text-gray-600 dark:text-gray-400 hover:underline">
              ← {t('work.back')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      
      {/* Main Content */}
      <div className="pt-6 pb-28 sm:pt-8 md:pt-28 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-5xl mx-auto">
          
          {/* Hero Section */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-3 sm:mb-4">
              {project.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-normal">
              {project.subtitle}
            </h2>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-200 dark:border-zinc-800">
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                {t('work.role')}
              </h3>
              <div className="space-y-1">
                {project.role.map((r, i) => (
                  <p key={i} className="text-sm sm:text-base text-black dark:text-white">{r}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                {t('work.tools')}
              </h3>
              <div className="space-y-1">
                {project.tools.map((tool, i) => (
                  <p key={i} className="text-sm sm:text-base text-black dark:text-white">{tool}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                {t('work.timeline')}
              </h3>
              <p className="text-sm sm:text-base text-black dark:text-white">{project.timeline}</p>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                {t('work.description')}
              </h3>
              <p className="text-sm sm:text-base text-black dark:text-white">{project.description}</p>
            </div>
          </div>

          {/* Context Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
              {t('work.context')}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {project.context.map((paragraph, i) => (
                <p key={i} className="text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Case Study Button */}
          {project.caseStudyLink && (
            <div className="mb-8 sm:mb-12">
              {project.isDownload && slug && projectPdfs[slug] ? (
                <div className="flex flex-wrap gap-3">
                  {projectPdfs[slug].map((pdf, i) => (
                    <a
                      key={i}
                      href={pdf.href}
                      download={pdf.filename}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
                    >
                      {pdf.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={project.caseStudyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
                >
                  {t('work.view')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {/* Images Gallery */}
          {project.images.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
                {t('work.gallery')}
              </h3>
              <div className={`grid gap-3 sm:gap-4 ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900 ${project.images.length > 1 && i === 0 ? 'sm:col-span-2' : ''}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('work.back')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
export { ProjectDetail };
