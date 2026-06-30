'use client';
import { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mlgpdago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message, _replyto: formData.email, _subject: 'New Contact from Softnict Website' }),
      });
      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => { setSent(false); onClose(); }, 2500);
      }
    } catch (error) {
      // silent
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in-up" style={{ background: 'var(--modal-overlay)', backdropFilter: 'blur(12px)' }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="rounded-t-2xl sm:rounded-2xl max-w-md w-full p-6 sm:p-8 relative max-h-[92vh] sm:max-h-none overflow-y-auto" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-soft)', color: 'var(--text-muted)' }} onClick={onClose}>✕</button>

        {sent ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message sent!</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Start a project</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Tell us about your challenge. We'll come back with a plan.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="you@company.com" className="input-field" />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>What are you building?</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} placeholder="Describe your project or challenge..." className="input-field resize-none" />
              </div>
              <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Sending...
                  </span>
                ) : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
