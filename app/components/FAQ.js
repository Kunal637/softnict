'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What AI services do you offer?',
      answer: 'We offer AI integration, custom AI solutions, chatbot development, machine learning models, predictive analytics, natural language processing, and AI consulting services.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple integrations take 2-4 weeks, while custom AI solutions typically require 6-12 weeks. We\'ll provide a detailed timeline during consultation.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide comprehensive support and offer extended maintenance packages for ongoing assistance, updates, and improvements.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating AI capabilities into existing applications and systems. We work with various tech stacks and platforms.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work with clients across e-commerce, finance, healthcare, education, and more. Our AI solutions are adaptable to any industry\'s specific needs.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form or use the chatbot to schedule a free consultation. We\'ll discuss your needs and provide a custom proposal.'
    }
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">Got questions? We've got answers</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
