# Cypress + Cucumber Example

Este repositório demonstra como integrar [Cypress](https://www.cypress.io/) e [Cucumber](https://cucumber.io/) utilizando TypeScript. Ele pode servir de ponto de partida para criação de testes end‑to‑end escritos em Gherkin e executados no Cypress, com geração de relatórios de execução.

## Requisitos

- Node.js 16+ e npm

## Instalação

```bash
npm install
```

## Scripts disponíveis

- `npm run build` – compila o `server.ts` com `tsc` e empacota os arquivos de `src/` com Vite, gerando a pasta `dist/public`.
- `npm start` – inicia o servidor Node para servir os arquivos de `dist/public`.
- `npm test` – executa o Cypress em modo headless.
- `npm run run:tests` – executa o Cypress e gera o relatório consolidado em `coverage/reports.html`.
- `npm run cy:open` – abre a interface interativa do Cypress.
- `npm run run:all` – faz a build, inicia o servidor e roda os testes de uma só vez.

## Executando os testes

Após compilar o projeto, inicie o servidor e rode o Cypress:

```bash
npm run build
npm start        # em um terminal
npm run run:tests  # em outro terminal
```

Para automatizar o processo acima, utilize:

```bash
npm run run:all
```

Ao final um relatório consolidado estará disponível em `coverage/reports.html`.

## Estrutura do projeto

```
cypress-cucumber/
├── cypress/              # testes, features e steps em Gherkin
├── src/                  # código frontend em TypeScript
├── server.ts             # servidor Node para servir os arquivos
├── index.html            # página de exemplo
└── run-all.sh            # script utilitário para build + servidor + testes
```

Os testes encontram-se em `cypress/e2e`, utilizando o preprocessor `@badeball/cypress-cucumber-preprocessor`.

## Licença

Distribuído sob a licença ISC.
