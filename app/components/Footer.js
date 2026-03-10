'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 dark-mode:bg-black/40 dark-mode:border-white/10 bg-gray-900/40 border-blue-400/20">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Softnict Logo" 
                width={180} 
                height={220}
                className="w-32 h-auto md:w-40 lg:w-48"
              />
            </div>
            <p className="font-semibold dark-mode:text-cyan-400 text-blue-300">Data-Driven. AI-Powered.</p>
            <p className="text-sm leading-relaxed dark-mode:text-gray-300 text-gray-300">
              Making businesses smarter, faster, and future-ready.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg dark-mode:text-white text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="transition-colors duration-300 dark-mode:text-gray-300 dark-mode:hover:text-cyan-400 text-gray-300 hover:text-blue-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="transition-colors duration-300 dark-mode:text-gray-300 dark-mode:hover:text-cyan-400 text-gray-300 hover:text-blue-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="transition-colors duration-300 dark-mode:text-gray-300 dark-mode:hover:text-cyan-400 text-gray-300 hover:text-blue-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="transition-colors duration-300 dark-mode:text-gray-300 dark-mode:hover:text-cyan-400 text-gray-300 hover:text-blue-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg dark-mode:text-white text-gray-100">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm dark-mode:text-gray-300 text-gray-300">
                Email:{' '}
                <a 
                  href="mailto:info@softnict.com" 
                  className="transition-colors duration-300 dark-mode:text-cyan-400 dark-mode:hover:text-cyan-300 text-blue-300 hover:text-blue-200"
                >
                  info@softnict.com
                </a>
              </p>
              <p className="text-sm dark-mode:text-gray-300 text-gray-300">
                Phone:{' '}
                <a 
                  href="tel:+923312429397" 
                  className="transition-colors duration-300 dark-mode:text-cyan-400 dark-mode:hover:text-cyan-300 text-blue-300 hover:text-blue-200"
                >
                  +92 3331 2429397
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-lg dark-mode:text-white text-gray-100">Follow Us</h4>
            
                <div className="flex gap-2 flex-wrap items-center justify-center md:justify-start">
              
              <a
                href="https://www.linkedin.com/company/softnict/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group h-8 w-8"
                title="LinkedIn"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Softnict/61586411626715/?mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group h-8 w-8"
                title="Facebook"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-8 text-center dark-mode:border-white/10 border-blue-400/20">
          <p className="text-sm dark-mode:text-gray-400 text-gray-400">
            &copy; 2026 Softnict. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
