/// <reference types = 'cypress'/>

import {getRandomAccountId} from "../Utils/randomIdGenerator"

const URL_dev = "https://admin-tool-mock-frontend-dev.okd.conti-tts.synapse.com/login"

export const accountSettingsTab = '[href="/settings"]'
export const quickCreateButton = '.mat-button-wrapper'
export const inputNameLoginUser = '[name="name"]'
export const saveButton = '.mat-button-wrapper'
export const loginButton = '[title="Login to DMM"]'
export const accountId = '.mat-column-id'

let credentials = getRandomAccountId(6)


export function openApp(){
    cy.visit(URL_dev)
}

export function goToAccountSettings(){
    cy.get(accountSettingsTab).click()
}

export function createAccount(){
    
    cy.get(quickCreateButton).contains('Quick Create').click()
    cy.get(inputNameLoginUser).type(credentials)    
    cy.get(saveButton).contains('Save').click()
}

export function loginToSystem(){
    cy.get(loginButton).click()
}










