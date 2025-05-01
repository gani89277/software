import  { Link } from 'react-router-dom';
import { ArrowUp, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="glass py-8 sm:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Code size={28} className="text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Infinoxa
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Transforming visions into digital reality with cutting-edge web solutions.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Linkedin', 'Github', 'Instagram'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <span className="text-white text-xs">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Process', path: '/process' },
                { name: 'Tech Stack', path: '/tech-stack' },
                { name: 'Code Editor', path: '/code-editor' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { name: 'Chat Support', path: '/chat-support' },
                { name: 'Schedule Call', path: '/schedule-call' },
                { name: 'Request Quote', path: '/request-quote' },
                { name: 'Project Estimator', path: '/estimator' },
                { name: 'Contact', path: '/contact' },
                { name: 'Admin Login', path: '/admin/login' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-dark-lighter text-white px-4 py-2 rounded-lg focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Infinoxa. All rights reserved. Built with jdoodle.ai.
          </p>
          <button 
            onClick={scrollToTop}
            className="glass p-3 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 