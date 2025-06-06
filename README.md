# Cypress Cucumber Example

Este projeto demonstra como usar Cypress junto com Cucumber para testes E2E, agora escrito em TypeScript.

## Instalação

```bash
npm install
```

## Executando

Primeiro, construa o projeto. O comando utiliza o `tsc` para compilar o
`server.ts` e o [Vite](https://vitejs.dev/) para empacotar o código
TypeScript da pasta `src`:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/public` e serão servidos pelo servidor Node.

Em seguida, inicie o servidor de exemplo:

```bash
npm start
```

Em outro terminal, execute os testes:

```bash
npm test
```

### Script único

Para realizar a build, subir o servidor e rodar os testes de uma só vez:

```bash
npm run run:all
```

Para abrir a interface interativa do Cypress:

```bash
npm run cy:open
```

Os testes estão localizados em `cypress/e2e` usando o formato Gherkin (`.feature`).
