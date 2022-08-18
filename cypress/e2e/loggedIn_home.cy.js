Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('The Home Page', () => {
      it('logs in with correct email and correct password', () => {
        cy.visit('/login')
    
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();

        cy.url().should('include', '/home')
      }) 
    })
    

    //qa-israel@snap.land
    //Aa12345678