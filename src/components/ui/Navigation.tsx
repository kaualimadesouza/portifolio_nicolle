
import React from 'react';

function Navigation() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md border border-black/10 rounded-full shadow-sm px-1 py-1 relative">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className={`relative px-8 py-3 rounded-full font-medium text-base tracking-wider transition-all duration-300 hover:bg-gray-200 ${pathname === '/' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <div className="nav-text"><b>Home</b></div>
          </a>
          <a
            href="/about"
            className={`relative px-6 py-3 rounded-full font-medium text-base tracking-wider transition-all duration-300 ${pathname === '/about' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <div className="nav-text">About</div>
          </a>
          <a
            href="/work"
            className={`relative flex items-center gap-2 px-6 py-3 rounded-full font-medium text-base tracking-wider transition-all duration-300 ${pathname === '/work' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <div className="nav-text">Work</div>
          </a>
          <a
            href="/contact"
            className={`relative px-6 py-3 rounded-full font-medium text-base tracking-wider transition-all duration-300 ${pathname === '/contact' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
          >
            <div className="nav-text">Contact</div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
export { Navigation };
