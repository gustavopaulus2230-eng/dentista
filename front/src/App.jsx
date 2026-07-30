import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';

import Servicos from './components/Servicos';
import Diferenciais from './components/Diferenciais';
import Processo from './components/Processo';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';


export default function App() {

  useEffect(() => {
    const animElements = document.querySelectorAll(
      '.servico-card, .depoimento-card, .diferencial-item, .processo-step, .credential, .sobre-image-wrapper, .sobre-content, .contato-info, .contato-form-wrap'
    );

    animElements.forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    animElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Sobre />

        <Servicos />
        <Diferenciais />
        <Processo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />

    </div>
  );
}
