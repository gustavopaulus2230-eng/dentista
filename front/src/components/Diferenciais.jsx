import React from 'react';

export default function Diferenciais() {
  return (
    <section className="diferenciais" id="diferenciais">
      <div className="diferenciais-deco">
        <div className="deco-orb deco-orb-1"></div>
        <div className="deco-orb deco-orb-2"></div>
      </div>

      <div className="container">
        <div className="diferenciais-grid">
          <div className="diferenciais-content">
            <div className="section-tag light">Por que escolher a Dra. Nathália</div>
            <h2 className="section-title light">
              Um cuidado que vai<br />
              <em>além do consultório</em>
            </h2>
            <p className="diferenciais-desc">
              Aqui você encontra muito mais do que tratamento odontológico. Encontra acolhimento, escuta genuína e um compromisso real com o seu bem-estar — do primeiro contato ao resultado final.
            </p>

            <div className="diferenciais-items">
              <div className="diferencial-item">
                <div className="diferencial-num">01</div>
                <div className="diferencial-info">
                  <h4>Você no centro de tudo</h4>
                  <p>Cada consulta começa ouvindo você. Seus medos, expectativas e objetivos guiam cada decisão clínica — sem pressa, sem pressão.</p>
                </div>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-num">02</div>
                <div className="diferencial-info">
                  <h4>Diagnóstico preciso, tratamento seguro</h4>
                  <p>Com tecnologia digital de imagem e protocolos clínicos atualizados, garantimos segurança e eficácia em cada etapa do seu tratamento.</p>
                </div>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-num">03</div>
                <div className="diferencial-info">
                  <h4>Resultados que duram e encantam</h4>
                  <p>Trabalhamos com materiais de altíssima qualidade e técnicas minimamente invasivas para garantir beleza, função e durabilidade ao seu sorriso.</p>
                </div>
              </div>

              <div className="diferencial-item">
                <div className="diferencial-num">04</div>
                <div className="diferencial-info">
                  <h4>Transparência em cada passo</h4>
                  <p>Explicamos tudo com clareza: o diagnóstico, as opções de tratamento, os prazos e os investimentos. Você decide com confiança e tranquilidade.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="diferenciais-visual">
            <div className="visual-card vc1">
              <span className="vc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </span>
              <span className="vc-text">Excelência clínica</span>
            </div>

            <div className="visual-card vc2">
              <span className="vc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
              <span className="vc-text">Relação de confiança</span>
            </div>

            <div className="visual-card vc3">
              <span className="vc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h12l4 6-10 12L2 9z"/>
                </svg>
              </span>
              <span className="vc-text">Resultado premium</span>
            </div>

            <div className="visual-card vc4">
              <span className="vc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </span>
              <span className="vc-text">Cuidado humanizado</span>
            </div>

            <div className="visual-orb"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
