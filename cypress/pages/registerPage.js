/// <reference types = 'cypress'/>


const firstName = '[name="firstName"]'
const lastName = '[name="lastName"]'
const phone = '[name="phone"]'
const email = '[name="userName"]'

const address = '[name="address1"]'
const city = '[name="city"]'
const stateProvince = '[name="state"]'
const postalCode = '[name="postalCode"]'
const countryList = '[name="country"]'

const userName = '[name="email"]'
const password = '[name="password"]'
const confirmPassword = '[name="confirmPassword"]'

const submitButton = '[name="register"]'


export function registerAccount(){

    cy.fixture('account').then((account)  => {
        
        writeDown(firstName, account.firstName)
        writeDown(lastName, account.lastName)
        writeDown(phone, account.phone)
        writeDown(email, account.email)

        writeDown(address, account.address)
        writeDown(city, account.city)
        writeDown(stateProvince, account.stateProvince)
        writeDown(postalCode, account.postalCode)
        cy.get(countryList).select(account.country)

        writeDown(userName, account.userName)
        writeDown(password, account.password)
        writeDown(confirmPassword, account.confirmPassword)
    })
  
    cy.get(submitButton).click()
}

export function verifyAccount(){
    cy.contains('Note: Your user name is '+ accountName + '.')
}


function writeDown(inputform, inputValue){
    return cy.get(inputform).type(inputValue)
}








