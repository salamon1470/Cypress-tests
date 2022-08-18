

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('The Home Page', () => {
      it('Selects an address and redirects to login', () => {
        cy.visit('/')
        
        // cy.get('.pricing-tab-switcher').click()
        cy.get('.monthly_price').contains('11,000 ₪ לשנה')
        
      }) 
    })
    