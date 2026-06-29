'use client';

import Image from 'next/image';

export default function Footer() {
  const links = {
    Services: ['AI Integration', 'Custom ML Models', 'Intelligent Automation', 'AI Consulting'],
    Company: ['About', 'Portfolio', 'Testimonials', 'FAQ'],
    Contact: ['info@softnict.com', '+92 331 2429397'],
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#030810]">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/logo.png"
              alt="Softnict"
              width={120}
              height={46}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              AI-powered software agency building intelligent products for ambitious businesses.
            </p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/company/softnict/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Softnict/61586411626715/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="space-y-3">
              <h4 className="text-sm font-semibold text-white">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    {heading === 'Contact' ? (
                      <a
                        href={item.includes('@') ? `mailto:${item}` : `tel:${item.replace(/\s/g, '')}`}
                        className="text-sm text-gray-500 hover:text-violet-400 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ) : (
                      <a
                        href={`#${heading === 'Company' ? item.toLowerCase() : 'services'}`}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 Softnict. All rights reserved.</p>
          <p className="text-xs text-gray-600">Data-Driven. AI-Powered. Future-Ready.</p>
        </div>
      </div>
    </footer>
  );
}
