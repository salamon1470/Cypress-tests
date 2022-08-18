Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('Check arrows&Links', () => {
    it('tests the read more button and the external links', () => {
        cy.visit('/')
        cy.get('#username').type('qa-israel@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();
        cy.wait(1000)
        cy.get('#dropdown-user').click()
        cy.get('[href="/reports"]').click({force: true})
        cy.get('[data-index="1"] > [style="width: 180px; "]').click()
        cy.get(':nth-child(2) > .row.p-0 > :nth-child(2) > .vertical-table > div > .table > tbody > :nth-child(2) > .td-vertical > .morecontent > .morelink > .fa-solid').click()
        cy.get(':nth-child(2) > .row.p-0 > :nth-child(2) > .vertical-table > div > .table > tbody > :nth-child(2) > .td-vertical > .morecontent > span').should('have.css', 'display', 'inline')
        cy.get(':nth-child(2) > .row.p-0 > :nth-child(2) > .vertical-table > div > .table > tbody > :nth-child(2) > .td-vertical > .morecontent > .morelink > .fa-solid').click()
        cy.get(':nth-child(2) > .row.p-0 > :nth-child(2) > .vertical-table > div > .table > tbody > :nth-child(2) > .td-vertical > .morecontent > span').should('have.css', 'display', 'none')
        cy.get('[aria-label="3 / 7"] > .swiper-slide-container').click()
        cy.get('#tab3 > :nth-child(1) > .col-12 > .m-0').click()
        cy.get('#tab3_1 > :nth-child(1) > .link_href').invoke('removeAttr', 'target').click()
        cy.url().should('not.include', 'snap.land')
    })
})