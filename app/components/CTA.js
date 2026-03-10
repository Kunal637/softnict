'use client';

export default function CTA({ onOpenModal }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="card-glass max-w-3xl mx-auto text-center p-8 md:p-12 hover:shadow-2xl transition-all duration-300 dark-mode:hover:shadow-cyan-400/30">
          <h2 className="heading-md mb-4">Ready to Become Future-Ready?</h2>
          <p className="text-lg mb-8 leading-relaxed dark-mode:text-gray-300 text-gray-300">
            Let's discuss how Softnict can transform your business with intelligent AI solutions
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onOpenModal();
            }}
            className="btn-primary"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
