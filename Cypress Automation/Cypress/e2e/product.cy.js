import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import ProductPage from '../pages/ProductPage'

describe('SauceDemo Product Tests', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const productPage = new ProductPage()

  it('should navigate to a product and validate its details', () => {

    loginPage.visit()

    loginPage.login('standard_user', 'secret_sauce')

    inventoryPage.clickProduct('Sauce Labs Backpack')

    cy.url()
      .should('include', '/inventory-item.html?id=4')

    productPage.verifyProductPage()

    productPage.verifyProductName('Sauce Labs Backpack')

    productPage.verifyProductPrice('$29.99')

    cy.get('.inventory_details_desc')
      .should('be.visible')
  })

})