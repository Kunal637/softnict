'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ onOpenModal }) {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setIsDark(true)
      document.body.classList.add('dark-mode')
    }

    const handleScroll = () => {
      // Navbar scroll effect
      setScrolled(window.scrollY > 50)
      
      // Scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark-mode')
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')
  }

  const handleNavClick = (e) => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>S</span>
              <span className={styles.logoText}>Softnict</span>
            </div>
            
            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
              <li><a href="#home" onClick={handleNavClick}>Home</a></li>
              <li><a href="#services" onClick={handleNavClick}>Services</a></li>
              <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
              <li><a href="#about" onClick={handleNavClick}>About</a></li>
              <li><a href="#testimonials" onClick={handleNavClick}>Testimonials</a></li>
              <li><a href="#faq" onClick={handleNavClick}>FAQ</a></li>
            </ul>

            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>

            <button 
              className={styles.mobileMenuToggle} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
