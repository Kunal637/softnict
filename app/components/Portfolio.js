'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot for E-commerce',
      description: 'Developed an intelligent customer service chatbot that reduced response time by 80%',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['NLP', 'OpenAI', 'Python'],
      details: 'Built a conversational AI chatbot using GPT-4 and custom training data. Integrated with e-commerce platform APIs for real-time order tracking, product recommendations, and customer support. Reduced support tickets by 60% and improved customer satisfaction scores by 45%.',
      metrics: ['80% faster response time', '60% fewer support tickets', '45% higher satisfaction']
    },
    {
      id: 2,
      title: 'Predictive Analytics System',
      description: 'Built ML models for sales forecasting with 95% accuracy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Machine Learning', 'TensorFlow', 'Data Science'],
      details: 'Developed advanced machine learning models using TensorFlow and scikit-learn for sales forecasting. Analyzed historical data, seasonal trends, and market indicators. Implemented real-time dashboards for business intelligence.',
      metrics: ['95% prediction accuracy', '30% inventory optimization', '$2M cost savings']
    },
    {
      id: 3,
      title: 'Document Processing AI',
      description: 'Automated document extraction and classification system',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['Computer Vision', 'OCR', 'AI'],
      details: 'Created an intelligent document processing system using computer vision and OCR technology. Automatically extracts, classifies, and validates information from invoices, contracts, and forms. Processes 10,000+ documents daily with 98% accuracy.',
      metrics: ['98% accuracy rate', '10,000+ docs/day', '90% time saved']
    }
  ]

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2>Our Portfolio</h2>
          <p className="section-subtitle">Recent projects we've delivered</p>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="portfolio-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div className="portfolio-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={() => setSelectedProject(null)}>
          <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            <div className="project-modal-image">
              <Image 
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px' }}
              />
            </div>
            <h2>{selectedProject.title}</h2>
            <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
              {selectedProject.details}
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#00E0FF' }}>Key Metrics</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {selectedProject.metrics.map((metric, i) => (
                  <div 
                    key={i}
                    style={{
                      background: 'rgba(0, 224, 255, 0.1)',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 224, 255, 0.3)',
                      color: '#00E0FF',
                      fontWeight: '600'
                    }}
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
            <div className="portfolio-tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
