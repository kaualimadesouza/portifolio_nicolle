import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:bottom-auto lg:top-10 lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2 z-50">
      <div className="bg-white/95 backdrop-blur-md border-t border-black/10 lg:border lg:rounded-full shadow-sm px-2 py-2 lg:px-1 lg:py-1">
        <div className="flex items-center justify-around lg:justify-start lg:gap-2">
          <a
            href="/"
            className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-0 px-4 py-2 lg:px-8 lg:py-3 rounded-xl lg:rounded-full font-medium text-xs lg:text-base tracking-wider transition-all duration-300 ${pathname === '/' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="lg:font-bold">Home</span>
          </a>
          <a
            href="/about"
            className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-0 px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-full font-medium text-xs lg:text-base tracking-wider transition-all duration-300 ${pathname === '/about' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>About</span>
          </a>
          <a
            href="/work"
            className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-full font-medium text-xs lg:text-base tracking-wider transition-all duration-300 ${pathname === '/work' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden lg:inline w-2 h-2 rounded-full bg-red-500"></span>
            <span>Work</span>
          </a>
          <a
            href="/contact"
            className={`relative flex flex-col lg:flex-row items-center gap-1 lg:gap-0 px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-full font-medium text-xs lg:text-base tracking-wider transition-all duration-300 ${pathname === '/contact' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <svg className="w-5 h-5 lg:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
export { Navigation };
