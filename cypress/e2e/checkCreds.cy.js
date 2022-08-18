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



const rese = {
    city: cities[getRandomInt(0,25)],
    address: getRandomInt(0,500)
}

describe('Check Credits', () => {
    it('Picks&Searches a random address and then on purchase checks if cred was used', () => {
        cy.visit('/')
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();
        cy.wait(1000)
        cy.get('#dropdown-user').click()
        cy.get('[href="/reports"]').click({force: true})
        cy.get('tbody').then((resu) => {
           console.log(resu[0].children.length)
        })
        cy.get('.row.col-12.p-1.m-0.summary_border > .col-12.col-md-4').then((res) => {
            let usedCreds = parseInt(res[1].children[1].children[0].children[1].textContent, 10)
            let unusedCreds = parseInt(res[2].children[1].children[0].children[1].textContent, 10)
            let newUsedCreds = usedCreds + 1
            let newUnusedCreds = unusedCreds - 1
            cy.get('[href="/home"] > img').click()
            cy.get('#dd-yoad1').click()
            cy.get('.dropdown-item.dropdown-item-city').then((menu) => {

                const cities = menu[rese.city]
                cy.get(cities).click({force: true})
              })
            cy.get('#userInputAddressMain').type('$' + rese.address)
            cy.get('#firstChildMainList').click()
            cy.url().should('include', 'summary')
            cy.get('#tab1 > #block > .lock_content_button').click()
            cy.get('#dropdown-user').click()
            cy.get('[href="/reports"]').click({force: true}).then((el)=> {
                cy.get('.row.col-12.p-1.m-0.summary_border > .col-12.col-md-4').then((res2) => {
                    let usedCreds2 = parseInt(res2[1].children[1].children[0].children[1].textContent, 10)
                    let unusedCreds2 = parseInt(res2[2].children[1].children[0].children[1].textContent, 10)
                    expect(usedCreds2.toString()).to.contain(newUsedCreds.toString())
                    expect(unusedCreds2.toString()).to.contain(newUnusedCreds.toString())
                    console.log(cy.get('thead > tr').children.length) 
                })
            })

        })
    })
})