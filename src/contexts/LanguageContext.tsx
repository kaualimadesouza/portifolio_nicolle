import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.work': 'Trabalhos',
    'nav.contact': 'Contato',
    
    // Home
    'home.title': 'Nicolle Marinho',
    'home.subtitle': 'Escritora & Designer Editorial',
    'home.bio1': 'Sou graduanda em',
    'home.bio1.highlight': 'Letras pela USP',
    'home.bio1.end': 'e trabalho na interseção entre',
    'home.literature': 'literatura',
    'home.illustration': 'ilustração',
    'home.editorial': 'design editorial',
    'home.bio2': 'Acredito na escrita como um campo expandido que envolve imagem, composição e a materialidade do livro.',
    'home.bio3': 'Meu processo criativo sempre esteve ligado à produção de imagens e ao pensamento visual.',
    'home.cta.work': 'Ver trabalhos',
    'home.cta.about': 'Sobre mim',
    'home.contact.title': 'Vamos conversar? 💜',
    'home.contact.subtitle': 'Aberta a conversas e propostas de projetos',
    
    // Location & Availability
    'location.label': 'Localizado em',
    'location.city': 'São Paulo, Brasil',
    'availability.label': 'Status',
    'availability.status': 'Disponível',
    'availability.description': 'Para projetos freelance',
    
    // Projects
    'project.book': 'Livro',
    'project.tales': 'Contos',
    'project.poetry': 'Poesias e reflexões',
    'project.aos_olhos': 'Aos Olhos do Coração',
    'project.contos': 'Contos em Preto e Branco',
    
    // About
    'about.title': 'Sobre mim.',
    'about.where': 'De onde eu venho',
    'about.where.text': 'Sou graduanda em Letras pela USP e moro em São Bernardo do Campo (SP). Minha formação integra literatura e ilustração, e entendo a escrita como um campo expandido que envolve imagem, composição e a materialidade do livro. Meu processo criativo sempre esteve ligado à produção de imagens e ao pensamento visual.',
    'about.before': 'O que eu fazia antes',
    'about.before.text': 'Antes de atuar no campo editorial, desenvolvi projetos autorais que unem literatura e arte. Em 2021, publiquei de forma independente o livro "Aos olhos do coração", concebido como um objeto artístico, experiência que me levou a compartilhar meu processo criativo em palestras sobre literatura como espaço de criação visual e sensível.',
    'about.now': 'O que faço atualmente',
    'about.now.text': 'Curso Letras na Universidade de São Paulo (USP), com foco na integração entre literatura, escrita e criação artística em projetos que unem texto e produção visual. Publiquei uma coletânea de contos ilustrada, assinando textos e ilustrações, e desenvolvi a identidade visual de um projeto de autobiografia linguística em italiano. Também realizei um trabalho acadêmico sobre Machado de Assis, explorando a tradução de elementos literários para a linguagem visual.',
    'about.looking': 'O que estou procurando',
    'about.looking.text': 'Busco projetos e editoras focados em literatura visual, livros ilustrados, design editorial e criação autoral, em ambientes que valorizem experimentação estética.',
    'about.experience': 'Experiência',
    'about.email.copied': 'copiado',
    
    // Contact
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Estou disponível para novos projetos',
    'contact.message': 'Aberta a conversas e propostas! 💜',
    'contact.copy': 'Copiar e-mail',
    'contact.copied': 'Copiado!',
    'contact.cv': 'Currículo',
    'contact.viewProfile': 'Ver perfil',
    
    // Work
    'work.role': 'Função',
    'work.tools': 'Ferramentas',
    'work.timeline': 'Período',
    'work.description': 'Descrição',
    'work.context': 'Contexto',
    'work.view': 'Ver trabalho',
    'work.gallery': 'Galeria',
    'work.back': 'Voltar para Trabalhos',
    'work.notFound': 'Projeto não encontrado',
    'work.aos_olhos.subtitle': 'Escrita, Ilustração & Publicação Independente',
    'work.aos_olhos.description': 'Livro de poesias publicado de forma independente, concebido como objeto artístico.',
    'work.contos.subtitle': 'Escrita & Ilustração · Livro de Contos Ilustrado',
    'work.contos.description': 'Coletânea autoral com texto e ilustrações assinados pela autora.',
    'work.futuro.subtitle': 'Ilustração de Capa · Revista Acadêmica FE-USP',
    'work.futuro.description': 'Criação da capa da edição 14 da revista Futuro do Pretérito.',
    'project.futuro': 'Futuro do Pretérito',
    'project.magazine': 'Revista',
    'work.machado.subtitle': 'Ilustração & Design Editorial · Projeto Acadêmico',
    'work.machado.description': 'Tradução de elementos literários machadianos para a linguagem visual e editorial.',
    'project.machado': 'Machado de Assis e o Feminino',
    'project.academic': 'Trabalho Acadêmico',
    'work.download': 'Baixar PDF',
    'work.ic.subtitle': 'Pesquisa Acadêmica · Literatura Brasileira Contemporânea',
    'work.ic.description': 'Investigação sobre tempo e modernidade na obra de Carla Madeira.',
    'project.ic': 'Iniciação Científica',
    'project.research': 'Pesquisa Acadêmica',
    'work.diagramacao.subtitle': 'Design Editorial & Diagramação · Material Didático',
    'work.diagramacao.description': 'Projeto gráfico e diagramação de apostilas de Biologia e Geografia.',
    'project.diagramacao': 'Diagramação de Apostilas',
    'work.italiano.subtitle': 'Identidade Visual & Ilustração de Capa · Publicação Coletiva',
    'work.italiano.description': 'Criação da capa, projeto gráfico e diagramação de publicação em italiano.',
    'project.italiano': 'Autobiografie Linguistiche',
    'work.jaqueta.subtitle': 'Design de Estampa & Ilustração · Vestuário Universitário',
    'work.jaqueta.description': 'Criação do design de college, camiseta e corta-vento para calouros.',
    'project.jaqueta': 'Kit Calouros Italiano USP',

    // Social
    'social.bio.instagram': 'compartilhando momentos e inspirações!',
    'social.bio.linkedin': 'compartilhando projetos e insights sobre design!',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    
    // Home
    'home.title': 'Nicolle Marinho',
    'home.subtitle': 'Writer & Editorial Designer',
    'home.bio1': "I'm studying",
    'home.bio1.highlight': 'Literature at USP',
    'home.bio1.end': 'and work at the intersection of',
    'home.literature': 'literature',
    'home.illustration': 'illustration',
    'home.editorial': 'editorial design',
    'home.bio2': 'I believe in writing as an expanded field that involves image, composition, and the materiality of the book.',
    'home.bio3': 'My creative process has always been linked to image production and visual thinking.',
    'home.cta.work': 'View work',
    'home.cta.about': 'About me',
    'home.contact.title': "Let's talk? 💜",
    'home.contact.subtitle': 'Open to conversations and project proposals',
    
    // Location & Availability
    'location.label': 'Located in',
    'location.city': 'São Paulo, Brazil',
    'availability.label': 'Status',
    'availability.status': 'Available',
    'availability.description': 'For freelance projects',
    
    // Projects
    'project.book': 'Book',
    'project.tales': 'Tales',
    'project.poetry': 'Poetry and reflections',
    'project.aos_olhos': 'Through the Eyes of the Heart',
    'project.contos': 'Tales in Black and White',
    
    // About
    'about.title': 'About me.',
    'about.where': 'Where I come from',
    'about.where.text': "I'm a Literature student at USP and live in São Bernardo do Campo (SP). My education integrates literature and illustration, and I understand writing as an expanded field that involves image, composition, and the materiality of the book. My creative process has always been linked to image production and visual thinking.",
    'about.before': 'What I used to do',
    'about.before.text': 'Before working in the editorial field, I developed authorial projects that combine literature and art. In 2021, I independently published the book "Through the Eyes of the Heart", conceived as an artistic object, an experience that led me to share my creative process in lectures about literature as a space for visual and sensitive creation.',
    'about.now': 'What I do now',
    'about.now.text': "I study Literature at the University of São Paulo (USP), focusing on the integration between literature, writing, and artistic creation in projects that combine text and visual production. I published an illustrated collection of tales, signing both texts and illustrations, and developed the visual identity for an Italian linguistic autobiography project. I also completed an academic work on Machado de Assis, exploring the translation of literary elements into visual language.",
    'about.looking': 'What I am looking for',
    'about.looking.text': 'I seek projects and publishers focused on visual literature, illustrated books, editorial design, and authorial creation, in environments that value aesthetic experimentation.',
    'about.experience': 'Experience',
    'about.email.copied': 'copied',
    
    // Contact
    'contact.title': "Let's talk?",
    'contact.subtitle': "I'm available for new projects",
    'contact.message': 'Open to conversations and proposals! 💜',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',
    'contact.cv': 'Resume',
    'contact.viewProfile': 'View profile',
    
    // Work
    'work.role': 'Role',
    'work.tools': 'Tools',
    'work.timeline': 'Timeline',
    'work.description': 'Description',
    'work.context': 'Context',
    'work.view': 'View work',
    'work.gallery': 'Gallery',
    'work.back': 'Back to Work',
    'work.notFound': 'Project not found',
    'work.aos_olhos.subtitle': 'Writing, Illustration & Self-Publishing',
    'work.aos_olhos.description': 'Independently published poetry book conceived as an artistic object.',
    'work.contos.subtitle': 'Writing & Illustration · Illustrated Short Stories',
    'work.contos.description': 'Authorial collection with text and illustrations by the author.',
    'work.futuro.subtitle': 'Cover Illustration · Academic Journal FE-USP',
    'work.futuro.description': 'Cover design for issue 14 of Futuro do Pretérito journal.',
    'project.futuro': 'Futuro do Pretérito',
    'project.magazine': 'Magazine',
    'work.machado.subtitle': 'Illustration & Editorial Design · Academic Project',
    'work.machado.description': 'Translation of Machado de Assis literary elements into visual language.',
    'project.machado': 'Machado de Assis and the Feminine',
    'project.academic': 'Academic Work',
    'work.download': 'Download PDF',
    'work.ic.subtitle': 'Academic Research · Contemporary Brazilian Literature',
    'work.ic.description': 'Research on time and modernity in Carla Madeira\'s work.',
    'project.ic': 'Undergraduate Research',
    'project.research': 'Academic Research',
    'work.diagramacao.subtitle': 'Editorial Design & Layout · Educational Materials',
    'work.diagramacao.description': 'Graphic design and layout for Biology and Geography workbooks.',
    'project.diagramacao': 'Workbook Layout',
    'work.italiano.subtitle': 'Visual Identity & Cover Illustration · Collective Publication',
    'work.italiano.description': 'Cover, graphic design, and layout for an Italian-language publication.',
    'project.italiano': 'Autobiografie Linguistiche',
    'work.jaqueta.subtitle': 'Print Design & Illustration · University Apparel',
    'work.jaqueta.description': 'College jacket, t-shirt and windbreaker design for freshmen.',
    'project.jaqueta': 'Italian USP Freshman Kit',

    // Social
    'social.bio.instagram': 'sharing moments and inspirations!',
    'social.bio.linkedin': 'sharing projects and design insights!',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('language', language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
