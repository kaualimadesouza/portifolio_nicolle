
import { useState } from 'react';

interface WorkCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  icon?: string;
  link?: string;
  onFocus?: (focus: boolean) => void;
  isFocused?: boolean;
}

function WorkCard({
  title,
  subtitle,
  description,
  image,
  icon,
  link,
  onFocus,
  isFocused,
}: WorkCardProps) {
  return (
    <div
      className={`relative rounded-2xl shadow-lg overflow-hidden group flex flex-col w-full lg:w-2xl aspect-square bg-[#F7F7F9] mt-8 transition-opacity duration-300 ${isFocused === false ? 'opacity-10 pointer-events-none' : 'opacity-100'} `}
    >
      {/* Left: Main Info */}
      <div className="flex justify-between px-8 pt-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-black">{title}</h1>
          <h2 className="text-lg text-gray-700 mb-4 font-normal">{subtitle}</h2>
        </div>
        
        <a
          href={link || '/work/dotos'}
          className="inline-flex items-center justify-center rounded-full border border-black hover:bg-black transition-colors w-12 h-12 mt-2 shadow-md group"
          aria-label={`Ver projeto ${title}`}
          onMouseEnter={() => onFocus && onFocus(true)}
          onMouseLeave={() => onFocus && onFocus(false)}
        >
          <img
            src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg"
            alt="Ir para o projeto"
            className="w-6 h-6 opacity-100 transition-all duration-200 text-black hover:scale-110 hover:invert"
            loading="lazy"
          />
        </a>
      </div>

      <div className='mx-8 mt-2 h-px bg-gray-300'></div>

      {/* Right: Mockup/Preview */}
      <div className="flex-1 flex items-center justify-center pt  -6 relative min-h-65">
        <div className="w-full h-full flex items-center justify-center">
          {image ? (
            <img src={image} alt={title + ' preview'} className="rounded-xl max-h-60 object-contain shadow-md" />
          ) : icon ? (
            <img src={icon} alt={title + ' icon'} className="w-16 h-16 rounded-lg object-contain" />
          ) : null}
        </div>
      </div>

    </div>
  );
}

export default WorkCard;
export { WorkCard };
