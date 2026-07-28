import React from 'react';

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Serviços</div>
          <h2 className="section-title">Cuide do seu sorriso<br /><em>com quem entende de você</em></h2>
          <p className="section-desc">Do cuidado preventivo à estética avançada — cada tratamento pensado para a sua saúde, beleza e bem-estar.</p>
        </div>

        <div className="servicos-grid">
          <div className="servico-card" id="servico-estetica">
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2l3 6.5L22 9l-5 5 1.2 7L12 18l-6.2 3 1.2-7L2 9l7-.5L12 2z"/>
              </svg>
            </div>
            <h3 className="servico-title">Estética Dental</h3>
            <p className="servico-desc">Facetas, lentes de contato dental e clareamento para um sorriso impecável e natural.</p>
            <ul className="servico-list">
              <li>Facetas de porcelana</li>
              <li>Lentes de contato dental</li>
              <li>Clareamento a laser</li>
              <li>Harmonização do sorriso</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>

          <div className="servico-card featured" id="servico-implantes">
            <div className="servico-badge-featured">Mais procurado</div>
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 2.5 6L9 20h6l1.5-6C18 12.5 19 10.5 19 8c0-3-3-6-7-6z"/>
                <path d="M9 20v1a2 2 0 004 0v-1"/>
              </svg>
            </div>
            <h3 className="servico-title">Implantes Dentários</h3>
            <p className="servico-desc">Substitua dentes ausentes com a solução mais duradoura e natural disponível.</p>
            <ul className="servico-list">
              <li>Implante unitário</li>
              <li>Implante protocolo</li>
              <li>All-on-4 e All-on-6</li>
              <li>Carga imediata</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>

          <div className="servico-card" id="servico-ortodontia">
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
            </div>
            <h3 className="servico-title">Ortodontia</h3>
            <p className="servico-desc">Alinhamento dos dentes com aparelhos fixos, móveis ou alinhadores transparentes.</p>
            <ul className="servico-list">
              <li>Aparelho metálico</li>
              <li>Aparelho autoligado</li>
              <li>Alinhadores invisíveis</li>
              <li>Contenção</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>

          <div className="servico-card" id="servico-endodontia">
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
            </div>
            <h3 className="servico-title">Endodontia</h3>
            <p className="servico-desc">Tratamento de canal moderno, sem dor e com alta taxa de sucesso para salvar seu dente.</p>
            <ul className="servico-list">
              <li>Tratamento de canal</li>
              <li>Retratamento endodôntico</li>
              <li>Cirurgia parendodôntica</li>
              <li>Diagnóstico digital</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>

          <div className="servico-card" id="servico-periodontia">
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="servico-title">Periodontia</h3>
            <p className="servico-desc">Saúde das gengivas e ossos que sustentam seus dentes, prevenindo e tratando doenças.</p>
            <ul className="servico-list">
              <li>Raspagem e alisamento</li>
              <li>Cirurgia gengival</li>
              <li>Enxerto gengival</li>
              <li>Tratamento da gengivite</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>

          <div className="servico-card" id="servico-prevencao">
            <div className="servico-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <h3 className="servico-title">Prevenção & Clínico Geral</h3>
            <p className="servico-desc">Consultas de rotina, limpeza profissional e diagnóstico precoce para manter sua saúde bucal.</p>
            <ul className="servico-list">
              <li>Limpeza e profilaxia</li>
              <li>Restaurações</li>
              <li>Radiografia digital</li>
              <li>Fluoretação</li>
            </ul>
            <div className="servico-cta">Saiba mais <span>→</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
