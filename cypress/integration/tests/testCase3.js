/// <reference types = "cypress"/>

describe('Test dedicated to fail', () => {

  it('Step 1: Go to the site', () => {
    cy.visit('www.google.com')
  })


  it('Step 2: Go to register tab', () => {
    
    //::::::Standard Assertion
    cy.get('.gb_oe').contains('Zaloguj')
    
    //::::::Extended Assertion
    
    //Should --waits for elements - better to use 
    cy.get('.gb_oe').should((elements) => {
        expect(elements).to.contains.text('Zaloguj')
    })

    //Then --is not waiting 
    cy.get('.gb_oe').then((elements) => {
      expect(elements).to.contains.text('Zaloguj')
  })

})

//Using different data for DEV or PROD
it('Step 3: Input data', () => {
  cy.fixture(`googleSearch-${Cypress.env("ENV")}`).then(data=>{
    cy.get('[name="q"]').type(data.search)
  })

  
})




  })





