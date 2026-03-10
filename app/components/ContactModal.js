'use client';

import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mlgpdago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: 'New Contact Form Submission from Softnict Website',
        }),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-black/80 backdrop-blur-xl rounded-3xl max-w-md w-full p-8 border border-white/10 relative dark-mode:bg-black/80 dark-mode:border-white/10 bg-gray-900/80 border-blue-400/20">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300 dark-mode:bg-white/10 dark-mode:hover:bg-white/20 dark-mode:text-white bg-blue-500/20 hover:bg-blue-500/40 text-gray-100"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 font-montserrat dark-mode:text-white text-gray-100">
          Book Free Consultation
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 dark-mode:bg-white/10 dark-mode:border-white/20 dark-mode:text-white dark-mode:placeholder-gray-400 dark-mode:focus:border-cyan-400 dark-mode:focus:ring-cyan-400/30 bg-blue-500/10 border-blue-400/30 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/30 border focus:ring-2"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 dark-mode:bg-white/10 dark-mode:border-white/20 dark-mode:text-white dark-mode:placeholder-gray-400 dark-mode:focus:border-cyan-400 dark-mode:focus:ring-cyan-400/30 bg-blue-500/10 border-blue-400/30 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/30 border focus:ring-2"
          />

          {/* Message Textarea */}
          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 resize-none dark-mode:bg-white/10 dark-mode:border-white/20 dark-mode:text-white dark-mode:placeholder-gray-400 dark-mode:focus:border-cyan-400 dark-mode:focus:ring-cyan-400/30 bg-blue-500/10 border-blue-400/30 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/30 border focus:ring-2"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
