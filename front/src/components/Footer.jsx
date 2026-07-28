import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
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
            <p className="footer-desc">
              Cuidado odontológico de excelência com atendimento humanizado e personalizado.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servico-estetica">Estética Dental</a></li>
              <li><a href="#servico-implantes">Implantes Dentários</a></li>
              <li><a href="#servico-ortodontia">Ortodontia</a></li>
              <li><a href="#servico-endodontia">Endodontia</a></li>
              <li><a href="#servico-periodontia">Periodontia</a></li>
              <li><a href="#servico-prevencao">Prevenção</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <p>Atendimento mediante agendamento prévio.</p>
            <a href="#contato" className="btn btn-primary" style={{ marginTop: '12px', padding: '10px 20px', fontSize: '0.85rem' }}>
              Agendar consulta
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dra. Nathália Cougo — Cirurgiã-Dentista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
