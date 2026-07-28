# Arquitetura do Front-end

## 1. Objetivo
Descrever a estrutura, organização e padrões do projeto front-end (React) do consultório da Dra. Nathália Cougo.

## 2. Visão geral
Aplicação desenvolvida em React utilizando Vanilla CSS para estilo e animações refinadas. É organizada de forma modular em componentes desacoplados dentro de `src/components/`.

## 3. Arquivos fonte de verdade
- `src/App.jsx` — Componente principal da aplicação.
- `src/index.jsx` — Ponto de entrada do React.
- `src/styles/style.css` — Estilos globais e tokens de design system.
- `src/components/` — Diretório com os componentes modulares da aplicação.

## 4. Modelo de dados / fluxo
- Componentes funcionais organizados e montados no `App.jsx`.
- IntersectionObserver gerenciado no ciclo de vida para acionamento de animações de fade-in ao rolar.
- Notificações gerenciadas dinamicamente via estado centralizado no componente `Toast`.

## 5. Regras críticas
- **Framework obrigatório:** Todo o front-end deve ser mantido estritamente em React.
- **Ícones e Emojis:** Proibido o uso de emojis na interface. Todos os ícones devem ser em formato SVG inline vetorizado.
- **Textos:** Proibido o uso de frases genéricas de IA. Redação voltada para a identidade profissional da Dra. Nathália Cougo.
- **Animações:** Elementos e cartões possuem micro-animações, estados de hover, foco e transições de tela suaves.

## 6. O que revisar antes de alterar
- Confirmar se novas telas ou componentes relevantes possuem documentação em `docs/telas/` ou `docs/componentes/`.
- Garantir que todo arquivo `.md` em `docs/` encerre com uma seção `## Código relacionado` contendo links relativos válidos.

## 7. Código relacionado
- [App.jsx](../src/App.jsx)
- [index.jsx](../src/index.jsx)
- [style.css](../src/styles/style.css)
