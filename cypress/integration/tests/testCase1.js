/// <reference types = "cypress"/>

import {navigateToSite, goToRegisterTab} from "../../pages/frontPage"
import {registerAccount} from "../../pages/registerPage"
  


describe('Automation Practice test', () => {

  it('Step 1: Go to the site', () => {
    navigateToSite()
  })

  it('Step 2: Go to register tab', () => {
    goToRegisterTab()
  })

  it('Step 3: Createn new account', () => {
    registerAccount()
  })

  })





