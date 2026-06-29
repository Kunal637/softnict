export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: 'The AI chatbot they built transformed our customer service. Response times dropped by 80% and customer satisfaction is at an all-time high. They understood the brief from day one.',
      author: 'John Smith',
      role: 'CEO, TechCorp',
      avatar: 'JS',
    },
    {
      rating: 5,
      text: 'Professional, sharp, and delivered exactly what we needed. The predictive analytics platform has genuinely changed how we make inventory and pricing decisions.',
      author: 'Sarah Johnson',
      role: 'CTO, DataFlow Inc',
      avatar: 'SJ',
    },
    {
      rating: 5,
      text: "Outstanding execution on our document processing system. They understood our compliance requirements perfectly and delivered a week ahead of schedule. Rare to find that combination.",
      author: 'Michael Chen',
      role: 'Director, FinanceHub',
      avatar: 'MC',
    },
  ];

  const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-5 h-px bg-violet-400"></span>
            Client stories
            <span className="w-5 h-px bg-violet-400"></span>
          </p>
          <h2 className="heading-md mb-4">Trusted by teams who<br />build for the long run</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass flex flex-col group">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-grow mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
