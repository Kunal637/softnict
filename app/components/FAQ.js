'use client';
import { useState } from 'react';

export default function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    { q: 'What AI services do you offer?', a: "We cover the full AI delivery stack: LLM integration, custom ML model development, chatbots & autonomous agents, computer vision, NLP pipelines, data engineering, and strategic consulting. If it involves intelligence in software, we do it." },
    { q: 'How long does a typical project take?', a: "Integrations and chatbot builds: 2–4 weeks. Custom ML systems and data platforms: 6–12 weeks. We scope every project before a contract is signed — you always know the timeline upfront." },
    { q: 'Do you provide ongoing support after launch?', a: "Yes. All projects include a 30-day post-launch support window. We also offer monthly maintenance retainers covering model retraining, performance monitoring, and feature iterations." },
    { q: 'Can you work with our existing tech stack?', a: "Almost certainly. We've integrated into AWS, GCP, Azure, and every major framework — Node, Python, .NET, Laravel. Tell us what you're running and we'll fit around it." },
    { q: 'What industries do you work in?', a: "E-commerce, fintech, healthcare, logistics, SaaS, legal, and education. Our solutions are domain-agnostic — what matters is your data and your outcome, not your industry label." },
    { q: 'How do we get started?', a: "Book a free 30-minute consultation via the form on this page. We'll ask the right questions and come back with a clear proposal — scope, timeline, and cost — within 48 hours." },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-28 relative">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <p className="section-label justify-center">
            <span className="rule-accent" />
            FAQ
            <span className="rule-accent" />
          </p>
          <h2 className="heading-md mb-3">Questions worth asking</h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>Honest answers to all of them.</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: active === i ? 'rgba(14,165,233,0.05)' : 'var(--card-bg)',
                border: `1px solid ${active === i ? 'rgba(14,165,233,0.25)' : 'var(--border)'}`,
              }}
            >
              <button
                className="w-full px-5 sm:px-6 py-4 flex justify-between items-center text-left gap-3"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-light transition-all duration-300"
                  style={{
                    background: active === i ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${active === i ? 'rgba(14,165,233,0.4)' : 'var(--border-soft)'}`,
                    color: active === i ? '#0EA5E9' : 'var(--text-muted)',
                    transform: active === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              {active === i && (
                <div className="px-5 sm:px-6 pb-5 animate-slide-in">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
