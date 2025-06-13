import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    env: {
      stepDefinitions: 'cypress/e2e/steps/*.ts'
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'coverage',
      overwrite: false,
      html: false,
      json: true,
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',
  },
});
