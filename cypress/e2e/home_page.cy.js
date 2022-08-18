

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('The Home Page', () => {
    it('Selects an address and redirects to login', () => {
      cy.visit('/')
      
      cy.get('#dd-yoad1.btn.choosecityinner.dropdown-toggle')
      .click()
      
      cy.get('.dropdown-item.dropdown-item-city')
      .contains('חיפה')
      .click()

      cy.get("#userInputAddressMain.ui-autocomplete-input")
      .type('סילבר אבא הלל 109 ')

      cy.get('#firstChildMainList')
      .click()
      
      cy.url().should('include', '/login')
    }) 
  })
  