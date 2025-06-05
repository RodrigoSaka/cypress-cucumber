import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

interface TestWindow extends Window {
  generateJWT: () => string;
}

let injectedToken: string;

const attachGenerateJWT = (win: TestWindow) => {
  win.generateJWT = () => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ user: 'demo', iat: Math.floor(Date.now() / 1000) }));
    const signature = btoa('secret');
    return `${header}.${payload}.${signature}`;
  };
};

Given('I open the demo page injecting a JWT', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      const w = win as unknown as TestWindow;
      attachGenerateJWT(w);
      injectedToken = w.generateJWT();
      (w as any).token = injectedToken;
    }
  });
});

Then('the token property should exist on the body', () => {
  cy.get('body').should($body => {
    const bodyToken = ($body.get(0) as any).token;
    expect(bodyToken).to.equal(injectedToken);
  });
});

Then('I can call the generateJWT function later', () => {
  cy.window().then(win => {
    const w = win as unknown as TestWindow;
    const newToken = w.generateJWT();
    expect(newToken).to.be.a('string');
  });
});
