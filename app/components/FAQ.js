'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What AI services do you offer?',
      answer: 'We offer AI integration, custom AI solutions, chatbot development, machine learning models, predictive analytics, natural language processing, and AI consulting services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple integrations take 2-4 weeks, while custom AI solutions typically require 6-12 weeks. We\'ll provide a detailed timeline during consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide comprehensive support and offer extended maintenance packages for ongoing assistance, updates, and improvements.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating AI capabilities into existing applications and systems. We work with various tech stacks and platforms.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with clients across e-commerce, finance, healthcare, education, and more. Our AI solutions are adaptable to any industry\'s specific needs.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form or use the chatbot to schedule a free consultation. We\'ll discuss your needs and provide a custom proposal.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="heading-md text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-lg mb-12 md:mb-16 dark-mode:text-gray-300 text-gray-300">
          Got questions? We've got answers
        </p>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-glass overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-white/5 transition-colors duration-300 dark-mode:hover:bg-white/5"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-lg dark-mode:text-white text-gray-100">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl transition-transform duration-300 flex-shrink-0 ml-4 dark-mode:text-cyan-400 text-blue-300 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 py-4 border-t animate-slide-in dark-mode:border-white/10 dark-mode:bg-white/5 border-blue-400/20 bg-blue-500/5">
                  <p className="leading-relaxed dark-mode:text-gray-300 text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
