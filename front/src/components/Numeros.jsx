import React from 'react';

export default function Numeros() {
  return (
    <section className="numeros" id="numeros">
      <div className="container">
        <div className="numeros-grid">
          <div className="numero-item">
            <div className="numero-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
              </svg>
            </div>
            <div className="numero-val">500<span>+</span></div>
            <div className="numero-label">Sorrisos transformados</div>
          </div>

          <div className="numero-item">
            <div className="numero-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="numero-val">5.0</div>
            <div className="numero-label">Avaliação no Google</div>
          </div>

          <div className="numero-item">
            <div className="numero-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 2.5 6L9 20h6l1.5-6C18 12.5 19 10.5 19 8c0-3-3-6-7-6z"/>
                <path d="M9 20v1a2 2 0 004 0v-1"/>
              </svg>
            </div>
            <div className="numero-val">8<span>+</span></div>
            <div className="numero-label">Anos de experiência</div>
          </div>

          <div className="numero-item">
            <div className="numero-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/>
              </svg>
            </div>
            <div className="numero-val">6</div>
            <div className="numero-label">Especialidades</div>
          </div>
        </div>
      </div>
    </section>
  );
}
