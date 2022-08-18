Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Cities and plans list', () => {
      it('Cicks on a button and redirects to the cities and plans list', () => {
        cy.visit('/')
        
        cy.get('#how_it_work.pix-btn.btn-outline.btn-round')
        .click()

        cy.get('#bttn.btn.btn-link.collapsed')
        .click({multiple: true})
        cy.get('.row.rowspan')
        .children('.col-lg-2.col-md-4.col-sm-6')
        //
        cy.url().should('include', '/cities')
      }) 
})