  // Perform any setup or common actions needed for all test cases
  
const login = () => {
  cy.visit('https://fe-beta.fleetenable.com', {
    onBeforeLoad: (win) => {
      win.outdatedBrowserRework = () => {}; // Define the outdatedBrowserRework function
    },
  });
  cy.get('#auth_form_email').type('nm@fleetenable.com');
  cy.get('#auth_form_password').type('test1234');
  cy.get('.anticon-eye-invisible', { timeout: 10000 }).click(); // Increase timeout and ensure correct selector
  cy.get('.ant-btn-primary').click();
  // Add assertions to verify successful login
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    return false;
  });
  cy.wait(500);
};

it('Valid Login Credentials', () => {
  login();
  // Continue with other validations or test cases after successful login
});

it('Invalid Login Credentials', () => {
  // Test case for invalid login credentials
  cy.visit('https://fe-beta.fleetenable.com', {
  onBeforeLoad: (win) => {
    win.outdatedBrowserRework = () => {}; // Define the outdatedBrowserRework function
  }
});
cy.get('#auth_form_email').type('nm@fleetenable.com');
cy.get('#auth_form_password').type('Test1222');
cy.get('.anticon-eye-invisible').click();
cy.get('.ant-btn-primary').click();
// Add assertions to verify login failure and error message
});

it('Empty Email and Password', () => {
// Test case for empty email and password fields
cy.visit('https://fe-beta.fleetenable.com');
cy.get('.ant-btn-primary').click();
// Add assertions to verify login failure and error message
});

it('Forgot Password', () => {
// Test case for "Forgot Password" functionality
cy.visit('https://fe-beta.fleetenable.com');
cy.get('.ant-btn-link').click();
// Click on the "Forgot Password" link
// Verify that the user is redirected to the password reset page
});

// Add more test cases for other scenarios

after(() => {
  // Perform any cleanup or common actions needed after all test cases
});


