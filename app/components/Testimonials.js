export default function Testimonials() {
  const testimonials = [
    { text: 'The AI chatbot they built transformed our customer service. Response times dropped by 80% and customer satisfaction is at an all-time high. They understood the brief from day one.', author: 'John Smith', role: 'CEO, TechCorp', initials: 'JS', metric: '80% faster response' },
    { text: 'Professional, sharp, and delivered exactly what we needed. The predictive analytics platform has genuinely changed how we make inventory and pricing decisions.', author: 'Sarah Johnson', role: 'CTO, DataFlow Inc', initials: 'SJ', metric: '95% forecast accuracy' },
    { text: 'Outstanding execution. They understood our compliance requirements perfectly and delivered a week ahead of schedule. Rare to find that combination.', author: 'Michael Chen', role: 'Director, FinanceHub', initials: 'MC', metric: '10k+ docs/day processed' },
  ];

  const Stars = () => (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F97316"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-28 relative">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <p className="section-label justify-center">
            <span className="rule-accent" />
            Client stories
            <span className="rule-accent" />
          </p>
          <h2 className="heading-md mb-4">Trusted by teams who<br />build for the long run</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)' }} />

              <Stars />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t.metric}
              </div>

              <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: 'var(--text-muted)' }}>"{t.text}"</p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid var(--border-soft)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: 'var(--accent-grad)' }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
