'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar({ onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Clients' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#050B18]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 gap-8">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Softnict"
              width={130}
              height={50}
              priority
              className="h-8 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex list-none gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="hidden sm:inline-flex btn-primary py-2 px-5 text-sm"
            >
              Get Started
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.06] bg-[#050B18]/95 backdrop-blur-xl py-4 animate-slide-in">
            <ul className="flex flex-col gap-1 list-none mb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="px-4">
              <button onClick={() => { onOpenModal(); handleNavClick(); }} className="btn-primary w-full justify-center text-sm py-2.5">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
