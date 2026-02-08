import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-200";

    if (isActive) {
      return `${baseClasses} bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm`;
    }
    return `${baseClasses} text-gray-400 hover:text-gray-600 dark:hover:text-gray-300`;
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-[#F5F5F5] dark:bg-zinc-900 rounded-full shadow-lg px-2 py-2 transition-colors duration-300">
          <div className="flex items-center gap-1">
            <a href="/" className={getLinkClasses('/')}>
              {t('nav.home')}
            </a>
            <a href="/about" className={getLinkClasses('/about')}>
              {t('nav.about')}
            </a>
            <a href="/work" className={`${getLinkClasses('/work')} flex items-center gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              {t('nav.work')}
            </a>
            <a href="/contact" className={getLinkClasses('/contact')}>
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
        <div className="bg-[#F5F5F5]/95 dark:bg-zinc-900/95 backdrop-blur-lg rounded-2xl shadow-lg px-2 py-2 transition-colors duration-300 border border-gray-200/50 dark:border-zinc-700/50">
          <div className="flex items-center justify-around">
            <a href="/" className={`${getLinkClasses('/')} flex flex-col items-center gap-1`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[10px]">{t('nav.home')}</span>
            </a>
            <a href="/about" className={`${getLinkClasses('/about')} flex flex-col items-center gap-1`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px]">{t('nav.about')}</span>
            </a>
            <a href="/work" className={`${getLinkClasses('/work')} flex flex-col items-center gap-1 relative`}>
              <span className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-[10px]">{t('nav.work')}</span>
            </a>
            <a href="/contact" className={`${getLinkClasses('/contact')} flex flex-col items-center gap-1`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px]">{t('nav.contact')}</span>
            </a>
            
            {/* Mobile mini toggles */}
            <div className="flex items-center gap-1 border-l border-gray-300 dark:border-zinc-600 pl-2 ml-1">
              <button
                onClick={toggleLanguage}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                aria-label="Toggle language"
              >
                {language === 'pt' ? 'EN' : 'PT'}
              </button>
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
export { Navigation };
