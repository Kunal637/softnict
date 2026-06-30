'use client';

export default function CTA({ onOpenModal }) {
  return (
    <section className="py-16 sm:py-24 md:py-28 relative">
      <div className="container-custom">
        <div
          className="relative rounded-2xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
          style={{
            border: '1px solid rgba(14,165,233,0.18)',
            background: 'linear-gradient(135deg, rgba(14,165,233,0.07) 0%, var(--surface) 50%, rgba(249,115,22,0.04) 100%)',
          }}
        >
          <div className="absolute pointer-events-none" style={{ top: -60, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(14,165,233,0.12)', filter: 'blur(70px)' }} />
          <div className="absolute pointer-events-none" style={{ bottom: -60, left: -60, width: 180, height: 180, borderRadius: '50%', background: 'rgba(249,115,22,0.08)', filter: 'blur(70px)' }} />

          <div className="relative z-10">
            <p className="section-label justify-center mb-4">
              <span className="rule-accent" />
              Let's build together
              <span className="rule-accent" />
            </p>

            <h2 className="heading-md mb-5">
              Ready to make your business<br />
              <span className="text-gradient-warm">AI-native?</span>
            </h2>

            <p className="max-w-lg mx-auto mb-8 leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
              Whether you have a clear spec or just a problem worth solving —
              book a free consultation and we'll figure out the path together.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button onClick={onOpenModal} className="btn-primary text-sm px-8 py-3.5 sm:py-4">
                Book free consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <a href="mailto:info@softnict.com" className="btn-secondary text-sm px-8 py-3.5 sm:py-4">Email us directly</a>
            </div>

            <p className="text-xs mt-6" style={{ color: 'var(--text-faint)' }}>Response within 24 hours. No commitment required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
