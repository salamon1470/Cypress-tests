Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const hello = 'hello'


describe('Printing reports', () => {
    it('Checks printing after buying the report', () => {
        cy.visit('https://app.snap.land/')
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();
        cy.wait(2000)
        cy.visit('https://app.snap.land/Israel/Haifa/12263/164', {timeout: 200000})
        cy.get('.share_button > img').click()
        cy.get('.dropdown-item').should('not.have.class', 'disable_button')
        cy.get('[href="https://app.snap.land/Israel/Haifa/12263/164/Print"]').invoke('removeAttr', 'target').click()
        // cy.url().should('include', '/Israel/Haifa/12263/164/Print')
        
        

    }) 
})

// describe('Printing reports', () => {
//     it('Checks printing before buying the report', () => {
//       cy.visit('/')
//       cy.get('#username').type('qa-israel@snap.land');
//       cy.get('#password').type('Aa12345678');
//       cy.get('#login').click();
//       cy.wait(2000)
//       cy.visit('https://app.snap.land/Israel/Haifa/12264/27/#summary')
//       cy.get('.dropdown-item').should('have.class', 'disable_button')
//     }) 
// })