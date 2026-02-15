'use client'

export default function CTA({ onOpenModal }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Become Future-Ready?</h2>
        <p>Let's discuss how Softech can transform your business with intelligent AI solutions</p>
        <a 
          href="#" 
          className="cta-button"
          onClick={(e) => { e.preventDefault(); onOpenModal(); }}
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  )
}
