import React from 'react';

export default function Contato() {
  const whatsappLink = 'https://wa.me/5500000000000';
  const instagramLink = 'https://instagram.com/dra.nathaliacougo';

  return (
    <section className="contato" id="contato">
      <div className="container">
        <div className="contato-grid">
          {/* Lado esquerdo: título e info */}
          <div className="contato-info">
            <div className="section-tag">Agende sua consulta</div>
            <h2 className="section-title">
              Pronto para transformar<br />
              <em>o seu sorriso?</em>
            </h2>
            <p className="contato-desc">
              Escolha o canal que preferir para entrar em contato. Respondemos rapidamente pelo WhatsApp ou pelo Instagram. Estamos prontos para oferecer o melhor atendimento para você.
            </p>

            <div className="contato-cards">
              <div className="contato-card">
                <div className="cc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>Localização</strong>
                  <span>Consultório Odontológico — Dra. Nathália Cougo</span>
                </div>
              </div>

              <div className="contato-card">
                <div className="cc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <span>Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito: botões de contato */}
          <div className="contato-form-wrap contato-social-wrap">
            <h3 className="form-title">Fale conosco</h3>
            <p className="form-sub">Escolha como prefere entrar em contato.</p>

            <div className="social-contact-buttons">
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-contact-btn whatsapp-btn"
                id="contato-whatsapp-btn"
              >
                <div className="social-btn-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="social-btn-text">
                  <strong>WhatsApp</strong>
                  <span>Resposta rápida · Clique para conversar</span>
                </div>
                <div className="social-btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-contact-btn instagram-btn"
                id="contato-instagram-btn"
              >
                <div className="social-btn-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div className="social-btn-text">
                  <strong>Instagram</strong>
                  <span>Envie uma mensagem no Direct</span>
                </div>
                <div className="social-btn-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            </div>

            <p className="form-note" style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', marginTop: '24px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Suas informações estão protegidas e seguras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
