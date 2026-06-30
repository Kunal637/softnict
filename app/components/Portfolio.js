'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const projects = [
    {
      id: 1, title: 'AI Chatbot for E-commerce',
      description: 'Intelligent customer service bot handling 80% of inquiries without human intervention.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'OpenAI', 'Python'],
      details: 'Built with GPT-4 and custom fine-tuning on client product data. Integrates via REST API with Shopify and WooCommerce for real-time order tracking, returns, and recommendations. Serverless deploy, sub-200ms response times.',
      metrics: ['80% queries automated', '60% fewer tickets', '45% higher CSAT'],
    },
    {
      id: 2, title: 'Predictive Sales Analytics',
      description: 'ML forecasting system delivering 95% accuracy across all SKUs and sales channels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['TensorFlow', 'Data Science', 'BI'],
      details: 'End-to-end ML pipeline: gradient boosting + LSTM trained on 5 years of sales data, seasonal trends, and external market signals. Tableau dashboards for stakeholders. Retrained monthly on new data automatically.',
      metrics: ['95% forecast accuracy', '30% inventory savings', '$2M annual uplift'],
    },
    {
      id: 3, title: 'Document Intelligence Platform',
      description: 'Automated extraction and classification, processing 10,000+ documents per day.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'OCR', 'FastAPI'],
      details: 'Vision-language model pipeline extracting structured data from invoices, contracts, and regulatory forms. Handles PDF, scans, and photos. 98% extraction accuracy validated against human review. Processes 10k+ docs/day at scale.',
      metrics: ['98% extraction accuracy', '10,000+ docs/day', '90% time saved'],
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-16 sm:py-24 md:py-28 relative">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-16">
            <p className="section-label justify-center">
              <span className="rule-accent" />
              Case studies
              <span className="rule-accent" />
            </p>
            <h2 className="heading-md mb-4">Work that speaks for itself</h2>
            <p className="max-w-md mx-auto text-sm sm:text-base px-4" style={{ color: 'var(--text-muted)' }}>
              Real outcomes for real businesses. Tap any project for the full breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p) => (
              <div key={p.id} className="card-glass overflow-hidden cursor-pointer group p-0" onClick={() => setSelected(p)}>
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(to top, rgba(4,12,24,0.9) 0%, rgba(4,12,24,0.2) 100%)' }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(var(--accent-rgb),0.08)' }}>
                    <span className="text-white text-xs font-semibold flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(var(--accent-rgb),0.2)', border: '1px solid rgba(var(--accent-rgb),0.3)' }}>
                      View case study
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{p.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {p.metrics.slice(0, 2).map((m, i) => (
                      <span key={i} className="text-xs font-semibold" style={{ color: '#10B981' }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" style={{ background: 'var(--modal-overlay)', backdropFilter: 'blur(12px)' }} onClick={() => setSelected(null)}>
          <div className="rounded-t-2xl sm:rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[92vh] sm:max-h-[90vh] overflow-y-auto animate-fade-in-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }} onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 z-10" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-soft)', color: 'var(--text-muted)' }} onClick={() => setSelected(null)}>✕</button>

            <div className="relative h-44 sm:h-52 mb-5 sm:mb-6 rounded-xl overflow-hidden">
              <Image src={selected.image} alt={selected.title} width={800} height={400} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {selected.tags.map((t, i) => <span key={i} className="tag-pill">{t}</span>)}
            </div>

            <h2 className="text-lg sm:text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{selected.title}</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>{selected.details}</p>

            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-primary)' }}>Key results</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selected.metrics.map((m, i) => (
                <div key={i} className="rounded-xl p-3 text-center text-xs font-semibold" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.18)', color: '#10B981' }}>{m}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
