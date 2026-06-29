'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, accuracy: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const p = step / steps;
            const ease = 1 - Math.pow(1 - p, 3);
            setCounters({
              projects: Math.floor(ease * 150),
              clients: Math.floor(ease * 50),
              accuracy: Math.floor(ease * 98),
            });
            if (step >= steps) {
              clearInterval(timer);
              setCounters({ projects: 150, clients: 50, accuracy: 98 });
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { value: counters.projects, suffix: '+', label: 'Projects shipped', desc: 'Across AI, automation & data' },
    { value: counters.clients, suffix: '+', label: 'Clients served', desc: 'SMBs to enterprise' },
    { value: counters.accuracy, suffix: '%', label: 'Average accuracy', desc: 'On deployed ML models' },
  ];

  const pillars = [
    {
      icon: '⚡',
      title: 'Speed without shortcuts',
      body: "We move fast because we've solved these problems before. Our frameworks mean less reinvention and more shipping.",
    },
    {
      icon: '🎯',
      title: 'Outcomes over outputs',
      body: "You hire us for results, not code. Every decision — model choice, architecture, UX — is made against a measurable goal.",
    },
    {
      icon: '🔒',
      title: 'Trust by design',
      body: "From data privacy to model explainability, we build AI you can stand behind. Responsible, auditable, and yours.",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">
            <span className="w-5 h-px bg-violet-400"></span>
            About Softnict
            <span className="w-5 h-px bg-violet-400"></span>
          </p>
          <h2 className="heading-md mb-4">We exist to make AI<br />work for your business</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Softnict is a specialist AI & software agency. We partner with ambitious teams to design, 
            build, and operate intelligent systems that create durable competitive advantages.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="card-glass text-center group">
              <div className="text-5xl font-bold text-white mb-1 font-inter group-hover:text-violet-300 transition-colors duration-300">
                {stat.value}<span className="text-violet-400">{stat.suffix}</span>
              </div>
              <p className="text-base font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div key={i} className="card-glass">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
