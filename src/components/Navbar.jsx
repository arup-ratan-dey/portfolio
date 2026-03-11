import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'CP Stats', href: '#stats' },
    { name: 'Contests', href: '#contests' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for animation to complete
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold group">
          <span className="relative inline-block">
            <span className="text-cyan-400 text-2xl font-extrabold tracking-wider group-hover:text-cyan-300 transition-colors duration-300">
              Arup
            </span>
            <span className="text-white text-2xl font-extrabold tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
              Ratan
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Fixed Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block py-3 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;