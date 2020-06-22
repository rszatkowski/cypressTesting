/// <reference types = "cypress"/>


const URL_dev = "https://admin-tool-mock-frontend-dev.okd.conti-tts.synapse.com/login"
const URL_stg = "https://www.at.my-fis.com/dmm50/login/login"
const URL_activation_tool = "https://working-archive-storage-service-dev.okd.conti-tts.synapse.com/management/transition/"

let credentials = makeId(6)

const accountSettingsTab = '[href="/settings"]'
const quickCreateButton = '.mat-button-wrapper'
const inputNameLoginUser = '[name="name"]'
const saveButton = '.mat-button-wrapper'
const loginButton = '[title="Login to DMM"]'
const accountId = '.mat-column-id'

const inputActivation = '#accountId'
const enableActivation = '[value="Enable"]'

describe('DMM first Test', () => {

  it('Step 1: Go to the site', () => {
    cy.visit(URL_dev)
    cy.get(accountSettingsTab).click()
    cy.get(quickCreateButton).contains('Quick Create').click()
    cy.get(inputNameLoginUser).type(credentials)    
    cy.get(saveButton).contains('Save').click()
    cy.get(accountId)
    
    getURL()

    getAccountId()

    cy.visit(URL_activation_tool)

    cy.get('@formattedID').then(formattedID => {
      cy.log(formattedID)
      cy.get(inputActivation).type(formattedID)
    })

    cy.get(enableActivation).click()

    cy.get('@someURL').then(someURL => {
      cy.visit(someURL)
    })
    
    cy.get(loginButton).click()
      
})


})

function getURL(){
  cy.url().then((accountURL)=>{
    cy.wrap(accountURL).as('someURL')
  })
}


function getAccountId(){
  cy.get(accountId).contains('ID: ').then((accountId)=>{
    const formattedID = getIdFromString(accountId.text())
    cy.wrap(formattedID).as('formattedID')
  })
}

function getIdFromString(accountString){
  return accountString.split(":")[1].trim()
}

function makeId(length) {
  var result           = '';
  var characters       = '0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return 'testAccount' + result;
}




