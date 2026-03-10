'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar({ onOpenModal }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-mode');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/60 dark-mode:bg-black/60 backdrop-blur-xl border-b border-white/10 dark-mode:border-white/10 shadow-lg dark-mode:shadow-lg' 
        : 'bg-black/40 dark-mode:bg-black/40 backdrop-blur-xl border-b border-white/10 dark-mode:border-white/10'
    } ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center gap-4 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Softnict Logo" 
              width={214} 
              height={835}
              priority
              // className="w-auto h-auto"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex list-none gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-white font-medium text-base hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle - Hidden on mobile */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex flex-col gap-0.5 bg-none border-none cursor-pointer p-0.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 py-2 animate-slide-in">
            <ul className="flex flex-col gap-0 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-4 py-1.5 text-base text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 border-b border-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
