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
    'work.back': 'Voltar para Trabalhos',
    'work.notFound': 'Projeto não encontrado',
    'work.aos_olhos.subtitle': 'Um livro de poesias e reflexões sobre amor e vida',
    'work.aos_olhos.description': 'Uma obra literária que explora as profundezas do coração humano através de poesias e reflexões.',
    'work.contos.subtitle': 'Contos que exploram os detalhes sutis da vida',
    'work.contos.description': 'Uma coleção de contos que costura com delicadeza memórias, partidas e retornos.',
    'work.futuro.subtitle': 'Revista acadêmica da Faculdade de Educação da USP',
    'work.futuro.description': 'Criação da capa da edição 14 da revista Futuro do Pretérito, publicação acadêmica da FE-USP.',
    'project.futuro': 'Futuro do Pretérito',
    'project.magazine': 'Revista',
    'work.machado.subtitle': 'Trabalho acadêmico sobre literatura e ilustração',
    'work.machado.description': 'Análise visual e literária das representações do feminino na obra de Machado de Assis.',
    'project.machado': 'Machado de Assis e o Feminino',
    'project.academic': 'Trabalho Acadêmico',
    'work.download': 'Baixar PDF',
    'work.ic.subtitle': 'Iniciação Científica na USP',
    'work.ic.description': 'Pesquisa acadêmica desenvolvida durante a graduação em Letras na USP.',
    'project.ic': 'Iniciação Científica',
    'project.research': 'Pesquisa Acadêmica',
    'work.diagramacao.subtitle': 'Design editorial para material didático',
    'work.diagramacao.description': 'Diagramação de apostilas para ensino fundamental.',
    'project.diagramacao': 'Diagramação Apostilas',
    'work.italiano.subtitle': 'Autobiografia linguística em italiano',
    'work.italiano.description': 'Projeto de identidade visual para autobiografia linguística em italiano.',
    'project.italiano': 'Italiano',
    'work.villare.subtitle': 'Organização de amostra literária',
    'work.villare.description': 'Organização da amostra de minicontos ilustrados Villare.',
    'project.villare': 'Amostra Minicontos Villare',
    
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
    'work.back': 'Back to Work',
    'work.notFound': 'Project not found',
    'work.aos_olhos.subtitle': 'A book of poetry and reflections on love and life',
    'work.aos_olhos.description': 'A literary work that explores the depths of the human heart through poetry and reflections.',
    'work.contos.subtitle': 'Tales that explore the subtle details of life',
    'work.contos.description': 'A collection of tales that delicately weaves memories, departures, and returns.',
    'work.futuro.subtitle': 'Academic journal of USP Faculty of Education',
    'work.futuro.description': 'Cover design for issue 14 of Futuro do Pretérito, an academic publication of FE-USP.',
    'project.futuro': 'Futuro do Pretérito',
    'project.magazine': 'Magazine',
    'work.machado.subtitle': 'Academic work on literature and illustration',
    'work.machado.description': 'Visual and literary analysis of feminine representations in Machado de Assis works.',
    'project.machado': 'Machado de Assis and the Feminine',
    'project.academic': 'Academic Work',
    'work.download': 'Download PDF',
    'work.ic.subtitle': 'Undergraduate Research at USP',
    'work.ic.description': 'Academic research developed during the Literature degree at USP.',
    'project.ic': 'Undergraduate Research',
    'project.research': 'Academic Research',
    'work.diagramacao.subtitle': 'Editorial design for educational materials',
    'work.diagramacao.description': 'Layout design for elementary school workbooks.',
    'project.diagramacao': 'Workbook Layout',
    'work.italiano.subtitle': 'Linguistic autobiography in Italian',
    'work.italiano.description': 'Visual identity project for linguistic autobiography in Italian.',
    'project.italiano': 'Italian',
    'work.villare.subtitle': 'Literary showcase organization',
    'work.villare.description': 'Organization of Villare illustrated micro-stories showcase.',
    'project.villare': 'Villare Micro-stories Showcase',
    
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
