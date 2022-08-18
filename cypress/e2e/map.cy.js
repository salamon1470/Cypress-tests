import '@percy/cypress';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



describe('The Map', () => {
      it('Testing cypress interaction with iframe/canvas', () => {
        cy.intercept('http://35.205.56.34/map').as('map')
        cy.visit('/map')
        cy.percySnapshot('Before');
        cy.get('#contours').click()
        cy.get('#contours').should('not.have.class', 'active')
        cy.percySnapshot('After');
        cy.get('#contours').click()
        cy.get('#contours').should('have.class', 'active')
        cy.get('#museums').click()
        cy.get('#museums').should('not.have.class', 'active')
        cy.get('#museums').click()
        cy.get('#museums').should('have.class', 'active')
        cy.wait('@map')
        
      }) 
})