Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Contact us', () => {
      it('Cicks on contact us and redirects to a form', () => {
        cy.visit('/')
        
        cy.get('.btn20.pix-btn.btn-outline.btn-round')
        .click()
        
        cy.origin('https://share-eu1.hsforms.com/1ZMrkOhKwR06XVhv8xsGS5gf9mhx', () => {
            //access to new origin
            })
        cy.url().should('include', '/share-eu1.hsforms.com')
      }) 
    })