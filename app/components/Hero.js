'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Hero({ onOpenModal }) {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isMobile = window.innerWidth < 640;
    const dotCount = isMobile ? 35 : 65;
    const dots = Array.from({ length: dotCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.6,
    }));

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const accentRgb = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '14,165,233';
      const dotOpacity = theme === 'dark' ? 0.55 : 0.45;
      const lineOpacity = theme === 'dark' ? 0.13 : 0.10;

      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb},${dotOpacity})`;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 155) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${accentRgb},${lineOpacity * (1 - dist / 155)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize', resize); };
  }, [theme]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute pointer-events-none" style={{ top: '-15%', left: '-8%', width: 500, height: 500, maxWidth: '90vw', borderRadius: '50%', background: 'rgba(var(--accent-rgb),0.12)', filter: 'blur(100px)', animation: 'orb-pulse 10s ease-in-out infinite' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '-10%', right: '-5%', width: 420, height: 420, maxWidth: '90vw', borderRadius: '50%', background: 'rgba(249,115,22,0.07)', filter: 'blur(90px)', animation: 'orb-pulse 14s ease-in-out infinite reverse' }} />

      <div className="container-custom relative z-10 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center">

          <div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up"
            style={{ background: 'rgba(var(--accent-rgb),0.08)', border: '1px solid rgba(var(--accent-rgb),0.2)', color: 'var(--accent)' }}
          >
            <span className="glow-dot" />
            <span className="whitespace-nowrap">AI-Powered Software Agency · Est. 2020</span>
          </div>

          <h1 className="heading-lg mb-5 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            Build smarter.<br />
            <span className="text-gradient-warm">Scale faster.</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up px-2"
            style={{ animationDelay: '0.22s', color: 'var(--text-muted)' }}
          >
            We engineer intelligent software — from AI integrations to custom ML systems —
            so your business operates at the edge of what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.35s' }}>
            <button onClick={onOpenModal} className="btn-primary text-sm px-8 py-3.5 sm:py-4 w-full sm:w-auto">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#portfolio" className="btn-secondary text-sm px-8 py-3.5 sm:py-4 w-full sm:w-auto">
              See our work
            </a>
          </div>

          <div
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 animate-fade-in-up"
            style={{ animationDelay: '0.5s', borderTop: '1px solid var(--border-soft)' }}
          >
            {[
              { val: '150+', label: 'Projects Shipped' },
              { val: '50+', label: 'Happy Clients' },
              { val: '98%', label: 'Accuracy Rate' },
              { val: '5★', label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--text-primary)' }}>{s.val}</p>
                <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-faint)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--base), transparent)' }} />
    </section>
  );
}
