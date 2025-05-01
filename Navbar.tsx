import  { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Code Editor', path: '/code-editor' },
    { name: 'Estimator', path: '/estimator' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-20">
            <Code size={28} className="text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
              Infinoxa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium" 
                    : "text-white/70 hover:text-primary transition-colors duration-300"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary ml-2">
              Get Started
            </Link>
          </nav>

          <button 
            className="md:hidden text-white z-20" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-dark/95 backdrop-blur-md z-10 md:hidden overflow-auto"
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary font-medium text-xl" 
                    : "text-white hover:text-primary transition-colors duration-300 text-xl"
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary w-full max-w-xs text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
 