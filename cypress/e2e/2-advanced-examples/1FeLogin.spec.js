// Define a custom Cypress command to visit the website and define the outdatedBrowserRework function
Cypress.Commands.add('visitWithOutdatedBrowser', () => {
  cy.visit('https://fe-beta.fleetenable.com', {
    onBeforeLoad: (win) => {
      win.outdatedBrowserRework = () => {}; // Define the outdatedBrowserRework function
    },
  });
});

// Perform any setup or common actions needed for all test cases
describe('Login spec', () => {
  beforeEach(() => {
    // Use the custom command to visit the website with outdatedBrowserRework
    cy.visitWithOutdatedBrowser();
  });

  it('Invalid Login Credentials', () => {
    // Test case for invalid login credentials
    cy.get('#auth_form_email').type('nm@fleetenable.com');
    cy.get('#auth_form_password').type('Test1222');
    cy.get('.anticon-eye-invisible').click();
    cy.get('.ant-btn-primary').click();
    // Add assertions to verify login failure and error message
  });

  it('Empty Email and Password', () => {
    // Test case for empty email and password fields
    cy.get('.ant-btn-primary').click();
    // Add assertions to verify login failure and error message
  });

  it('Forgot Password', () => {
    // Test case for "Forgot Password" functionality
    cy.get('.ant-btn-link').click();
    // Click on the "Forgot Password" link
    // Verify that the user is redirected to the password reset page
  });

  it('Valid Login Credentials', () => {
    cy.get('#auth_form_email.ant-input', { timeout: 10000 }).type('nm@fleetenable.com');
    cy.get('#auth_form_password').type('test1234');
    cy.get('.anticon-eye-invisible', { timeout: 10000 }).click(); // Increase timeout and ensure correct selector
    cy.get('.ant-btn-primary').click();
    // Add assertions to verify successful login
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
    });
    cy.wait(500);
    // Continue with other validations or test cases after successful login
  });

  // Add more test cases for other scenarios

  // Perform any cleanup or common actions needed after all test cases
  after(() => {
    // Perform any cleanup or common actions needed after all test cases
  });
});
