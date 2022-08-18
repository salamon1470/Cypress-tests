

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('How it works section', () => {
      it('Clicks on איך זה עובד from the nav bar and checks if some content exits on the page', () => {
        cy.visit('/')

        cy.get('.nav-tabs-snapland').contains('עלינו').invoke('show')
        cy.get('.sub-menu').first().invoke('show')
        //needs to be checked with responsive design, now element is not clickable in a different window size, for now force must be used 
        cy.contains('עיתונות').click({force: true})

        cy.get('.col-lg-4.col-md-6')
    
        
        cy.url().should('include', '/press')
      }) 
    })
    