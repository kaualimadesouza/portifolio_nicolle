import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

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
              Home
            </a>
            <a href="/about" className={getLinkClasses('/about')}>
              Sobre
            </a>
            <a href="/work" className={`${getLinkClasses('/work')} flex items-center gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Trabalhos
            </a>
            <a href="/contact" className={getLinkClasses('/contact')}>
              Contato
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
              <span className="text-[10px]">Home</span>
            </a>
            <a href="/about" className={`${getLinkClasses('/about')} flex flex-col items-center gap-1`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-[10px]">Sobre</span>
            </a>
            <a href="/work" className={`${getLinkClasses('/work')} flex flex-col items-center gap-1 relative`}>
              <span className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-[10px]">Trabalhos</span>
            </a>
            <a href="/contact" className={`${getLinkClasses('/contact')} flex flex-col items-center gap-1`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px]">Contato</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
export { Navigation };
