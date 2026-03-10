'use client';

import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const welcomeMessages = [
    "Hi! 👋 I'm here to help you discover how Softnict can power your business with AI. What can I help you with?",
    "Hello! 👋 Welcome to Softnict. I'm here to answer your questions about our AI solutions. How can I assist you today?",
    "Hey there! 👋 Looking to transform your business with AI? I'm here to help. What brings you here today?",
  ];

  useEffect(() => {
    if (messages.length === 0) {
      const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      setMessages([{ text: randomWelcome, isUser: false }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase().trim();

    if (lowerMessage.includes('e-commerce') || lowerMessage.includes('ecommerce') || lowerMessage.includes('online store')) {
      return 'Perfect! E-commerce is a great fit for AI. We can help with personalized product recommendations, AI chatbots for customer support, inventory forecasting, or automated marketing. What\'s your main goal - increase sales, improve customer service, or automate operations?';
    }

    if (lowerMessage.includes('website') || lowerMessage.includes('web app') || (lowerMessage.includes('make') && lowerMessage.includes('web'))) {
      return 'Great! Are you looking to add AI features to your website? We can integrate chatbots, recommendation engines, search optimization, or personalization. What type of website are you building - e-commerce, SaaS, or something else?';
    }

    if (lowerMessage.match(/^(nlp|natural language|recommendation|predict|forecast)[\s,!.?]*$/i)) {
      return 'Excellent choice! That\'s one of our specialties. For e-commerce, this could power smart search, customer support chatbots, or review analysis. What\'s your budget range - Starter ($2,500), Professional ($7,500), or Enterprise (custom)?';
    }

    if ((lowerMessage.includes("i'm ") || lowerMessage.includes('i am ') || lowerMessage.includes('im ') || lowerMessage.includes('my name is ')) &&
      (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey'))) {
      const nameMatch = userMessage.match(/(?:i'm|i am|im|my name is)\s+([a-zA-Z]+)/i);
      const name = nameMatch ? nameMatch[1] : '';
      return `Nice to meet you, ${name}! 👋 How can Softnict help your business today? Are you looking to automate processes, improve customer service, or analyze data?`;
    }

    if (lowerMessage.match(/^(i'm|i am|im|my name is)\s+[a-zA-Z]+/i)) {
      const nameMatch = userMessage.match(/(?:i'm|i am|im|my name is)\s+([a-zA-Z]+)/i);
      const name = nameMatch ? nameMatch[1] : '';
      return `Nice to meet you, ${name}! 👋 How can Softnict help your business today?`;
    }

    if (lowerMessage.match(/^(ok|okay|sure|yes|yeah|yep|alright)[\s,!.?]*$/)) {
      return 'Great! What would you like to know more about? I can tell you about our services, pricing, timeline, or help you book a free consultation.';
    }

    if (lowerMessage.match(/^(bye|goodbye|see you|thanks|thank you)[\s,!.?]*$/)) {
      return 'Thank you for chatting with me! If you have any questions later, feel free to reach out at info@softnict.com. Have a great day! 👋';
    }

    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon)[\s,!.?]*$/)) {
      return 'Hello! 👋 I\'m here to help you explore how Softnict can transform your business with AI. What brings you here today?';
    }

    if (lowerMessage.includes('book') || lowerMessage.includes('consultation') || lowerMessage.includes('meeting') || lowerMessage.includes('schedule')) {
      return 'Perfect! I\'d love to set up a free consultation for you. Please click the "Book Free Consultation" button to fill out the form, or share your email here and I\'ll have our team reach out within 24 hours.';
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer')) {
      return 'We offer three main services: AI Integration (connecting AI to your existing systems), Custom AI Solutions (building tailored AI models), and AI Consulting (strategic guidance). Which area interests you most?';
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('budget')) {
      return 'Our pricing starts at $2,500 for basic AI integration, $7,500 for professional custom solutions, and we offer custom enterprise packages. What\'s your budget range and what problem are you looking to solve?';
    }

    if (lowerMessage.includes('time') || lowerMessage.includes('how long') || lowerMessage.includes('duration')) {
      return 'Simple integrations take 2-4 weeks, while custom AI solutions typically need 6-12 weeks. We can provide a detailed timeline once we understand your specific needs. What\'s your ideal launch date?';
    }

    if (lowerMessage.includes('portfolio') || lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
      return 'We\'ve built AI chatbots that reduced response times by 80%, predictive analytics systems with 95% accuracy, and document processing automation. Check out our portfolio section above! What industry are you in?';
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('phone')) {
      return 'You can reach us at info@softnict.com or +1 (555) 123-4567. We typically respond within 24 hours. Would you like to schedule a call to discuss your project?';
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('automation') || lowerMessage.includes('chatbot')) {
      return 'We specialize in chatbots, predictive analytics, document processing, natural language processing, and custom ML models. What specific AI capability would help your business most?';
    }

    if (lowerMessage.includes('@') && lowerMessage.includes('.')) {
      return 'Thank you for sharing your email! Our team will reach out within 24 hours to schedule your free consultation. In the meantime, what specific AI challenge would you like to discuss?';
    }

    return 'I\'d love to help you with that! To give you the best answer, could you tell me a bit more? For example: What industry are you in? What\'s your main business challenge? Or feel free to ask about our services, pricing, or book a consultation.';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70 hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {!isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 h-[500px] backdrop-blur-xl rounded-3xl border shadow-2xl shadow-black/50 flex flex-col z-40 animate-slide-in dark-mode:bg-black/80 dark-mode:border-white/10 bg-gray-900/80 border-blue-400/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-purple-600 px-6 py-4 rounded-t-3xl flex justify-between items-center">
            <h3 className="text-white font-bold text-lg">AI Assistant</h3>
            <button
              className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-slide-in`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-br-none'
                      : 'dark-mode:bg-white/10 dark-mode:text-gray-200 bg-blue-500/10 text-gray-300 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-lg rounded-bl-none dark-mode:bg-white/10 dark-mode:text-gray-200 bg-blue-500/10 text-gray-300">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full animate-bounce dark-mode:bg-gray-400 bg-gray-500"></span>
                    <span className="w-2 h-2 rounded-full animate-bounce dark-mode:bg-gray-400 bg-gray-500" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 rounded-full animate-bounce dark-mode:bg-gray-400 bg-gray-500" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4 flex gap-2 dark-mode:border-white/10 border-blue-400/20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full focus:outline-none transition-all duration-300 dark-mode:bg-white/10 dark-mode:border-white/20 dark-mode:text-white dark-mode:placeholder-gray-400 dark-mode:focus:border-cyan-400 dark-mode:focus:ring-cyan-400/30 bg-blue-500/10 border-blue-400/30 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/30 border focus:ring-2"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
