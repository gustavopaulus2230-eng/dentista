import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header class={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 2.5 6L9 20h6l1.5-6C18 12.5 19 10.5 19 8c0-3-3-6-7-6z"/>
              <path d="M9 20v1a2 2 0 004 0v-1"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Dra. Nathália Cougo</span>
            <span className="logo-sub">Cirurgiã-Dentista</span>
          </div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
          <a href="#sobre" className="nav-link" onClick={closeMenu}>Sobre</a>
          <a href="#servicos" className="nav-link" onClick={closeMenu}>Serviços</a>
          <a href="#diferenciais" className="nav-link" onClick={closeMenu}>Diferenciais</a>
          <a href="#depoimentos" className="nav-link" onClick={closeMenu}>Depoimentos</a>
          <a href="#contato" className="nav-link nav-cta" onClick={closeMenu}>Agendar Consulta</a>
        </nav>

        <button className="hamburger" id="hamburger" aria-label="Menu" onClick={toggleMenu}>
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
          <span style={menuOpen ? { opacity: 0 } : {}}></span>
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
        </button>
      </div>
    </header>
  );
}
