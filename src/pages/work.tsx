import { Navigation } from '../components/ui';
import WorkCard from '../components/ui/WorkCard';
import { useState } from 'react';
import AosOlhosDoCoracaoIMG from '../assets/aos_olhos_do_coração.jpg';
import ContosEmPretoEBrancoIMG from '../assets/contos_em_preto_e_branco.png';
import FuturoDoPreterito from '../assets/14_futuro_preterito.png';
import MachadoIMG from '../assets/machado.jpeg';
import ICIMG from '../assets/ic.jpeg';
import PlaceholderIMG from '../assets/foto_instagram.jpg'; // TODO: substituir pelas imagens corretas
import { useLanguage } from '../contexts/LanguageContext';

function Work() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const cards = [
    {
      title: t('project.aos_olhos'),
      subtitle: t('work.aos_olhos.subtitle'),
      description: t('work.aos_olhos.description'),
      image: AosOlhosDoCoracaoIMG,
      link: "/work/aos-olhos-do-coracao",
      imageConfig: {
        size: 'full' as const,
        fit: 'contain' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl bg-white p-2.5',
      },
    },
    {
      title: t('project.contos'),
      subtitle: t('work.contos.subtitle'),
      description: t('work.contos.description'),
      image: ContosEmPretoEBrancoIMG,
      link: "/work/contos-em-preto-e-branco",
      imageConfig: {
        size: 'full' as const,
        fit: 'contain' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl bg-white p-2.5',
      },
    },
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
        className: 'rounded-2xl bg-white p-2.5',
      },
    },
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
        className: 'rounded-2xl bg-white p-2.5',
      },
    },
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
    {
      title: t('project.diagramacao'),
      subtitle: t('work.diagramacao.subtitle'),
      description: t('work.diagramacao.description'),
      image: PlaceholderIMG, // TODO: substituir pela imagem correta
      link: "/work/diagramacao-apostilas",
      imageConfig: {
        size: 'full' as const,
        fit: 'cover' as const,
        rounded: 'xl' as const,
        shadow: 'none' as const,
        className: 'rounded-2xl',
      },
    },
    {
      title: t('project.italiano'),
      subtitle: t('work.italiano.subtitle'),
      description: t('work.italiano.description'),
      image: PlaceholderIMG, // TODO: substituir pela imagem correta
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
      title: t('project.villare'),
      subtitle: t('work.villare.subtitle'),
      description: t('work.villare.description'),
      image: PlaceholderIMG, // TODO: substituir pela imagem correta
      link: "/work/amostra-minicontos-villare",
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
