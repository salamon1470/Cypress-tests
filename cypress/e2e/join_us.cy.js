Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Join us', () => {
      it('Cicks on Join and redirects to a form', () => {
        cy.visit('/')
        
        cy.get('.mdc-button__label').first()
        .click()
        
        cy.url().should('include', '/register')
      }) 
    })