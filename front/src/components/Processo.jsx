import React from 'react';

export default function Processo() {
  return (
    <section className="processo" id="processo">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Como funciona</div>
          <h2 className="section-title">Sua jornada para o<br /><em>sorriso perfeito</em></h2>
          <p className="section-desc">Simples, transparente e sempre ao seu lado. Veja como funciona o nosso processo.</p>
        </div>

        <div className="processo-steps">
          <div className="processo-step" id="step-1">
            <div className="step-num">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.07 2.18 2 2 0 012.07.07h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
            </div>
            <div className="step-content">
              <h3>Agendamento</h3>
              <p>Entre em contato pelo WhatsApp ou formulário. Marcamos um horário conveniente para você, sem burocracia.</p>
            </div>
          </div>

          <div className="processo-connector"></div>

          <div className="processo-step" id="step-2">
            <div className="step-num">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <div className="step-content">
              <h3>Consulta & Diagnóstico</h3>
              <p>Avaliação completa com exames e conversa detalhada sobre seus objetivos e expectativas. Você é ouvido.</p>
            </div>
          </div>

          <div className="processo-connector"></div>

          <div className="processo-step" id="step-3">
            <div className="step-num">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div className="step-content">
              <h3>Plano de Tratamento</h3>
              <p>Elaboramos um plano personalizado com todas as opções, prazos e investimentos. Tudo transparente.</p>
            </div>
          </div>

          <div className="processo-connector"></div>

          <div className="processo-step" id="step-4">
            <div className="step-num">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="step-content">
              <h3>Transformação</h3>
              <p>Realizamos os tratamentos com cuidado, tecnologia e acompanhamento constante até o resultado final.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
