'use client';

import { useState, useRef, useEffect } from 'react';

const KNOWLEDGE_BASE = [
  { keywords: ['hi', 'hello', 'hey', 'yo', 'sup'], response: "Hey there 👋 I'm the Softnict assistant. I can help with services, pricing, timelines, or booking a call. What's on your mind?", suggestions: ['What services do you offer?', 'How much does it cost?', 'Book a consultation'] },
  { keywords: ['service', 'offer', 'what do you do', 'help with', 'capabilities'], response: "We specialize in six areas: AI Integration, Custom ML Models, Intelligent Automation, Data Engineering, AI Chatbots & Agents, and AI Strategy Consulting. Want details on any of these?", suggestions: ['AI Integration', 'Custom ML Models', 'Pricing'] },
  { keywords: ['ai integration', 'integrate ai', 'llm api'], response: "AI Integration means embedding AI into your existing product — LLM APIs, vector search, custom model deployment — without a rewrite. Typical turnaround is 2–4 weeks. Want a quote?", suggestions: ['Get a quote', 'How long does it take?', 'Book a consultation'] },
  { keywords: ['custom ml', 'machine learning', 'ml model', 'predictive'], response: "Custom ML Models cover predictive analytics, classification, NLP, and computer vision — trained on your data, validated against your real metrics. Most builds take 6–12 weeks depending on data readiness.", suggestions: ['Pricing', 'Timeline details', 'See case studies'] },
  { keywords: ['chatbot', 'agent', 'conversational'], response: "We build chatbots and autonomous agents trained to sound like your brand — customer support, sales qualification, internal tooling. One of our clients automated 80% of support tickets. Want to see how?", suggestions: ['See case studies', 'Pricing', 'Book a consultation'] },
  { keywords: ['price', 'cost', 'pricing', 'how much', 'budget', 'quote'], response: "Pricing depends on scope: integrations typically start around $2,500, custom ML solutions from $7,500, and enterprise engagements are scoped individually. Want an exact quote for your project?", suggestions: ['Book a consultation', 'What affects pricing?', 'See services'] },
  { keywords: ['time', 'how long', 'timeline', 'duration', 'when'], response: "Integrations and chatbots: 2–4 weeks. Custom ML systems and data platforms: 6–12 weeks. We lock the exact timeline down before any contract is signed — no surprises later.", suggestions: ['Get a quote', 'See our process', 'Book a consultation'] },
  { keywords: ['portfolio', 'project', 'example', 'case stud', 'work', 'client'], response: "A few highlights: an e-commerce chatbot that automated 80% of inquiries, a sales forecasting model at 95% accuracy, and a document AI platform processing 10,000+ files a day. Scroll down to the Portfolio section for the full breakdown!", suggestions: ['Pricing', 'Book a consultation', 'Contact info'] },
  { keywords: ['contact', 'email', 'phone', 'number', 'reach'], response: "You can reach us directly at info@softnict.com or +92 331 2429397 — we typically respond within 24 hours. Or I can help you book a call right now.", suggestions: ['Book a consultation', 'What services do you offer?'] },
  { keywords: ['consult', 'book', 'meeting', 'call', 'demo', 'talk to someone', 'speak to'], response: "Easy — click the 'Get Started' button at the top of the page, or fill out the contact form. It's a free 30-minute call, no commitment required.", suggestions: ['Pricing', 'What services do you offer?'] },
  { keywords: ['support', 'after launch', 'maintain', 'maintenance', 'post-launch'], response: "All projects include 30 days of free post-launch support. After that, we offer monthly retainers covering model retraining, monitoring, and feature updates — fully optional.", suggestions: ['Pricing', 'Book a consultation'] },
  { keywords: ['industr', 'sector', 'domain', 'who do you work with'], response: "We work across e-commerce, fintech, healthcare, logistics, SaaS, legal, and education. Our approach is domain-agnostic — what matters most is your data and your goal.", suggestions: ['What services do you offer?', 'See case studies'] },
  { keywords: ['stack', 'tech', 'technology', 'framework', 'language'], response: "We work with whatever you're running — AWS, GCP, Azure, Node, Python, .NET, Laravel, and most major CRMs/ERPs. Tell us your stack and we'll tell you exactly how we'd fit in.", suggestions: ['Book a consultation', 'What services do you offer?'] },
  { keywords: ['thank', 'thanks', 'bye', 'goodbye', 'cool', 'great', 'awesome'], response: "Anytime! If anything else comes to mind, I'm right here. You can also reach a real human at info@softnict.com 👋", suggestions: [] },
];

const FALLBACK = {
  response: "Good question — I might not have that exact answer, but I can tell you about our services, pricing, timelines, or get you booked for a free consultation with the team.",
  suggestions: ['What services do you offer?', 'How much does it cost?', 'Book a consultation'],
};

function getBotResponse(userMessage) {
  const m = userMessage.toLowerCase().trim();
  let best = null, bestScore = 0;
  for (const entry of KNOWLEDGE_BASE) {
    for (const kw of entry.keywords) {
      if (m.includes(kw)) {
        const score = kw.length;
        if (score > bestScore) { bestScore = score; best = entry; }
      }
    }
  }
  return best || FALLBACK;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ text: "Hi! I'm the Softnict assistant. Ask me about services, pricing, timelines — or I can get you booked for a free consult.", isUser: false }]);
      setSuggestions(['What services do you offer?', 'How much does it cost?', 'Book a consultation']);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 640;
    if (isMobile) document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const sendMessage = (text) => {
    const userMessage = text.trim();
    if (!userMessage) return;
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    setSuggestions([]);
    setIsTyping(true);

    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      const { response, suggestions: nextSuggestions } = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { text: response, isUser: false }]);
      setSuggestions(nextSuggestions || []);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = () => sendMessage(input);

  return (
    <>
      <button
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl text-white z-40 flex items-center justify-center transition-all duration-300 hover:scale-105"
        style={{ width: 56, height: 56, background: 'var(--accent-grad)', boxShadow: '0 8px 28px rgba(var(--accent-rgb),0.4)' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {isOpen && (
        <div
          className="fixed z-40 flex flex-col animate-slide-in overflow-hidden
                     bottom-0 right-0 left-0 w-full h-[85vh] rounded-t-2xl
                     sm:bottom-24 sm:right-6 sm:left-auto sm:w-[370px] sm:h-[500px] sm:rounded-2xl"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}
        >
          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, rgba(var(--accent-rgb),0.06), transparent)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(var(--accent-rgb),0.12)', border: '1px solid rgba(var(--accent-rgb),0.25)', color: 'var(--accent)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Softnict Assistant</p>
              <p className="text-xs flex items-center gap-1.5" style={{ color: '#10B981' }}>
                <span className="glow-dot" /> Online · Replies instantly
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="sm:hidden w-7 h-7 flex items-center justify-center rounded-lg" style={{ color: 'var(--text-muted)' }} aria-label="Close chat">✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[88%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={msg.isUser
                    ? { background: 'var(--accent-grad)', color: 'white', borderBottomRightRadius: 4 }
                    : { background: 'rgba(var(--accent-rgb),0.05)', border: '1px solid var(--border-soft)', color: 'var(--text-primary)', borderBottomLeftRadius: 4 }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-3" style={{ background: 'rgba(var(--accent-rgb),0.05)', border: '1px solid var(--border-soft)', borderBottomLeftRadius: 4 }}>
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)', animation: `floatY 1s ease-in-out ${i * 0.15}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!isTyping && suggestions.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{ background: 'rgba(var(--accent-rgb),0.06)', border: '1px solid rgba(var(--accent-rgb),0.2)', color: 'var(--accent)' }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: '1px solid var(--border)' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about services, pricing..."
              className="flex-1 text-sm px-4 py-2.5 rounded-xl outline-none transition-colors duration-200"
              style={{ background: 'var(--input-bg)', border: '1px solid var(--border-soft)', color: 'var(--text-primary)' }}
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-xl text-white flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105"
              style={{ background: 'var(--accent-grad)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
