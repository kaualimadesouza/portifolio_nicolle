import { Navigation } from '../components/ui';
import WorkCard from '../components/ui/WorkCard';
import { useState } from 'react';

function Work() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "DotOS",
      subtitle: "A context-aware OS for a more personal computer",
      description: "DotOS is a next-generation operating system designed to adapt to your workflow and context, making your computer more personal and productive.",
      image: "https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp",
      icon: "https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp",
      link: "/work/dotos",
    },
    {
      title: "DotOS",
      subtitle: "A context-aware OS for a more personal computer",
      description: "DotOS is a next-generation operating system designed to adapt to your workflow and context, making your computer more personal and productive.",
      // image: "https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp",
      // icon: "https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp",
      link: "/work/dotos",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pb-24 lg:pt-[165px] lg:pb-32 px-4 md:px-8 lg:px-0">
        <div className="w-full lg:w-fit mx-0 px-0 lg:mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
