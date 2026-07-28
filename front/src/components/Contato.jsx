import React, { useState } from 'react';

export default function Contato({ onShowToast }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [shakeField, setShakeField] = useState(null);

  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length <= 10) {
      val = val.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      val = val.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    setTelefone(val.trim().replace(/-$/, ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) {
      setShakeField('nome');
      setTimeout(() => setShakeField(null), 1200);
      return;
    }

    if (!telefone.trim()) {
      setShakeField('telefone');
      setTimeout(() => setShakeField(null), 1200);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setNome('');
      setTelefone('');
      setEmail('');
      setMensagem('');
      setLoading(false);
      if (onShowToast) {
        onShowToast('Solicitação enviada com sucesso! Entraremos em contato em breve.');
      }
    }, 1800);
  };

  return (
    <section className="contato" id="contato">
      <div className="container">
        <div className="contato-grid">
          <div className="contato-info">
            <div className="section-tag">Agende sua consulta</div>
            <h2 className="section-title">
              Pronto para transformar<br />
              <em>o seu sorriso?</em>
            </h2>
            <p className="contato-desc">
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp. Estamos prontos para oferecer o melhor atendimento para você.
            </p>

            <div className="contato-cards">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="contato-card whatsapp-card">
                <div className="cc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <strong>Atendimento rápido via WhatsApp</strong>
                  <span>Clique para iniciar uma conversa</span>
                </div>
              </a>

              <div className="contato-card">
                <div className="cc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Localização</strong>
                  <span>Consultório Odontológico — Dra. Nathália Cougo</span>
                </div>
              </div>

              <div className="contato-card">
                <div className="cc-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>Horário de Atendimento</strong>
                  <span>Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contato-form-wrap">
            <h3 className="form-title">Envie uma mensagem</h3>
            <p className="form-sub">Entraremos em contato o mais breve possível.</p>

            <form id="contato-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome completo *</label>
                <input
                  type="text"
                  id="nome"
                  className="form-control"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  style={shakeField === 'nome' ? { borderColor: '#ef4444', animation: 'shake 0.4s ease' } : {}}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    className="form-control"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={handlePhoneChange}
                    style={shakeField === 'telefone' ? { borderColor: '#ef4444', animation: 'shake 0.4s ease' } : {}}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail (opcional)</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem ou dúvida</label>
                <textarea
                  id="mensagem"
                  className="form-control"
                  rows="4"
                  placeholder="Conte-nos como podemos ajudar..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" id="form-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeDasharray="31.4" strokeDashoffset="10"/>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar solicitação
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="form-note" style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Seus dados estão protegidos. Nunca compartilhamos suas informações.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
