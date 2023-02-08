
    it('should open dash board',() =>
    {
        cy.visit('https://app.fleetenable.com/dashboard')
        cy.get('body').click()
        cy.wait(4000);

        cy.get(':nth-child(7) > .ant-menu-submenu-title').click()

        
    });