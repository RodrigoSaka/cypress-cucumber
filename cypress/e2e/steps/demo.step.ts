import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

interface TestWindow extends Window {
  generateJWT: () => string;
  token?: string;
}

Given('I open the demo page', () => {
  cy.visit('/');
});

When('I click the change button', () => {
  cy.get('#change').click();
});

Then('I should see the text {string}', (text) => {
  cy.get('#title').should('have.text', text);
});

Given('I open the demo page with a test token', () => {
  cy.visit('/', {
    onBeforeLoad(win: any) {
      const w = win as TestWindow;
      w.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZGVtbyIsImlhdCI6MTc1MDQ2NTIyMH0=.c2VjcmV0';
    }
  });
});

Then('I should see the token displayed in the page', () => {
  cy.window().then((win: any) => {
    cy.get('#token').should('be.visible');
    cy.get('#token').should('have.text', (win as TestWindow).token);
  });
});
