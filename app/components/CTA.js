'use client';

export default function CTA({ onOpenModal }) {
  return (
    <section className="py-24 relative">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-[#0D1525] to-emerald-500/5 p-12 md:p-16 text-center">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="section-label justify-center mb-4">
              <span className="w-5 h-px bg-violet-400"></span>
              Let's build together
              <span className="w-5 h-px bg-violet-400"></span>
            </p>

            <h2 className="heading-md mb-5">
              Ready to make your business<br />
              <span className="text-gradient">AI-native?</span>
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Whether you have a clear spec or just a problem worth solving — 
              book a free consultation and we'll figure out the path together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onOpenModal} className="btn-primary text-base px-8 py-3.5">
                Book free consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a href="mailto:info@softnict.com" className="btn-secondary text-base px-8 py-3.5">
                Email us directly
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-6">Response within 24 hours. No commitment required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
