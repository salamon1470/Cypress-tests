Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let cities = [18,15,14,17,20,11,10,16,98,93,24,12,97,96,122,28,25,13,94,21,95,19,26,8,9,123,100]



const res = {
    city: cities[getRandomInt(0,25)],
    address: getRandomInt(0,500)
}

describe('Random Address Select', () => {
    it('Picks&Searches a random address', () => {
        cy.visit('/')
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();
        cy.wait(1000)
        cy.get('#dd-yoad1').click()
        cy.get('.dropdown-item.dropdown-item-city').as('menu')
        cy.get('@menu').then((menu) => {
            
            const cities = menu[res.city]
            cy.get(cities).click({force: true})
          })
        cy.get('#userInputAddressMain').type('$' + res.address)
        cy.get('#firstChildMainList').click()
        cy.url().should('include', 'summary')
    })
})

// create object for handling the cities and the addresses, for now static values, in the future this would be used to interact with the parsed data from the api as json