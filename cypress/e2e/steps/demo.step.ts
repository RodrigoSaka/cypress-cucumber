import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the demo page', () => {
  cy.visit('/');
});

When('I click the change button', () => {
  cy.get('#change').click();
});

Then('I should see the text {string}', (text) => {
  cy.get('#title').should('have.text', text);
});
