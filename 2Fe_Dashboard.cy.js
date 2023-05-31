 /// <reference types="cypress" />
    describe('Dashboard Functionality', () => {
        before(() => {
          // Perform any setup or common actions needed for all test cases
        });
      
        it('Should open the Dashboard screen', () => {
          login();
      
          cy.visit('https://fe-beta.fleetenable.com/dashboard');
          cy.wait(4000);
          // Continue with assertions or interactions on the Dashboard screen
          cy.get('.ant-select-selection__rendered').click();
          cy.get('.ant-select-dropdown-menu > :nth-child(2)').click();
          cy.get('.ant-menu-item > .active');
          cy.get(':nth-child(3) > .ant-menu-submenu-title').click();
          cy.wait(4000);
          cy.get('.ant-btn.marginLeft10.ant-btn-primary').eq(0).click({ force: true });
          cy.get('button[type="button"]').eq(0).wait(2000);
          cy.get('.ant-calendar-picker-input');
          cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').type('08:30 AM', { force: true });
          cy.get('[style="margin-bottom: 15px;"] > .ant-select > .ant-select-selection').then(() => {
            cy.get('input[type="checkbox"]').first().check();
            cy.get('.ant-table-thead > tr > .ant-table-selection-column').first();
            cy.get('.marginRight5').click();
          });
      
          after(() => {
            // Perform any cleanup or common actions needed after all test cases
          });
        });
      });
