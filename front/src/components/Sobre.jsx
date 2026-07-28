import React from 'react';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-image-wrapper">
            <div className="sobre-image-frame">
              <img src="/dentist_portrait_nathalia.png" alt="Dra. Nathália Cougo – Cirurgiã-Dentista" className="sobre-img" />
              <div className="sobre-img-overlay"></div>
            </div>

            <div className="sobre-badge-floating">
              <div className="floating-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 2.5 6L9 20h6l1.5-6C18 12.5 19 10.5 19 8c0-3-3-6-7-6z"/>
                  <path d="M9 20v1a2 2 0 004 0v-1"/>
                </svg>
              </div>
              <div>
                <strong>CRO Ativo</strong>
                <small>Registro profissional</small>
              </div>
            </div>

            <div className="sobre-exp-tag">
              <span className="exp-number">8+</span>
              <span className="exp-label">Anos de<br/>experiência</span>
            </div>

            <div className="sobre-bg-shape"></div>
          </div>

          <div className="sobre-content">
            <div className="section-tag">Sobre mim</div>
            <h2 className="section-title">
              Dedicada à sua<br />
              <em>saúde e beleza bucal</em>
            </h2>

            <p className="sobre-text">
              Sou a <strong>Dra. Nathália Cougo</strong>, cirurgiã-dentista apaixonada pelo que faço. Acredito que um sorriso saudável transforma não apenas a aparência, mas também a confiança e a qualidade de vida de cada paciente.
            </p>

            <p className="sobre-text">
              Com formação sólida e atualização constante nas técnicas mais modernas da odontologia, ofereço tratamentos personalizados, aliando ciência, estética e humanização no atendimento.
            </p>

            <div className="sobre-credentials">
              <div className="credential">
                <div className="credential-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <span>Graduação em Odontologia</span>
              </div>

              <div className="credential">
                <div className="credential-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  </svg>
                </div>
                <span>Especialização em Estética Dental</span>
              </div>

              <div className="credential">
                <div className="credential-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 18h8M3 21h18M14 14.5L12 9l-4 4.5"/>
                    <circle cx="12" cy="6" r="3"/>
                  </svg>
                </div>
                <span>Atualização contínua em técnicas modernas</span>
              </div>

              <div className="credential">
                <div className="credential-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </div>
                <span>Atendimento humanizado e acolhedor</span>
              </div>
            </div>

            <a href="#contato" className="btn btn-primary" id="sobre-cta-btn">Agende sua consulta</a>
          </div>
        </div>
      </div>
    </section>
  );
}
