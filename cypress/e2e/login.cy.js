Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('The Login Page', () => {
      it('logs in with wrong email and correct password', () => {
        cy.visit('/login')
    
        cy.get('#username').type('qa-israela@snap.land');
        cy.get('#password').type('Aa12345678');
        cy.get('#login').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains('שם משתמש או סיסמא שגויים');
        });

        cy.url().should('include', '/login')
      }) 
    })
    describe('The Login Page', () => {
        it('logs in with correct email and wrong password', () => {
          cy.visit('/login')
      
          cy.get('#username').type('qa-israel@snap.land');
          cy.get('#password').type('Aa123456789');
          cy.get('#login').click();
  
          cy.on('window:alert', (text) => {
              expect(text).to.contains('שם משתמש או סיסמא שגויים');
          });
        //   cy.get('#login').click();
  

        //   cy.get('#login').click();

          
          cy.url().should('include', '/login')
        }) 
      })
    

    //qa-israel@snap.land
    //Aa12345678