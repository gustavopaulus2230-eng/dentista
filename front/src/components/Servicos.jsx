import React, { useState } from 'react';

const servicos = [
  {
    id: 'estetica',
    num: '01',
    titulo: 'Estética Dental',
    tagline: 'Sorriso impecável e natural',
    desc: 'Facetas, lentes de contato dental e clareamento de última geração.',
    tags: ['Facetas de porcelana', 'Lentes de contato', 'Clareamento a laser', 'Harmonização'],
    accent: '#90CAF9',
    accentLight: 'rgba(144, 202, 249, 0.15)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l3 6.5L22 9l-5 5 1.2 7L12 18l-6.2 3 1.2-7L2 9l7-.5L12 2z"/>
      </svg>
    ),
  },
  {
    id: 'implantes',
    num: '02',
    titulo: 'Implantes Dentários',
    tagline: 'O mais procurado',
    desc: 'Substitua dentes ausentes com a solução mais duradoura e natural disponível.',
    tags: ['Implante unitário', 'Protocolo', 'Carga imediata'],
    accent: '#FFFFFF',
    accentLight: 'rgba(255,255,255,0.12)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2C8 2 5 5 5 8c0 2.5 1 4.5 2.5 6L9 20h6l1.5-6C18 12.5 19 10.5 19 8c0-3-3-6-7-6z"/>
        <path d="M9 20v1a2 2 0 004 0v-1"/>
      </svg>
    ),
  },
  {
    id: 'ortodontia',
    num: '03',
    titulo: 'Ortodontia',
    tagline: 'Alinhamento perfeito',
    desc: 'Aparelhos fixos, móveis ou alinhadores transparentes para cada perfil.',
    tags: ['Aparelho metálico', 'Autoligado', 'Invisalign', 'Contenção'],
    accent: '#81D4FA',
    accentLight: 'rgba(129, 212, 250, 0.15)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
  },
  {
    id: 'endodontia',
    num: '04',
    titulo: 'Endodontia',
    tagline: 'Canal sem dor',
    desc: 'Tratamento de canal moderno, sem dor e com alta taxa de sucesso.',
    tags: ['Tratamento de canal', 'Retratamento', 'Cirurgia', 'Diagnóstico digital'],
    accent: '#4DD0E1',
    accentLight: 'rgba(77, 208, 225, 0.15)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
  },
  {
    id: 'periodontia',
    num: '05',
    titulo: 'Periodontia',
    tagline: 'Saúde das gengivas',
    desc: 'Prevenção e tratamento de doenças nas gengivas e tecidos de suporte.',
    tags: ['Raspagem', 'Cirurgia gengival', 'Enxerto', 'Gengivite'],
    accent: '#80CBC4',
    accentLight: 'rgba(128, 203, 196, 0.15)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'prevencao',
    num: '06',
    titulo: 'Clínico Geral',
    tagline: 'Cuidado preventivo',
    desc: 'Consultas de rotina, limpeza profissional e diagnóstico precoce.',
    tags: ['Limpeza', 'Restaurações', 'Radiografia digital', 'Fluoretação'],
    accent: '#64B5F6',
    accentLight: 'rgba(100, 181, 246, 0.15)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
];

export default function Servicos() {
  const [hovered, setHovered] = useState(null);



  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Serviços</div>
          <h2 className="section-title">
            Cuide do seu sorriso<br /><em>com quem entende de você</em>
          </h2>
          <p className="section-desc">
            Do cuidado preventivo à estética avançada — cada tratamento pensado para a sua saúde, beleza e bem-estar.
          </p>
        </div>

        <div className="srv-bento">
          {servicos.map((s) => (
            <div
              key={s.id}
              className={`srv-card${hovered === s.id ? ' srv-hovered' : ''}`}
              id={`servico-${s.id}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--srv-accent': s.accent, '--srv-accent-light': s.accentLight }}
            >
              <span className="srv-num">{s.num}</span>
              <div className="srv-icon" style={{ boxShadow: `0 0 20px ${s.accentLight}` }}>{s.icon}</div>
              <h3 className="srv-title">{s.titulo}</h3>
              <p className="srv-tagline" style={{ color: s.accent }}>{s.tagline}</p>
              
              <div className={`srv-details ${hovered === s.id ? 'active' : ''}`}>
                <p className="srv-desc">{s.desc}</p>
                <div className="srv-tags">
                  {s.tags.map((tag, i) => (
                    <span key={i} className="srv-tag" style={{ background: s.accentLight, color: s.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
