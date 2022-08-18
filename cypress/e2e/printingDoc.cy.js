Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

const hello = 'hello'


describe('Printing reports', () => {
    it('Checks printing after buying the report', () => {
        cy.visit('/')
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();
        cy.wait(1000)
        cy.get('#dropdown-user').click()
        cy.get('[href="/reports"]').click({force: true})
        cy.intercept('/Israel/Haifa/12263/164/').as('page')
        cy.on('window:before:load', (win) => {
          // just log the win.location.href for convenience
          console.log('WINDOW BEFORE LOAD', win.location.href)
      
          // if we're trying to load the page we want to stop, win.stop()
          if (win.location.href === 'https://app.snap.land/Israel/Haifa/12263/164') {
            win.stop()
          }
        })
        cy.get('[href="/Israel/Haifa/12263/164"]').click()
        cy.wait('@page')
        cy.get('.share_button > img', {
          timeout: 5000
        }).should('be.visible').click()
        cy.get('.dropdown-item').should('not.have.class', 'disable_button')
        cy.get('[href="https://app.snap.land/Israel/Haifa/12263/164/Print"]').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/Israel/Haifa/12263/164/Print')

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