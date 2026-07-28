# Documentação da Tela Home (Landing Page)

## 1. Objetivo
Apresentar os serviços odontológicos da Dra. Nathália Cougo, destacar suas credenciais e diferenciais, e converter visitantes em agendamentos de consulta.

## 2. Visão geral
Página principal composta pelas seções:
- **Navbar:** Navegação fixa com indicação visual da seção ativa e botão de agendamento.
- **Hero:** Destaque inicial com fotografia do consultório, badge profissional, proposta de valor e estatísticas chave.
- **Sobre mim:** Apresentação da Dra. Nathália Cougo com fotografia, registro CRO e credenciais de formação.
- **Números:** Indicadores de desempenho e métricas de satisfação.
- **Serviços:** Lista de especialidades (Estética Dental, Implantes, Ortodontia, Endodontia, Periodontia, Prevenção).
- **Diferenciais:** Motivos para escolher a Dra. Nathália, com foco em atendimento humanizado e excelência clínica.
- **Processo:** As 4 etapas da jornada do paciente.
- **Depoimentos:** Avaliações reais de pacientes e garantias de confiança.
- **Contato:** Formulário interativo com validação e máscara de telefone, e botão direto para WhatsApp.
- **Footer:** Rodapé institucional.

## 3. Arquivos fonte de verdade
- [App.jsx](../../src/App.jsx) — Montagem das seções da página.
- [style.css](../../src/styles/style.css) — Estilos e animações da tela.

## 4. Modelo de dados / fluxo
- O formulário de contato valida campos obrigatórios (`nome`, `telefone`) com efeito de animação (`shake`) em caso de omissão.
- O campo de telefone aplica a máscara automática `(XX) XXXXX-XXXX`.
- Ao submeter, exibe estado de carregamento no botão e notificação via `Toast`.

## 5. Regras críticas
- É proibido o uso de emojis na interface; apenas ícones SVG vetorizados são permitidos.
- Proibido o uso de frases genéricas de IA em títulos e subtítulos.
- Transições de scroll e animações de fade-in devem permanecer suaves.

## 6. O que revisar antes de alterar
- Testar a responsividade em dispositivos móveis e desktop.
- Garantir que a ancoragem dos links da Navbar continua apontando para os IDs das seções (`#sobre`, `#servicos`, `#diferenciais`, `#depoimentos`, `#contato`).

## 7. Código relacionado
- [App.jsx](../../src/App.jsx)
- [Contato.jsx](../../src/components/Contato.jsx)
- [Navbar.jsx](../../src/components/Navbar.jsx)
