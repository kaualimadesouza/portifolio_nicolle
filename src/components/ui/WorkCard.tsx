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
  /** Cor de fundo do container da imagem */
  bgColor?: string;
}

interface WorkCardProps {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  icon?: string;
  link?: string;
  external?: boolean;
  onFocus?: (focus: boolean) => void;
  isFocused?: boolean;
  /** Configurações de customização da imagem */
  imageConfig?: ImageConfig;
}


function WorkCard({
  title,
  subtitle,
  image,
  icon,
  link,
  external,
  onFocus,
  isFocused,
  imageConfig = {},
}: WorkCardProps) {
  const { fit = 'cover', bgColor, className: customClassName = '' } = imageConfig;

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl shadow-lg group flex flex-col w-full aspect-square bg-[#F7F7F9] dark:bg-zinc-900 transition-all duration-300 ${isFocused === false ? 'opacity-10 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Top: Title + Button */}
      <div className="flex justify-between px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="flex-1 min-w-0 pr-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-black dark:text-white truncate">{title}</h1>
          <h2 className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400 mb-2 sm:mb-4 font-normal line-clamp-2">{subtitle}</h2>
        </div>

        {external ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        ) : (
          <Link
            to={link || '/work'}
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
        )}
      </div>

      <div className='mx-4 sm:mx-6 md:mx-8 mt-2 h-px bg-gray-300 dark:bg-zinc-700'></div>

      {/* Bottom: Image area - fills remaining space, clipped at card edges */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-5 md:p-6">
          {image ? (
            fit === 'cover' ? (
              <div className="w-full h-full rounded-2xl overflow-hidden" style={bgColor ? { backgroundColor: bgColor } : undefined}>
                <img
                  src={image}
                  alt={title + ' preview'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={image}
                alt={title + ' preview'}
                className={`max-w-full max-h-full rounded-2xl object-contain ${customClassName}`}
                loading="lazy"
              />
            )
          ) : icon ? (
            <img src={icon} alt={title + ' icon'} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-contain" loading="lazy" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
export { WorkCard };
export type { ImageConfig, WorkCardProps };
