

describe( 'Log in with Fleetenable app' ,() => 
 {
    
      it( 'Should work', ()=>
    
     {
      //login the web page//
        cy.visit ('https://app.fleetenable.com')
        cy.get ('#user_email').type('demouser@fleetenable.com');
        cy.wait(2000);  
        cy.get('#user_password').type('test1234');
        cy.get('.btn').click()
          
     })
    Cypress. on('uncaught:exception', (err,runnable) => 
    { return false; })



//Opening the Dashboard wqindow//
    it('should open dashboard',() =>
    {
      
         it('should check correct url',()=> {
//checking the correct URL is loading or not//
            cy.url().should('include','app.fleetenable.com/dashboard')
         })
        
         cy.get('body').click()
         cy.wait(4000);
         cy.get(':nth-child(7) > .ant-menu-submenu-title').click()

        
    });
    

})
    