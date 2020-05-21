/// <reference types = 'cypress'/>

const url = 'http://newtours.demoaut.com/'
const signInTab = 'SIGN-ON'
const registerTab = 'REGISTER'


export function navigateToSite(){
    cy.visit(url) 
    cy.contains(signInTab).should('be.visible')
}

export function goToRegisterTab(){
    cy.contains(registerTab).click()
    cy.contains('Contact Information').should('be.visible') 
}


