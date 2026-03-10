export default function Services() {
  const services = [
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing applications',
      icon: '🤖',
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI models and systems built for your specific needs',
      icon: '⚙️',
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on implementing AI in your business',
      icon: '💡',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="heading-md text-center mb-12 md:mb-16">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass group hover:shadow-2xl transition-all duration-300 dark-mode:hover:shadow-cyan-400/30 dark-mode:hover:scale-105 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 dark-mode:text-white dark-mode:group-hover:text-cyan-400 text-gray-100 group-hover:text-blue-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed dark-mode:text-gray-300 text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
