import { Navigation } from '../components/ui';
import WorkCard from '../components/ui/WorkCard';
import { useState } from 'react';
import AosOlhosDoCoracaoIMG from '../assets/aos_olhos_do_coração.jpg';
import ContosEmPretoEBrancoIMG from '../assets/contos_em_preto_e_branco.png';

function Work() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Aos Olhos do Coração",
      subtitle: "Um livro de poesias e reflexões sobre amor e vida",
      description: "Uma obra literária que explora as profundezas do coração humano através de poesias e reflexões.",
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
      title: "Contos em Preto e Branco",
      subtitle: "Contos que exploram os detalhes sutis da vida",
      description: "Uma coleção de contos que costura com delicadeza memórias, partidas e retornos.",
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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      {/* Main Content */}
      <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
