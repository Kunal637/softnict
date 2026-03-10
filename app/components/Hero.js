'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero({ onOpenModal }) {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');

    const handleThemeChange = () => {
      setIsDark(document.body.classList.contains('dark-mode'));
    };

    window.addEventListener('storage', handleThemeChange);
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        const color = isDark ? 'rgba(0, 224, 255, ' : 'rgba(59, 130, 246, ';
        ctx.fillStyle = `${color}${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineColor = isDark ? 'rgba(0, 224, 255, ' : 'rgba(59, 130, 246, ';
            ctx.strokeStyle = `${lineColor}${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDark]);

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Main Heading */}
          <h1 className="heading-lg text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Intelligence, Simplified.
          </h1>

          {/* Tagline */}
          <p className={`text-2xl md:text-3xl font-semibold drop-shadow-lg animate-fade-in-up ${isDark ? 'text-cyan-400' : 'text-blue-300'}`} style={{ animationDelay: '0.2s' }}>
            Data-Driven. AI-Powered.
          </p>

          {/* Description */}
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up ${isDark ? 'text-gray-200' : 'text-gray-300'}`} style={{ animationDelay: '0.4s' }}>
            Delivering intelligent insights, automation, and predictive analytics for businesses that want to scale efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                onOpenModal();
              }}
              className="btn-primary"
            >
              Get Started
            </button>
            <a href="#portfolio" className="btn-secondary">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
