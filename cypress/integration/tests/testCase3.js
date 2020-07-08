/// <reference types = "cypress"/>

import {openApp, goToAccountSettings, createAccount, loginToSystem} from "../../pages/dmmMockSettingsPage"

describe('DMM first Test', () => {

  it('Step 1: Go to the app', () => {
    openApp()
})

  it('Step 2: Go to the settings tab', () => {
  goToAccountSettings()
})

  it('Step 3: Create an account', () => {
  createAccount()
})


//tutaj metoda 

  it('Step 4: Login to the system', () => {
  loginToSystem()
})

})










