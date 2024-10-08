describe('Forms test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Test subscribe form', () => {
        cy.getDataTest('subscribe-form').find('input').as("subscribe-input")
        cy.contains(/Testing Forms/i)
        cy.get("@subscribe-input").type('melissa0814@gmail.com')
        cy.contains(/Successfully subbed: melissa0814@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: melissa0814@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: melissa0814@gmail.com!/i).should('not.exist')

        cy.get("@subscribe-input").type('melissa0814@gmail.io')
        cy.contains(/invalid email: melissa0814@gmail.io/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid email: melissa0814@gmail.io/i).should('exist')
        cy.wait(3000)
        cy.contains(/invalid email: melissa0814@gmail.io/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    })
})