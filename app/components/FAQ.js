'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What AI services do you offer?',
      answer: 'We cover the full AI delivery stack: LLM integration, custom ML model development, AI chatbots & agents, computer vision, NLP pipelines, data engineering, and strategic consulting. If it involves intelligence in software, we do it.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Integrations and chatbot builds: 2–4 weeks. Custom ML systems and data platforms: 6–12 weeks. We scope every project before a contract is signed, so you always know the timeline upfront — no surprises.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes. All projects include a 30-day post-launch support window. We also offer structured maintenance retainers covering model retraining, performance monitoring, and feature iterations.',
    },
    {
      question: 'Can you work with our existing tech stack?',
      answer: "Almost certainly. We've integrated AI into every major cloud (AWS, GCP, Azure), common frameworks (Node, Python, .NET, Laravel), and CRMs, ERPs, and custom APIs. Tell us what you're running — we'll fit around it.",
    },
    {
      question: 'What industries do you work in?',
      answer: 'E-commerce, fintech, healthcare, logistics, SaaS, legal, and education. Our solutions are domain-agnostic — what matters is your data and your outcome, not your industry label.',
    },
    {
      question: 'How do we get started?',
      answer: "Book a free 30-minute consultation via the form on this page. We'll listen, ask the right questions, and come back with a clear proposal — scope, timeline, and cost — within 48 hours.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-5 h-px bg-violet-400"></span>
            FAQ
            <span className="w-5 h-px bg-violet-400"></span>
          </p>
          <h2 className="heading-md mb-4">Questions worth asking</h2>
          <p className="text-gray-400">And honest answers to all of them.</p>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                activeIndex === index
                  ? 'border-violet-500/40 bg-violet-600/5'
                  : 'border-white/[0.08] bg-white/[0.02] hover:border-white/[0.12]'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-violet-400 text-violet-400 bg-violet-400/10 rotate-45'
                    : 'border-white/20 text-gray-400'
                }`}>
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 animate-slide-in">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
