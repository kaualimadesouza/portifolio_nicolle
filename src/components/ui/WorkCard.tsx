import React from 'react';

interface WorkCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  icon?: string;
  link?: string;
  children?: React.ReactNode;
}


function WorkCard({
  title,
  subtitle,
  description,
  image,
  icon,
  link,
  children,
}: WorkCardProps) {
  return (
    <div
      className="relative rounded-2xl shadow-lg overflow-hidden group flex flex-col w-[624px] h-[624px] min-w-[624px] min-h-[624px] max-w-[624px] max-h-[624px]"
      style={{ width: 624, height: 624, background: '#F7F7F9' }}
    >
      {/* Left: Main Info */}
      <div className="flex-1 p-8 flex flex-col justify-center z-10">
        <h1 className="text-3xl font-bold mb-2 text-black">{title}</h1>
        <h2 className="text-lg text-gray-700 mb-4 font-normal">{subtitle}</h2>
        {description && (
          <p className="text-gray-500 mb-4 text-base max-w-xl">{description}</p>
        )}
        {children}
      </div>
      {/* Right: Mockup/Preview */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-6 relative min-h-[260px]">
        <div className="w-full h-full flex items-center justify-center">
          {image ? (
            <img src={image} alt={title + ' preview'} className="rounded-xl max-h-60 object-contain shadow-md" />
          ) : icon ? (
            <img src={icon} alt={title + ' icon'} className="w-16 h-16 rounded-lg object-contain" />
          ) : null}
        </div>
      </div>
      {/* Link Arrow */}
      {link && (
        <a href={link} className="absolute right-6 bottom-6 bg-black rounded-full p-2 hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/arrow-angle.svg" alt="Go to project" className="w-6 h-6 invert" />
        </a>
      )}
    </div>
  );
}

export default WorkCard;
export { WorkCard };
