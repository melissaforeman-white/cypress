describe('Fundamentals test', () => {
  // sets up the environment
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    // regex that is case insensitive, this is good so you can change the case as needed
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)

    // this is my custom test which is doing the same thing as above
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    // targeting the class data-test with a value of accordion item 1 and a div of role of button
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})

// describe function takes a string and a callback function as arguments
// in body of second argument has the tests


// it function is for individual tests for function page
// takes string and a callback function as arguments
// body of callback function contains test code


// write longer tests than in this example