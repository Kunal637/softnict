'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 40" fill="none" className="h-7 sm:h-9 w-auto">
    <circle cx="11" cy="20" r="3.8" fill="#0EA5E9"/>
    <circle cx="22" cy="10" r="3" fill="#0EA5E9" opacity="0.9"/>
    <circle cx="22" cy="30" r="3" fill="#0EA5E9" opacity="0.9"/>
    <circle cx="33" cy="20" r="3.8" fill="#0EA5E9" opacity="0.75"/>
    <circle cx="22" cy="20" r="1.5" fill="#F97316" opacity="0.9"/>
    <line x1="11" y1="20" x2="22" y2="10" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.45"/>
    <line x1="11" y1="20" x2="22" y2="30" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.45"/>
    <line x1="22" y1="10" x2="33" y2="20" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.45"/>
    <line x1="22" y1="30" x2="33" y2="20" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.45"/>
    <line x1="22" y1="10" x2="22" y2="30" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.2"/>
    <line x1="11" y1="20" x2="33" y2="20" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.2"/>
    <text x="46" y="27" fontFamily="'DM Sans', system-ui, sans-serif" fontSize="17" fontWeight="700" letterSpacing="2.5" className="fill-current" style={{ color: 'var(--text-primary)' }}>SOFTNICT</text>
  </svg>
);

function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  if (!mounted) return <div className="theme-toggle opacity-0" />;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span
        className="theme-toggle-knob"
        style={{ transform: theme === 'dark' ? 'translateX(0)' : 'translateX(24px)' }}
      >
        {theme === 'dark' ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        )}
      </span>
    </button>
  );
}

export default function Navbar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-14 sm:h-16 gap-4 sm:gap-8">
          <a href="#home" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex list-none gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg block"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button onClick={onOpenModal} className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5">
              Get Started
            </button>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 transition-all duration-300 origin-center" style={{ background: 'var(--text-primary)', transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span className="w-5 h-0.5 transition-all duration-300" style={{ background: 'var(--text-primary)', opacity: isMobileMenuOpen ? 0 : 1, transform: isMobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)' }} />
              <span className="w-5 h-0.5 transition-all duration-300 origin-center" style={{ background: 'var(--text-primary)', transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-slide-in" style={{ borderTop: '1px solid var(--border)' }}>
            <ul className="flex flex-col gap-1 list-none mb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4">
              <button onClick={() => { onOpenModal(); handleNavClick(); }} className="btn-primary w-full justify-center text-sm py-3">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
