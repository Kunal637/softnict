export default function Services() {
  const services = [
    {
      title: 'AI Integration',
      description: 'Embed AI capabilities into your existing stack without a rewrite. LLM APIs, vector search, custom model deployment — intelligent features that feel native to your product.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
      badge: 'Most Popular', badgeColor: '#0EA5E9',
    },
    {
      title: 'Custom ML Models',
      description: 'Predictive analytics, classification, NLP, computer vision — machine learning built on your data, tuned to your domain, validated against your real metrics.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      badge: 'Core Service', badgeColor: '#10B981',
    },
    {
      title: 'Intelligent Automation',
      description: 'Replace manual workflows with AI-driven processes. Document extraction, decision pipelines, approval routing — systems that scale without scaling your headcount.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      badge: 'High Impact', badgeColor: '#F97316',
    },
    {
      title: 'Data Engineering',
      description: 'Clean, structured, analysis-ready pipelines. We design the data infrastructure that turns raw logs and records into the fuel your AI systems actually run on.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
      badge: 'Foundation', badgeColor: '#8B9EC4',
    },
    {
      title: 'AI Chatbots & Agents',
      description: 'Conversational interfaces and autonomous agents that handle real work — customer support, sales qualification, internal tooling — trained to sound exactly like your brand.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
      badge: 'New', badgeColor: '#0EA5E9',
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Not sure where to start? We audit your business against AI opportunities, prioritise by ROI, and give you a concrete roadmap grounded in what actually ships.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      badge: 'Advisory', badgeColor: '#8B9EC4',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 md:py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none hidden sm:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(14,165,233,0.25), transparent)' }} />

      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <p className="section-label justify-center">
            <span className="rule-accent" />
            What we do
            <span className="rule-accent" />
          </p>
          <h2 className="heading-md mb-3 sm:mb-4">Services built for<br />serious growth</h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base px-4" style={{ color: 'var(--text-muted)' }}>
            Every engagement is outcome-focused. We don't sell hours — we solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <div key={i} className="card-glass group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.6), transparent)' }} />

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', color: '#0EA5E9' }}>
                {s.icon}
              </div>

              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider rounded-full mb-3" style={{ background: `${s.badgeColor}15`, border: `1px solid ${s.badgeColor}30`, color: s.badgeColor }}>
                {s.badge.toUpperCase()}
              </span>

              <h3 className="text-base font-semibold mb-2.5 sm:mb-3 group-hover:text-sky-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
