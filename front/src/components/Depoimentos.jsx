import React from 'react';

function StarRating() {
  return (
    <div className="dep-stars" style={{ display: 'flex', gap: '4px', color: '#ffb800' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Depoimentos</div>
          <h2 className="section-title">O que dizem nossos<br /><em>pacientes</em></h2>
          <p className="section-desc">Resultados que falam por si. Confira o que nossos pacientes têm a dizer sobre a experiência no consultório.</p>
        </div>

        <div className="depoimentos-grid">
          <div className="depoimento-card" id="dep-1">
            <div className="dep-quote-icon">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.667C0 5.556 4.444 1.333 13.333 0l1.334 2.667C10.444 3.778 8.222 5.778 7.333 9.333H12V20H0zm16 0V12.667C16 5.556 20.444 1.333 29.333 0l1.334 2.667c-4.223 1.111-6.445 3.111-7.334 6.666H28V20H16z" fill="currentColor" opacity="0.15"/>
              </svg>
            </div>
            <StarRating />
            <p className="dep-text">A Dra. Nathália é incrível! Fiz minhas facetas com ela e o resultado superou todas as expectativas. Profissional atenciosa, cuidadosa e muito competente. Recomendo de olhos fechados!</p>
            <div className="dep-author">
              <div className="dep-avatar">AM</div>
              <div className="dep-info">
                <strong>Ana Maria S.</strong>
                <small>Facetas de porcelana</small>
              </div>
            </div>
          </div>

          <div className="depoimento-card featured" id="dep-2">
            <div className="dep-quote-icon featured-icon">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.667C0 5.556 4.444 1.333 13.333 0l1.334 2.667C10.444 3.778 8.222 5.778 7.333 9.333H12V20H0zm16 0V12.667C16 5.556 20.444 1.333 29.333 0l1.334 2.667c-4.223 1.111-6.445 3.111-7.334 6.666H28V20H16z" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
            <StarRating />
            <p className="dep-text">Tinha muito medo de dentista, mas a Dra. Nathália me deixou completamente à vontade. Fiz o implante sem dor e o atendimento foi impecável do início ao fim. Uma profissional incrível!</p>
            <div className="dep-author">
              <div className="dep-avatar">RP</div>
              <div className="dep-info">
                <strong>Ricardo Pereira</strong>
                <small>Implante dentário</small>
              </div>
            </div>
          </div>

          <div className="depoimento-card" id="dep-3">
            <div className="dep-quote-icon">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <path d="M0 20V12.667C0 5.556 4.444 1.333 13.333 0l1.334 2.667C10.444 3.778 8.222 5.778 7.333 9.333H12V20H0zm16 0V12.667C16 5.556 20.444 1.333 29.333 0l1.334 2.667c-4.223 1.111-6.445 3.111-7.334 6.666H28V20H16z" fill="currentColor" opacity="0.15"/>
              </svg>
            </div>
            <StarRating />
            <p className="dep-text">Melhor dentista que já tive! Meu sorriso mudou completamente com o clareamento e o alinhador. Me sinto muito mais confiante. Super recomendo a Dra. Nathália para todos!</p>
            <div className="dep-author">
              <div className="dep-avatar">CF</div>
              <div className="dep-info">
                <strong>Camila Ferreira</strong>
                <small>Clareamento + Alinhadores</small>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Ambiente seguro e higienizado</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>CRO regularizado</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>Horários flexíveis</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <span>Atendimento humanizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
