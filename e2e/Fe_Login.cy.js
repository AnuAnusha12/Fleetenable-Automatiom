/// <reference types="cypress" />

describe( 'Log in with Fleetenable app' ,() => 
 {
    
      it( 'Should work', ()=>
    
     {
        cy.visit ('https://app.fleetenable.com/')
        cy.get ('#user_email').type('demouser@fleetenable.com');
        cy.wait(2000);
        cy.get('#user_password').type('test1234');
        cy.get('.btn').click()
          
     })
    Cypress. on('uncaught:exception', (err,runnable) => 
    { return false; })

    it('seleting the sidemenu',() =>{
        cy.get(':nth-child(14) > .ant-menu-submenu-title').click()
        {
            <select>
                <option value='User'> User</option>
                <option value= 'Upload orders'> Upload orders</option>
            </select>
        
            

        }
      
    });
    

})
    