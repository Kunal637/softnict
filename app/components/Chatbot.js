'use client';

import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ text: "Hi! I'm Softnict's assistant. Ask me anything about our AI services, timelines, or pricing.", isUser: false }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const m = userMessage.toLowerCase().trim();
    if (m.match(/^(hi|hello|hey)[s,!.?]*$/)) return "Hello! 👋 What can I help you with today?";
    if (m.includes('service') || m.includes('what do you do') || m.includes('offer')) return "We offer AI Integration, Custom ML Models, Intelligent Automation, Data Engineering, AI Chatbots, and AI Strategy Consulting. Which interests you most?";
    if (m.includes('price') || m.includes('cost') || m.includes('pricing')) return "Projects start around $2,500 for integrations, $7,500 for custom ML solutions, and enterprise is custom-scoped. Want a free quote?";
    if (m.includes('time') || m.includes('how long')) return "Integrations: 2–4 weeks. Custom ML systems: 6–12 weeks. We lock down timelines before any contract is signed.";
    if (m.includes('portfolio') || m.includes('project') || m.includes('example')) return "We've shipped AI chatbots reducing tickets by 60%, a forecasting system at 95% accuracy, and document intelligence processing 10k+ docs/day. Check the portfolio section!";
    if (m.includes('contact') || m.includes('email')) return "Reach us at info@softnict.com or +92 331 2429397. We respond within 24 hours.";
    if (m.includes('consult') || m.includes('book') || m.includes('meeting')) return "Great! Click 'Get Started' to book a free 30-minute consultation. No commitment needed.";
    if (m.includes('support') || m.includes('after') || m.includes('maintain')) return "Yes — all projects include 30-day post-launch support. We also offer monthly maintenance retainers.";
    if (m.match(/bye|goodbye|thanks|thank you/)) return "Thanks for chatting! 👋 Email info@softnict.com anytime.";
    return "Good question! To give you the best answer, could you share a bit more context? Or I can tell you about our services, pricing, or help you book a consultation.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getBotResponse(userMessage), isUser: false }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/40 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 z-40 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[460px] bg-[#0D1525] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 flex flex-col z-40 animate-slide-in overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Softnict AI</p>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.isUser
                    ? 'bg-violet-600 text-white rounded-br-sm'
                    : 'bg-white/[0.05] border border-white/[0.08] text-gray-300 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.12}s` }}></span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/[0.06] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/40 transition-colors duration-200"
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 rounded-xl bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
