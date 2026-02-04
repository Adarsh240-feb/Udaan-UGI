import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/teams', label: 'Teams' },
  { path: '/venues', label: 'Venues' },
  { path: '/tournament', label: 'Tournament' },
  { path: '/sports', label: 'Sports' },
  { path: '/rules', label: 'Rules' },
  { path: '/athletics', label: 'Athletics' },
  { path: '/awards', label: 'Awards' },
  { path: '/committee', label: 'Committee' },
  { path: '/registration', label: 'Registration' },
  { path: '/ceremony', label: 'Ceremony' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    } border-b border-blue-100 dark:border-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/udaan-logo-optimized.png" 
              alt="UDAAN Logo" 
              loading="eager"
              className="w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <span className="font-bold text-lg text-blue-900 dark:text-white">UDAAN</span>
              <p className="text-[10px] text-muted-foreground leading-none">UGI SPORTS FEST</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 8).map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm rounded-md transition-all duration-200 hover:scale-105 ${
                  location.pathname === link.path
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 font-medium'
                    : 'text-blue-700 dark:text-blue-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-900/20'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-blue-700 dark:text-blue-300 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-all duration-200 flex items-center gap-1">
                More <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-44 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-blue-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                {navLinks.slice(8).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-sm transition-all duration-200 first:rounded-t-xl last:rounded-b-xl ${
                      location.pathname === link.path
                        ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 font-medium'
                        : 'text-blue-700 dark:text-blue-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-900/20 hover:pl-6'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-700" />
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-blue-900 dark:bg-white rounded-full transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-blue-900 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-blue-900 dark:bg-white rounded-full transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-blue-100 dark:border-gray-700 shadow-2xl transition-all duration-300 ease-out max-h-[calc(100vh-4rem)] overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 transform ${
                location.pathname === link.path
                  ? 'text-red-600 dark:text-red-400 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/20 scale-[1.02]'
                  : 'text-blue-700 dark:text-blue-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-900/20 hover:scale-[1.02]'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s ease ${index * 0.05}s`
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Footer */}
        <div className="px-4 py-4 border-t border-blue-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-red-50 dark:from-gray-800 dark:to-gray-800">
          <p className="text-center text-sm text-muted-foreground">
            🔥 UDAAN Sports Fest 2026
          </p>
        </div>
      </div>
    </nav>
  );
}
