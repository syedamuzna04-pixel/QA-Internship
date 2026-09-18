class InventoryPage {

  verifyInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title')
      .should('be.visible')
      .and('contain', 'Products')
  }

  clickProduct(productName) {
    cy.contains('.inventory_item_name', productName)
      .click()
  }

  verifyProductVisible(productName) {
    cy.get('.inventory_item_name')
      .contains(productName)
      .should('be.visible')
  }

  verifyProductPrice(price) {
    cy.get('.inventory_item_price')
      .contains(price)
      .should('be.visible')
  }

}

export default InventoryPage