'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce',
      description: 'Intelligent customer service bot that handles 80% of inquiries without human intervention.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'OpenAI', 'Python'],
      details: 'Built using GPT-4 with custom fine-tuning on client product data. Integrates with Shopify, WooCommerce, and custom REST APIs for real-time order tracking, returns, and recommendations. Deployed via serverless functions with sub-200ms response times.',
      metrics: ['80% queries automated', '60% fewer tickets', '45% higher CSAT'],
    },
    {
      id: 2,
      title: 'Predictive Sales Analytics',
      description: 'ML forecasting system delivering 95% accuracy across SKUs and sales channels.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['TensorFlow', 'Data Science', 'BI'],
      details: 'End-to-end ML pipeline using gradient boosting and LSTM models trained on 5 years of historical data, seasonality patterns, and external market signals. Integrated with Tableau dashboards for business stakeholders.',
      metrics: ['95% forecast accuracy', '30% inventory savings', '$2M annual uplift'],
    },
    {
      id: 3,
      title: 'Document Intelligence Platform',
      description: 'Automated extraction and classification processing 10,000+ documents daily.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'OCR', 'FastAPI'],
      details: 'Vision-language model pipeline for extracting structured data from invoices, contracts, and regulatory forms. Handles multi-format documents (PDF, scan, photo) with adaptive preprocessing. 98% extraction accuracy validated against human review.',
      metrics: ['98% extraction accuracy', '10,000+ docs/day', '90% processing time saved'],
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-24 relative">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-label justify-center">
              <span className="w-5 h-px bg-violet-400"></span>
              Case studies
              <span className="w-5 h-px bg-violet-400"></span>
            </p>
            <h2 className="heading-md mb-4">Work that speaks for itself</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real outcomes for real businesses. Click any project for the full breakdown.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card-glass overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-xl mb-5 -mx-6 -mt-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      View case study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

                {/* Metrics row */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] flex gap-3">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <span key={i} className="text-xs text-emerald-400 font-medium">{m}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0D1525] border border-white/10 rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all duration-200 text-lg leading-none"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="relative h-56 mb-6 rounded-xl overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, i) => <span key={i} className="tag-pill">{tag}</span>)}
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.details}</p>

            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Key results</h3>
            <div className="grid grid-cols-3 gap-3">
              {selectedProject.metrics.map((metric, i) => (
                <div key={i} className="bg-emerald-400/5 border border-emerald-400/20 rounded-xl p-3 text-center">
                  <p className="text-sm font-semibold text-emerald-400">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
