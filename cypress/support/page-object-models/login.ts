/* eslint-disable no-unused-vars */
const btnAccount = 'button#navbarAccount'
const btnLogin = 'button#navbarLoginButton'
const txtEmail = 'input#email'
const txtPassword = 'input#password'
const btnLoginMain = 'button#loginButton'
const btnCloseBanner ='button[aria-label="Close Welcome Banner"]'

Cypress.Commands.add("loginIntoApplication", (email, password) => {
  cy.visit(Cypress.env('url'))  
  cy.get(btnCloseBanner).should('be.visible')
    .click()
  cy.get(btnAccount).should('be.visible')
    .click()
  cy.get(btnLogin).should('be.visible')
    .click()
  cy.get(txtEmail).should('be.visible')
    .type(email)
  cy.get(txtPassword).should('be.visible')
    .type(password)
  cy.get(btnLoginMain).should('be.visible')
    .click()
});

// eslint-disable-next-line no-undef
Cypress.Commands.add("writeDataInFile", (path, nameof, value) => {
  cy.readFile(path)
    .then((obj) => {
      const myName = nameof;
      const actualObj = obj;
      actualObj[myName] = value;
      cy.writeFile(path, actualObj);
    });
});