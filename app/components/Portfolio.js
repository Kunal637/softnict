'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce',
      description: 'Developed an intelligent customer service chatbot that reduced response time by 80%',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'OpenAI', 'Python'],
      details: 'Built a conversational AI chatbot using GPT-4 and custom training data. Integrated with e-commerce platform APIs for real-time order tracking, product recommendations, and customer support. Reduced support tickets by 60% and improved customer satisfaction scores by 45%.',
      metrics: ['80% faster response time', '60% fewer support tickets', '45% higher satisfaction'],
    },
    {
      id: 2,
      title: 'Predictive Analytics System',
      description: 'Built ML models for sales forecasting with 95% accuracy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Machine Learning', 'TensorFlow', 'Data Science'],
      details: 'Developed advanced machine learning models using TensorFlow and scikit-learn for sales forecasting. Analyzed historical data, seasonal trends, and market indicators. Implemented real-time dashboards for business intelligence.',
      metrics: ['95% prediction accuracy', '30% inventory optimization', '$2M cost savings'],
    },
    {
      id: 3,
      title: 'Document Processing AI',
      description: 'Automated document extraction and classification system',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'OCR', 'AI'],
      details: 'Created an intelligent document processing system using computer vision and OCR technology. Automatically extracts, classifies, and validates information from invoices, contracts, and forms. Processes 10,000+ documents daily with 98% accuracy.',
      metrics: ['98% accuracy rate', '10,000+ docs/day', '90% time saved'],
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-16 md:py-24">
        <div className="container-custom">
          {/* Section Title */}
          <h2 className="heading-md text-center mb-4">Our Portfolio</h2>
          <p className="text-center text-lg mb-12 md:mb-16 dark-mode:text-gray-300 text-gray-300">
            Recent projects we've delivered
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="card-glass overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:scale-105 dark-mode:hover:shadow-cyan-400/30"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 transition-colors duration-300 dark-mode:text-white dark-mode:group-hover:text-cyan-400 text-gray-100 group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed dark-mode:text-gray-300 text-gray-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 dark-mode:bg-cyan-400/20 dark-mode:text-cyan-400 dark-mode:border-cyan-400/30 dark-mode:hover:bg-cyan-400/30 bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black/80 backdrop-blur-xl rounded-3xl max-w-2xl w-full p-8 border border-white/10 relative max-h-[90vh] overflow-y-auto dark-mode:bg-black/80 dark-mode:border-white/10 bg-gray-900/80 border-blue-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Project Image */}
            <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-3xl font-bold mb-4 dark-mode:text-white text-gray-100">
              {selectedProject.title}
            </h2>

            {/* Project Details */}
            <p className="leading-relaxed mb-6 dark-mode:text-gray-300 text-gray-300">
              {selectedProject.details}
            </p>

            {/* Key Metrics */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 dark-mode:text-cyan-400 text-blue-300">Key Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 text-center dark-mode:bg-cyan-400/10 dark-mode:border-cyan-400/30 dark-mode:text-cyan-400 bg-blue-500/10 border-blue-400/30 text-blue-300 border"
                  >
                    <p className="font-semibold text-sm">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium rounded-full border dark-mode:bg-cyan-400/20 dark-mode:text-cyan-400 dark-mode:border-cyan-400/30 bg-blue-500/20 text-blue-300 border-blue-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
