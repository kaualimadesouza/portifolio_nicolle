import { Navigation } from '../components/ui';
import WorkCard from '../components/ui/WorkCard';
import { useState } from 'react';
import AosOlhosDoCoracaoIMG from '../assets/aos-olhos-do-coracao/aos-olhos-do-coracao-card.png';
import ContosEmPretoEBrancoIMG from '../assets/contos-em-preto-e-branco/contos-em-preto-e-branco-card.png';
import FuturoDoPreterito from '../assets/futuro-do-preterito/futuro-do-preterito-capa.png';
import MachadoIMG from '../assets/machado-de-assis/machado-de-assis-card.jpeg';
import ICIMG from '../assets/iniciacao-cientifica/iniciacao-cientifica-card.jpeg';
import DiagramacaoIMG from '../assets/diagramacao-apostilas/diagramacao-apostila-preview.jpeg';
import ItalianoIMG from '../assets/italiano/italiano-capa-ilustracao.jpeg';
import JaquetaIMG from '../assets/jaqueta-italiano-usp/italiano-jaqueta-azul.png';
import { useLanguage } from '../contexts/LanguageContext';

function Work() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const cards = [
    // Livros
    {
      title: t('project.aos_olhos'),
      subtitle: t('work.aos_olhos.subtitle'),
      description: t('work.aos_olhos.description'),
      image: AosOlhosDoCoracaoIMG,
      link: "/work/aos-olhos-do-coracao",
      imageConfig: {
        fit: 'contain' as const,
      },
    },
    {
      title: t('project.contos'),
      subtitle: t('work.contos.subtitle'),
      description: t('work.contos.description'),
      image: ContosEmPretoEBrancoIMG,
      link: "/work/contos-em-preto-e-branco",
      imageConfig: {
        fit: 'cover' as const,
        bgColor: '#000000',
      },
    },
    // Ilustração
    {
      title: t('project.machado'),
      subtitle: t('work.machado.subtitle'),
      description: t('work.machado.description'),
      image: MachadoIMG,
      link: "/work/machado-de-assis-e-o-feminino",
      imageConfig: {
        size: 'full' as const,
        fit: 'contain' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    {
      title: t('project.italiano'),
      subtitle: t('work.italiano.subtitle'),
      description: t('work.italiano.description'),
      image: ItalianoIMG,
      link: "/work/italiano",
      imageConfig: {
        size: 'full' as const,
        fit: 'cover' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    {
      title: t('project.jaqueta'),
      subtitle: t('work.jaqueta.subtitle'),
      description: t('work.jaqueta.description'),
      image: JaquetaIMG,
      link: "/work/jaqueta-italiano-usp",
      imageConfig: {
        size: 'full' as const,
        fit: 'contain' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    // Diagramação
    {
      title: t('project.diagramacao'),
      subtitle: t('work.diagramacao.subtitle'),
      description: t('work.diagramacao.description'),
      image: DiagramacaoIMG,
      link: "/work/diagramacao-apostilas",
      imageConfig: {
        size: 'full' as const,
        fit: 'cover' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    // Design Editorial
    {
      title: t('project.futuro'),
      subtitle: t('work.futuro.subtitle'),
      description: t('work.futuro.description'),
      image: FuturoDoPreterito,
      link: "/work/futuro-do-preterito",
      imageConfig: {
        size: 'full' as const,
        fit: 'contain' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    // Iniciação Científica
    {
      title: t('project.ic'),
      subtitle: t('work.ic.subtitle'),
      description: t('work.ic.description'),
      image: ICIMG,
      link: "/work/iniciacao-cientifica",
      imageConfig: {
        size: 'full' as const,
        fit: 'cover' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      {/* Main Content */}
      <div className="pt-6 pb-28 sm:pt-8 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-3xl xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {cards.map((card, idx) => (
              <WorkCard
                key={idx}
                {...card}
                onFocus={(focus) => setFocusedIndex(focus ? idx : null)}
                isFocused={focusedIndex === null ? true : focusedIndex === idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
export { Work };
