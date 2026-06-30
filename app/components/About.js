'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, accuracy: 0 });
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 1800, steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const ease = 1 - Math.pow(1 - step / steps, 3);
            setCounters({ projects: Math.floor(ease * 150), clients: Math.floor(ease * 50), accuracy: Math.floor(ease * 98) });
            if (step >= steps) { clearInterval(timer); setCounters({ projects: 150, clients: 50, accuracy: 98 }); }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  const stats = [
    { value: counters.projects, suffix: '+', label: 'Projects shipped', sub: 'AI, automation & data' },
    { value: counters.clients, suffix: '+', label: 'Clients served', sub: 'SMBs to enterprise' },
    { value: counters.accuracy, suffix: '%', label: 'Model accuracy', sub: 'Average across deployments' },
  ];

  const pillars = [
    { icon: '⚡', title: 'Speed without shortcuts', body: "We move fast because we've solved these problems before. Less reinvention, more shipping." },
    { icon: '🎯', title: 'Outcomes over outputs', body: 'You hire us for results. Every model choice, architecture decision, UX call — made against a measurable goal.' },
    { icon: '🔒', title: 'Trust by design', body: 'From data privacy to model explainability, we build AI you can stand behind. Responsible, auditable, yours.' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)' }} />

      <div className="container-custom relative">
        <div className="text-center mb-10 sm:mb-16">
          <p className="section-label justify-center">
            <span className="rule-accent" />
            About Softnict
            <span className="rule-accent" />
          </p>
          <h2 className="heading-md mb-4 sm:mb-5">We exist to make AI<br />work for your business</h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4" style={{ color: 'var(--text-muted)' }}>
            Softnict is a specialist AI & software agency. We partner with ambitious teams to design,
            build, and operate intelligent systems that create durable competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12">
          {stats.map((s, i) => (
            <div key={i} className="card-glass text-center group">
              <div className="text-4xl sm:text-5xl font-bold mb-1 group-hover:text-sky-300 transition-colors duration-300" style={{ fontFamily: 'var(--font-dm-sans)', color: '#0EA5E9' }}>
                {s.value}<span style={{ color: '#F97316' }}>{s.suffix}</span>
              </div>
              <p className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{s.label}</p>
              <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <div key={i} className="card-glass group">
              <span className="text-2xl mb-4 block">{p.icon}</span>
              <h3 className="text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
