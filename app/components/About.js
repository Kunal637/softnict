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
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(progress * 150),
        clients: Math.floor(progress * 50),
        accuracy: Math.floor(progress * 98),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ projects: 150, clients: 50, accuracy: 98 });
      }
    }, interval);
  };

  const stats = [
    { value: counters.projects, label: 'Projects Completed', suffix: '+' },
    { value: counters.clients, label: 'Happy Clients', suffix: '+' },
    { value: counters.accuracy, label: 'Average Accuracy', suffix: '%' },
  ];

  return (
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="heading-md text-center mb-12 md:mb-16">About Softnict</h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-glass text-center group hover:shadow-2xl hover:scale-105 transition-all duration-300 dark-mode:hover:shadow-cyan-400/30"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 font-montserrat group-hover:scale-110 transition-transform duration-300 dark-mode:text-cyan-400 text-blue-300">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-lg font-medium dark-mode:text-gray-300 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="card-glass max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed dark-mode:text-gray-200 text-gray-300">
            Softnict delivers AI-powered data solutions for businesses that want to leverage intelligent insights,
            automation, and predictive analytics to scale efficiently. We combine cutting-edge AI technologies
            with actionable data intelligence for measurable business impact. Our mission is to make businesses
            smarter, faster, and future-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
