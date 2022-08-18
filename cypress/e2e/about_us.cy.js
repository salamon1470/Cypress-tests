

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('About us', () => {
      it('Clicks on אודות from the nav bar and redirects to the about us page', () => {
        cy.visit('/')

        cy.get('.nav-tabs-snapland').contains('עלינו').trigger('mouseover',{force: true})
        cy.get('.sub-menu').first().trigger('mouseover',{force: true})
        //needs to be checked with responsive design, now element is not clickable in a different window size 
        cy.contains('אודות').click({force: true})
    
        
        cy.url().should('include', '/about')
      }) 
    })
    