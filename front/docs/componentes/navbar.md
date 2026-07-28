# Componente Navbar

## 1. Objetivo
Prover navegação fixa no topo da aplicação, permitindo acesso rápido a todas as seções e ação direta de agendamento.

## 2. Visão geral
O componente detecta a rolagem da página para aplicar uma transição visual de fundo desfocado (`backdrop-filter`) e sombra. Em telas menores, altera para o menu no formato hambúrguer.

## 3. Arquivos fonte de verdade
- [Navbar.jsx](../../src/components/Navbar.jsx) — Lógica e marcação do componente.
- [style.css](../../src/styles/style.css) — Estilos CSS do componente `.navbar`.

## 4. Modelo de dados / fluxo
- `useState`: controla se a página foi rolada mais de 60px (`scrolled`) e se o menu mobile está aberto (`menuOpen`).
- `useEffect`: registra ouvinte no evento `scroll` da janela com `{ passive: true }`.

## 5. Regras críticas
- O botão CTA de agendamento deve direcionar para a seção `#contato`.
- A mudança de estilo na rolagem deve ser suave (`transition`).

## 6. O que revisar antes de alterar
- Verificar se a altura do cabeçalho não sobrepõe títulos ao utilizar navegação por âncoras.

## 7. Código relacionado
- [Navbar.jsx](../../src/components/Navbar.jsx)
