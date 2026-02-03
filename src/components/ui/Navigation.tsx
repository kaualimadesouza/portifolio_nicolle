import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const getLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = "px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200";

    if (isActive) {
      return `${baseClasses} bg-white dark:bg-zinc-800 text-black dark:text-white shadow-sm`;
    }
    return `${baseClasses} text-gray-400 hover:text-gray-600 dark:hover:text-gray-300`;
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#F5F5F5] dark:bg-zinc-900 rounded-full shadow-lg px-2 py-2 transition-colors duration-300">
        <div className="flex items-center gap-1">
          <a href="/" className={getLinkClasses('/')}>
            Home
          </a>
          <a href="/about" className={getLinkClasses('/about')}>
            About
          </a>
          <a href="/work" className={`${getLinkClasses('/work')} flex items-center gap-2`}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Work
          </a>
          <a href="/contact" className={getLinkClasses('/contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
export { Navigation };
