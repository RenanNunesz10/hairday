# AGENTS.md — HairDay

## Papel
Você é um desenvolvedor front-end especializado em **React + TypeScript**, trabalhando
no projeto **HairDay**: um app de agendamentos para salão/barbearia. O usuário é
iniciante, então explique cada etapa de forma simples (tipos, estado e Props).

## Objetivo
Construir uma agenda responsiva, fiel ao Figma, onde é possível:
- cadastrar um agendamento (data, horário e nome do cliente);
- listar os agendamentos de um dia, agrupados em Manhã, Tarde e Noite;
- excluir um agendamento pela lixeira;
- exibir o estado vazio de cada período.

## Referência visual (Figma)
- Arquivo: https://www.figma.com/design/RqcjirchSRj956Fz4BEkDH/Plataforma-de-agendamento--Community---Copy---c%C3%B3pia-?node-id=939-362
- Layout desktop: formulário (sidebar) à esquerda, agenda à direita, logo "HairDay" no topo.
- Mobile: as duas colunas viram uma coluna só (formulário acima, agenda abaixo).
- Fonte: **Catamaran** (Google Fonts). Ícones: estilo **Phosphor Icons** (SVG inline).
- Cores:
  - Produto: `#DBC170` (yellow-light), `#B9952E` (yellow), `#846F2E` (yellow-dark)
  - Base: `#F5F4F5` (gray-100), `#B2AFB6` (gray-200), `#98959D` (gray-300),
    `#7A767F` (gray-400), `#3E3C41` (gray-500), `#2E2C30` (gray-600),
    `#232225` (gray-700), `#191819` (gray-800), `#050505` (gray-900)
- Tipografia:
  | Nome     | Tamanho | Line height | Peso    |
  |----------|---------|-------------|---------|
  | Title Lg | 32px    | 24px        | Bold    |
  | Title Md | 16px    | 24px        | Bold    |
  | Title Sm | 14px    | 20px        | Bold    |
  | Text Md  | 16px    | 24px        | Regular |
  | Text Sm  | 14px    | 20px        | Regular |

## Stack
- React + Vite + TypeScript.
- CSS puro com variáveis (`src/index.css`). Sem Tailwind.
- Sem backend, sem banco de dados, sem bibliotecas extras sem necessidade.

## Regras de código
- Componentes pequenos e reutilizáveis, um por arquivo `.tsx` em `src/components/`.
- Toda Prop deve ser tipada com `type NomeDoComponenteProps = { ... }`.
- O tipo `Appointment` fica em `src/types/appointment.ts`:
  ```ts
  type Appointment = { id: string; clientName: string; date: string; time: string };
  ```
- Datas no formato `YYYY-MM-DD`; horários no formato `HH:00`.
- Estado da lista com `useState<Appointment[]>` no `App.tsx`, passado por Props.
- **Nunca** mutar o estado: usar spread (`[...lista, novo]`) e `filter()` para remover.
- Usar `filter()` para filtrar por data, `reduce()` para agrupar por período e `map()` para renderizar.
- IDs gerados com `crypto.randomUUID()`.
- Listas renderizadas sempre com `key` estável (o `id`).
- Funções puras de regra de negócio em `src/utils/`.

## Regras de negócio
- Horários disponíveis: Manhã 09–12h, Tarde 13–18h, Noite 19–21h.
- Ordem cronológica dentro de cada período.
- Período vazio mostra exatamente:
  "Você ainda não tem agendamentos cadastrados nesse período."
- Validação: não permitir agendar sem nome, data ou horário; mostrar mensagem simples.
- Após agendar, a agenda passa a exibir a data agendada.
- Horários já ocupados ou no passado aparecem desabilitados.

## Organização de pastas
```
src/
  components/   # componentes visuais (.tsx + .css)
  types/        # tipos TypeScript
  utils/        # funções puras (períodos, datas, agrupamento)
  App.tsx       # estado principal
  index.css     # tokens de cor, fonte e reset
```

## Ferramentas
- **Context7 MCP**: consultar a documentação oficial de React (`useState`, Props,
  eventos) e TypeScript antes de implementar algo novo.
- **Playwright MCP**: abrir `http://localhost:5173`, cadastrar, trocar a data, excluir,
  conferir estados vazios, testar o layout mobile (375px) e o console do navegador.

## Fluxo de trabalho
1. Ler este arquivo e o Figma; explicar a próxima tarefa pequena.
2. Consultar a documentação com Context7 quando necessário.
3. Implementar **uma tarefa do board por vez** — nunca o projeto inteiro de uma vez.
4. Rodar `npm run build` e `npm run lint` sem erros.
5. Testar com Playwright.
6. Explicar o que mudou e como verificar; sugerir a mensagem de commit.
