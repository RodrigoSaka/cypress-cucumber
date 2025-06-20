import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import codeCoverageTask from '@cypress/code-coverage/task';

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
      codeCoverageTask(on, config);
      return config;
    },
    env: {
      stepDefinitions: 'cypress/e2e/steps/*.ts'
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'coverage/junit/results-[hash].xml',
      toConsole: false,
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'http://localhost:3000',
  },
});
