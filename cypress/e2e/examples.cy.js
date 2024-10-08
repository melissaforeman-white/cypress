describe('Examples test', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('Multi-page testings', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location("pathname").should("equal", "/")

        cy.getDataTest('nav-overview').click()
        cy.location("pathname").should("equal", "/overview")

        cy.getDataTest('nav-fundamentals').click()
        cy.location("pathname").should("equal", "/fundamentals")

        cy.getDataTest('nav-forms').click()
        cy.location("pathname").should("equal", "/forms")
    })
    
    it.only('intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })

})