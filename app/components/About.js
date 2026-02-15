'use client'

import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, accuracy: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        projects: Math.floor(progress * 150),
        clients: Math.floor(progress * 50),
        accuracy: Math.floor(progress * 98)
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters({ projects: 150, clients: 50, accuracy: 98 })
      }
    }, interval)
  }

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2>About Softech</h2>
        
        {/* Stats Counter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#00E0FF',
              fontFamily: 'var(--font-montserrat)',
              marginBottom: '0.5rem'
            }}>
              {counters.projects}+
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
              Projects Completed
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#00E0FF',
              fontFamily: 'var(--font-montserrat)',
              marginBottom: '0.5rem'
            }}>
              {counters.clients}+
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
              Happy Clients
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#00E0FF',
              fontFamily: 'var(--font-montserrat)',
              marginBottom: '0.5rem'
            }}>
              {counters.accuracy}%
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
              Average Accuracy
            </div>
          </div>
        </div>

        <p>
          Softech delivers AI-powered data solutions for businesses that want to leverage intelligent insights, 
          automation, and predictive analytics to scale efficiently. We combine cutting-edge AI technologies 
          with actionable data intelligence for measurable business impact. Our mission is to make businesses 
          smarter, faster, and future-ready.
        </p>
      </div>
    </section>
  )
}
