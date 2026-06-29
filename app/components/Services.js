export default function Services() {
  const services = [
    {
      title: 'AI Integration',
      description: 'Embed AI capabilities into your existing stack seamlessly. From LLM APIs to custom model deployment — we make intelligent features a first-class part of your product.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
        </svg>
      ),
      tag: 'Most Popular',
    },
    {
      title: 'Custom ML Models',
      description: 'Tailored machine learning systems built for your exact problem. Predictive analytics, classification, NLP, computer vision — trained on your data, optimised for your goals.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      tag: 'Core Service',
    },
    {
      title: 'Intelligent Automation',
      description: 'Replace manual workflows with AI-driven processes. Document extraction, data pipelines, decision automation — deploy systems that scale without adding headcount.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      tag: 'High Impact',
    },
    {
      title: 'Data Engineering',
      description: 'Clean, structured, analysis-ready data pipelines. We design the infrastructure that turns raw data into the fuel your AI systems need to perform reliably.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      tag: 'Foundation',
    },
    {
      title: 'AI Chatbots & Agents',
      description: 'Conversational interfaces and autonomous agents that handle real work. Customer support, internal tooling, sales qualification — built to sound and behave on-brand.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      tag: 'New',
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Not sure where to start? We map your business against AI opportunities, identify highest-ROI interventions, and build you a roadmap grounded in what actually works.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      tag: 'Advisory',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-5 h-px bg-violet-400"></span>
            What we do
            <span className="w-5 h-px bg-violet-400"></span>
          </p>
          <h2 className="heading-md mb-4">Services built for<br />serious growth</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every engagement is outcome-focused. We don't sell hours — we solve problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div className="relative">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-5 group-hover:bg-violet-600/25 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Tag */}
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-3">
                  {service.tag}
                </span>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-200 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
