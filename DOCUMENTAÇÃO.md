# Regras do Projeto

Documento de regras para desenvolvimento assistido por IA. Qualquer agente (Claude, Codex, Cursor, Copilot etc.) deve ler este arquivo por completo antes de executar qualquer tarefa.

**Regra de ouro: ler antes de escrever.** Nunca crie, altere ou documente nada sem antes abrir e ler os arquivos reais envolvidos. Não presuma que um padrão existe — confirme no código.

---

## 0. Início obrigatório de toda sessão

### 0.0 Pergunta inicial (obrigatória em TODO uso deste arquivo)

Antes de executar qualquer tarefa, a IA deve fazer esta pergunta ao usuário e **aguardar a resposta**:

> "Qual projeto estamos trabalhando agora: **front** ou **back**?"

- A resposta define qual estrutura (seção 3) e quais regras se aplicam à sessão.
- Nunca presuma a resposta pela pasta aberta, pelos arquivos visíveis ou pelo histórico da conversa. Pergunte sempre, em toda nova utilização deste arquivo.
- Só depois da resposta a IA verifica o status de estruturação daquele lado (seção 0.1).

### 0.1 Status de estruturação

```
ESTRUTURADO_FRONT: SIM
DATA_FRONT: 2026-07-28

ESTRUTURADO_BACK: NAO
DATA_BACK: —

OBSERVACAO: Documentação já utilizada para estruturar o front. Estrutura pronta para o trabalho.
```

- Se o lado informado na pergunta inicial estiver como `NAO` → execute o **Protocolo de primeira execução** (seção 0.2) para esse lado antes de qualquer outra tarefa.
- Se estiver como `SIM` → a estrutura desse lado já foi montada a partir desta documentação e está pronta para o trabalho. **Nunca** refaça a estruturação. Vá direto para a tarefa pedida, seguindo as regras deste arquivo.

### 0.2 Protocolo de primeira execução (uma única vez por lado)

1. **Leia este documento por completo** antes de criar qualquer coisa.
2. **Confirme que o projeto ainda não está estruturado.** Se as pastas do lado escolhido já existirem, pare, avise o usuário e pergunte como proceder — nunca sobrescreva nada (princípio 2).
3. **Crie a estrutura do lado escolhido** exatamente como definida na seção 3 (3.1 para front, 3.2 para back), incluindo a pasta `docs/` com a árvore da seção 7.1.
4. **Crie os arquivos base de documentação:**
   - `docs/arquitetura.md` — esqueleto seguindo o modelo da seção 7.3, com os campos a preencher;
   - no back, também `docs/banco-de-dados/schema.md` — apenas com o título `# Schema do Banco de Dados` e a nota "Changelog SQL — entradas mais recentes no topo (ver seção 4.2)". Nenhum SQL ainda.
5. **Não crie código de exemplo, placeholder ou teste** durante a estruturação (princípio 3 — nada de lixo).
6. **Registre a conclusão neste arquivo.** Atualize o bloco da seção 0.1 somente para o lado estruturado, por exemplo:

```
ESTRUTURADO_BACK: SIM
DATA_BACK: <data da execução>
OBSERVACAO: Documentação já utilizada para estruturar o back. Estrutura pronta para o trabalho.
```

7. **Informe ao usuário** o que foi criado (lista de pastas e arquivos) e encerre a tarefa. A partir da próxima solicitação, trabalhe normalmente dentro da estrutura criada.

### 0.3 Casos especiais

- Status marca `NAO`, mas as pastas já existem → não sobrescreva nada; avise o usuário e pergunte se deve apenas atualizar o status para `SIM`.
- Status marca `SIM`, mas a estrutura não existe mais → avise o usuário antes de recriar qualquer coisa; nunca recrie por conta própria.
- O usuário respondeu "front", mas a tarefa claramente envolve o back (ou vice-versa) → avise o usuário e confirme antes de continuar.

---

## 1. Princípios gerais

1. **Ler primeiro, escrever depois.** Antes de qualquer alteração, leia o código-fonte real e a documentação existente relacionada à tarefa.
2. **Verificar duplicidade.** Se algo parecido com o que foi pedido já existe (componente, função, tela, ajuste ou documentação), avise o usuário antes de criar algo novo e indique onde está o item existente.
3. **Nada de lixo no código.** Todo código criado apenas para teste ou validação deve ser excluído imediatamente após o sucesso. Nenhum arquivo temporário, log de depuração ou função morta pode permanecer no repositório.
4. **Tudo é documentado.** Nenhuma alteração estrutural (tela, componente, rota, tabela, coluna, regra de negócio) é considerada concluída sem a documentação correspondente atualizada.
5. **Consistência absoluta.** Use exatamente os mesmos nomes de arquivos, funções, tabelas e rotas em todos os lugares (código e documentação). Nunca parafraseie nomes técnicos.

---

## 2. Stack e linguagens

- **Front-end: sempre React** (estrutura da seção 3.1). Nenhuma tela ou componente deve ser criado em outra biblioteca ou framework.
- **Back-end: Node.js** (estrutura da seção 3.2), com PM2 para execução do servidor.
- Antes de adicionar qualquer dependência nova, verifique se já existe algo no projeto que resolva o problema.

---

## 3. Estrutura de código

Front-end e back-end são **projetos totalmente separados**. Nunca coloque código de front e de back no mesmo projeto, diretório ou arquivo. A pergunta inicial (seção 0.0) define qual das duas estruturas vale para a sessão.

### 3.1 Estrutura do front-end (React)

```
front/
├── .github/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── server/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── index.jsx
├── docs/                        # documentação (seção 7.1)
├── .env
├── .gitignore
├── .yarnrc.yml
├── env-example
├── package.json
└── README.md
```

- Gerados automaticamente (nunca criar nem editar à mão): `node_modules/`, `build/`, `.yarn/`, `yarn.lock`, `package-lock.json`.
- Componente novo → `src/components/`. Tela nova → `src/pages/`. Chamada de API → `src/services/`. Rota nova → `src/routes/`.

### 3.2 Estrutura do back-end (Node.js)

```
back/
├── scripts/
├── src/
│   ├── api/
│   ├── controllers/
│   ├── cron/
│   ├── middlewares/
│   ├── modules/
│   ├── routes/
│   ├── scripts/
│   ├── services/
│   ├── templates/
│   ├── uploads/
│   ├── utils/
│   ├── app.js
│   ├── config.js
│   ├── cron.js
│   ├── router.js
│   └── server.js
├── docs/                        # documentação (seção 7.1)
├── .env
├── .env_example
├── .eslintrc.json
├── .gitignore
├── ecosystem.config_example.js
├── package.json
└── startPM2.bat
```

- Gerados automaticamente (nunca criar nem editar à mão): `node_modules/`, `package-lock.json`, arquivos de log.
- Rota nova → `src/routes/`. Lógica de negócio → `src/controllers/` e `src/services/`. Agendamento → `src/cron/`. Middleware → `src/middlewares/`.

### 3.3 Regras gerais de estrutura

- Antes de produzir qualquer coisa, consulte esta seção e a estrutura real do repositório para decidir onde o novo código deve viver.
- Se existirem **skills** dentro da estrutura do projeto, escolha e siga a skill que mais se adequa à customização ou modificação pedida, em vez de improvisar uma solução própria.

---

## 4. Banco de dados

### 4.1 Nomenclatura

Padrão obrigatório para colunas: `nomedacoluna_NOMEDATABELA`.

| Tabela   | Coluna          | Nome final              |
|----------|-----------------|-------------------------|
| CLIENTES | nome            | `nome_CLIENTES`         |
| CLIENTES | email           | `email_CLIENTES`        |
| PEDIDOS  | data de criação | `data_criacao_PEDIDOS`  |

### 4.2 Registro SQL obrigatório

- Todo o SQL do banco vive em `docs/banco-de-dados/schema.md`, **dentro do projeto back** (seção 3.2).
- Qualquer criação ou modificação — tabela nova, coluna nova, alteração de tipo, índice, constraint — deve ser registrada nesse arquivo com o **SQL completo** (o comando exato executado), na mesma tarefa em que a mudança acontece, nunca depois.
- O arquivo funciona como um changelog: entradas mais recentes no topo, cada uma com data e descrição curta.

Modelo de entrada:

````markdown
## 2026-07-09 — Nova coluna de telefone em CLIENTES

```sql
ALTER TABLE CLIENTES ADD COLUMN telefone_CLIENTES VARCHAR(20);
```

Motivo: o cadastro passou a exigir telefone de contato.
````

---

## 5. Front-end

- O foco é sempre **o que o usuário pediu** — entregue exatamente a funcionalidade solicitada antes de propor extras.
- **Nunca use emojis** na interface. Use sempre ícones (a biblioteca de ícones do projeto).
- **Nunca use frases genéricas de IA** em subtítulos, botões ou qualquer texto da interface. Evite fórmulas como "Desbloqueie todo o potencial", "Bem-vindo ao futuro de..." ou "Eleve sua experiência". Escreva textos diretos e específicos do produto.
- Rolagem de tela, trocas de tela, trocas de imagem e demais transições devem ter **animações suaves** e acabamento profissional.
- Nada na interface pode parecer uma imagem estática colada na tela — todo elemento deve reagir e se comportar como produto real (estados de hover, foco, carregamento e transição).

---

## 6. Back-end

- Estrutura totalmente separada do front-end (seções 3 e 3.2). Back e front nunca compartilham o mesmo código.
- Antes de produzir qualquer endpoint, serviço ou regra, consulte a seção "Estrutura de código" e a documentação do domínio correspondente em `docs/`.
- Código de teste ou funções auxiliares criadas só para validar algo devem ser excluídas imediatamente após o sucesso (ver princípio 3).

---

## 7. Documentação

### 7.1 Estrutura de pastas

Cada projeto tem a **sua própria** pasta `docs/` na raiz, separada por pastas com arquivos `.md` dentro.

No **front**:

```
docs/
├── telas/               # um .md por tela
├── componentes/         # um .md por componente relevante
└── arquitetura.md       # visão geral do front
```

No **back**:

```
docs/
├── rotas/               # um .md por grupo de rotas
├── servicos/            # um .md por serviço
├── banco-de-dados/
│   └── schema.md        # SQL completo + changelog (seção 4.2)
└── arquitetura.md       # visão geral do back
```

### 7.2 Regras

1. **Cobertura total.** Todas as telas, estruturas, front, back e banco de dados devem ter documentação.
2. **Link obrigatório no final.** Todo `.md` termina com uma seção `## Código relacionado` contendo link(s) relativo(s) para a rota ou arquivo correspondente dentro da estrutura de código, mantendo documentação e código sempre interligados. Exemplo: `[Tela de login](../../src/pages/Login.jsx)`
3. **Aviso de duplicidade.** Antes de criar documentação nova, verifique se já existe algo parecido. Se existir, avise o usuário e atualize o documento existente em vez de criar outro.
4. **Documente a partir do código real, nunca de memória.** Abra o arquivo-fonte e confirme nomes, caminhos e comportamento antes de escrever.
5. **Ordem de atualização** quando uma mudança afeta vários documentos:
   1. Documentos de domínio (`docs/**`);
   2. Regras de IA (este arquivo e equivalentes como `CLAUDE.md` / `AGENTS.md`, se existirem);
   3. `README.md` por último, porque ele resume os demais.
6. **Consistência entre documentos.** Nomes de funções, arquivos, tabelas e contagens devem ser idênticos em todos os `.md`. Se um arquivo mudou de lugar, atualize todos os documentos que o citam.
7. **Referências vivas.** Nenhum `.md` pode apontar para arquivo, função ou rota que não existe mais. Ao renomear ou excluir algo, atualize a documentação na mesma tarefa.
8. **Idioma único.** Toda a documentação em português (PT-BR). Nunca misture idiomas entre documentos.

### 7.3 Modelo de documento (tela, módulo ou domínio)

Todo `.md` novo segue esta estrutura:

1. **Objetivo** — o que este item faz e por quê;
2. **Visão geral** — comportamento e fluxo principal;
3. **Arquivos fonte de verdade** — caminhos reais no código;
4. **Modelo de dados / fluxo** — tabelas, colunas e integrações envolvidas;
5. **Regras críticas** — o que nunca pode ser quebrado;
6. **O que revisar antes de alterar** — checklist pré-mudança;
7. **Código relacionado** — links obrigatórios (regra 2 da seção 7.2).

---

## 8. Checklist final de toda tarefa

Antes de declarar uma tarefa concluída, confirme:

- [ ] Fiz a pergunta inicial (front ou back?) e trabalhei apenas no lado informado
- [ ] Conferi o status de estruturação (seção 0.1) do lado escolhido
- [ ] Li o código real envolvido antes de alterar ou documentar
- [ ] Verifiquei se já existia algo parecido e avisei o usuário, se aplicável
- [ ] Front e back permanecem em projetos separados
- [ ] Colunas e tabelas novas seguem o padrão `nomedacoluna_NOMEDATABELA`
- [ ] SQL completo registrado em `docs/banco-de-dados/schema.md` (projeto back)
- [ ] Interface sem emojis, sem frases genéricas de IA e com animações
- [ ] Código de teste excluído
- [ ] Documentação criada ou atualizada nas pastas corretas do projeto da sessão
- [ ] Todo `.md` alterado termina com link para o código relacionado
- [ ] Nenhum documento aponta para arquivo ou rota inexistente
