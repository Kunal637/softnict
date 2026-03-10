export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: 'The AI chatbot they built transformed our customer service. Response times dropped by 80% and customer satisfaction is at an all-time high.',
      author: 'John Smith',
      role: 'CEO, TechCorp',
      avatar: 'J',
    },
    {
      rating: 5,
      text: 'Professional, knowledgeable, and delivered exactly what we needed. The predictive analytics system has been a game-changer for our business.',
      author: 'Sarah Johnson',
      role: 'CTO, DataFlow Inc',
      avatar: 'S',
    },
    {
      rating: 5,
      text: 'Outstanding work on our document processing system. They understood our needs perfectly and delivered ahead of schedule.',
      author: 'Michael Chen',
      role: 'Director, FinanceHub',
      avatar: 'M',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="heading-md text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-lg mb-12 md:mb-16 dark-mode:text-gray-300 text-gray-300">
          Don't just take our word for it
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass flex flex-col group hover:shadow-2xl hover:scale-105 transition-all duration-300 dark-mode:hover:shadow-cyan-400/30"
            >
              {/* Stars */}
              <div className="text-2xl mb-4">
                {'⭐'.repeat(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="italic leading-relaxed mb-6 flex-grow dark-mode:text-gray-200 text-gray-300">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 dark-mode:border-white/10 border-blue-400/20 border-t">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold dark-mode:text-white text-gray-100">{testimonial.author}</h4>
                  <p className="text-sm dark-mode:text-gray-400 text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
