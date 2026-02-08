import { Navigation } from '../components/ui';
import { useParams, Link } from 'react-router-dom';

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
}

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
      { src: "https://m.media-amazon.com/images/I/71+wK-DdpZL._SY466_.jpg", alt: "Capa do livro Aos Olhos do Coração" }
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
      { src: "https://static.wixstatic.com/media/3c44b2_e545ac4850474908883ca460cda1f8d9~mv2.jpeg/v1/fill/w_900,h_900,al_c,q_85/3c44b2_e545ac4850474908883ca460cda1f8d9~mv2.jpeg", alt: "Capa do livro Contos em Preto e Branco" }
    ],
    caseStudyLink: "https://www.editoraminimalismos.com/product-page/contos-em-preto-e-branco-de-nicolle-marinho-martins"
  },
};

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navigation />
        <div className="pt-28 pb-24 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Projeto não encontrado</h1>
            <Link to="/work" className="text-gray-600 dark:text-gray-400 hover:underline">
              ← Voltar para Trabalhos
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
      <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
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
                Função
              </h3>
              <div className="space-y-1">
                {project.role.map((r, i) => (
                  <p key={i} className="text-sm sm:text-base text-black dark:text-white">{r}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                Ferramentas
              </h3>
              <div className="space-y-1">
                {project.tools.map((t, i) => (
                  <p key={i} className="text-sm sm:text-base text-black dark:text-white">{t}</p>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                Período
              </h3>
              <p className="text-sm sm:text-base text-black dark:text-white">{project.timeline}</p>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                Descrição
              </h3>
              <p className="text-sm sm:text-base text-black dark:text-white">{project.description}</p>
            </div>
          </div>

          {/* Context Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 sm:mb-6">
              Contexto
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
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity"
              >
                Ver trabalho
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}

          {/* Images Gallery */}
          {/* <div className="space-y-8 sm:space-y-12">
            {project.images.map((img, i) => (
              <div key={i} className="rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-900">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}

          {/* Back Link */}
          <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para Trabalhos
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
export { ProjectDetail };
