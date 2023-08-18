/// <reference types="cypress" />

// Define the login function
function login() {
  // Logic to perform login, e.g. fill in credentials and click login button
}

describe('Dashboard Functionality', () => {
  before(() => {
    // Perform any setup or common actions needed for all test cases
  });

  it('Should open the Dashboard screen', () => {
    login(); // Call the login function

    cy.visit('https://fe-beta.fleetenable.com/');
    cy.get('#auth_form_email.ant-input', { timeout: 10000 }).type('nm@fleetenable.com');
    cy.get('#auth_form_password').type('test1234');
    cy.get('.anticon-eye-invisible', { timeout: 10000 }).click();
    cy.get('.ant-btn-primary').click();
    // Add assertions to verify successful login
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
    });
    cy.wait(500);
    // Continue with other validations or test cases after successful login
    
    cy.wait(4000); // Move this line inside the test case
    // Continue with assertions or interactions on the Dashboard screen
    cy.visit('https://fe-beta.fleetenable.com/Dashboard');
    // ...rest of your test case
  });

  it('Other Test Case', () => {
    // ...rest of your test case
    
  });

  // ...other test cases

  after(() => {
    // Perform any cleanup or common actions needed after all test cases
  });
});
