import { Link } from 'react-router-dom';

interface ImageConfig {
  /** Tamanho máximo da imagem: 'sm' | 'md' | 'lg' | 'xl' | 'full' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Object-fit da imagem */
  fit?: 'contain' | 'cover' | 'fill' | 'none';
  /** Posição da imagem no container */
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Sombra */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Classes customizadas adicionais */
  className?: string;
}

interface WorkCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  icon?: string;
  link?: string;
  onFocus?: (focus: boolean) => void;
  isFocused?: boolean;
  /** Configurações de customização da imagem */
  imageConfig?: ImageConfig;
}

const sizeClasses = {
  sm: 'max-h-32 sm:max-h-40 md:max-h-48',
  md: 'max-h-40 sm:max-h-52 md:max-h-60',
  lg: 'max-h-52 sm:max-h-64 md:max-h-72',
  xl: 'max-h-64 sm:max-h-80 md:max-h-96',
  full: 'max-h-full w-full',
};

const fitClasses = {
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  none: 'object-none',
};

const positionClasses = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
};

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg sm:rounded-xl',
  xl: 'rounded-xl sm:rounded-2xl',
  full: 'rounded-full',
};

const shadowClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

function WorkCard({
  title,
  subtitle,
  image,
  icon,
  link,
  onFocus,
  isFocused,
  imageConfig = {},
}: WorkCardProps) {
  const {
    size = 'md',
    fit = 'contain',
    position = 'center',
    rounded = 'lg',
    shadow = 'md',
    className: customClassName = '',
  } = imageConfig;

  const imageClasses = `
    ${sizeClasses[size]}
    ${fitClasses[fit]}
    ${positionClasses[position]}
    rounded-2xl
    ${shadowClasses[shadow]}
    ${customClassName}
  `.trim();

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group flex flex-col w-full aspect-4/3 sm:aspect-square bg-[#F7F7F9] dark:bg-zinc-900 transition-all duration-300 ${isFocused === false ? 'opacity-10 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Left: Main Info */}
      <div className="flex justify-between px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="flex-1 min-w-0 pr-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-black dark:text-white truncate">{title}</h1>
          <h2 className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400 mb-2 sm:mb-4 font-normal line-clamp-2">{subtitle}</h2>
        </div>

        <Link
          to={link || '/work/dotos'}
          className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-white hover:border-none hover:bg-white dark:hover:bg-white transition-colors w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mt-1 sm:mt-2 shadow-md group/btn shrink-0"
          aria-label={`Ver projeto ${title}`}
          onMouseEnter={() => onFocus && onFocus(true)}
          onMouseLeave={() => onFocus && onFocus(false)}
        >
          <img
            src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62ca186ae691b25b1768cbfe_arrow-angle.svg"
            alt="Ir para o projeto"
            className="w-5 h-5 sm:w-6 sm:h-6 opacity-100 transition-all duration-200 dark:invert dark:group-hover/btn:invert-0 group-hover/btn:scale-110"
            loading="lazy"
          />
        </Link>
      </div>

      <div className='mx-4 sm:mx-6 md:mx-8 mt-2 h-px bg-gray-300 dark:bg-zinc-700'></div>

      {/* Right: Mockup/Preview */}
      <div className="flex-1 flex items-center justify-center py-4 sm:py-6 relative min-h-40 sm:min-h-52 md:min-h-65">
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          {image ? (
            <div className="overflow-hidden rounded-2xl h-full flex items-center justify-center">
              <img src={image} alt={title + ' preview'} className={imageClasses} />
            </div>
          ) : icon ? (
            <img src={icon} alt={title + ' icon'} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-contain" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
export { WorkCard };
export type { ImageConfig, WorkCardProps };
