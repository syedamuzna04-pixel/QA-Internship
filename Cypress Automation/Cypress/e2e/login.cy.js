import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('SauceDemo Login Tests', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()

  it('should display an error for invalid login', () => {

    loginPage.visit()

    loginPage.login('wrong_user', 'wrong_password')

    loginPage.verifyErrorMessage(
      'Username and password do not match'
    )
  })

  it('should login successfully and validate homepage', () => {

    loginPage.visit()

    loginPage.login('standard_user', 'secret_sauce')

    inventoryPage.verifyInventoryPage()

    cy.get('.inventory_list')
      .should('be.visible')

    cy.get('.shopping_cart_link')
      .should('be.visible')
  })

})
