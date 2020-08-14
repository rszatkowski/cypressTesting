/// <reference types = "cypress"/>

import {openApp, goToAccountSettings, createAccount, loginToSystem} from "../../pages/dmmMockSettingsPage"
import {logoutFromSystem} from "../../pages/dmmMainPage"
import {getURL} from "../../Utils/copyItems"



describe('DMM first Test', () => {
  it('Step 1: Go to the app', () => {
    openApp()
})

  it('Step 2: Go to the settings tab', () => {
  goToAccountSettings()
})

  it('Step 3: Create an account', () => {
  
  createAccount()
  getURL()
  
})

it('Step 4: Login to the system', () => {
 loginToSystem()
})

it('Step 5: Logout from the system', () => {
  logoutFromSystem()  
 })
 


})










