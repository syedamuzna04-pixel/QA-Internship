class ProductPage {

  verifyProductPage() {
    cy.get('.inventory_details_name')
      .should('be.visible')
  }

  verifyProductName(productName) {
    cy.get('.inventory_details_name')
      .should('contain', productName)
  }

  verifyProductPrice(price) {
    cy.get('.inventory_details_price')
      .should('contain', price)
  }

  verifyAddToCartButton() {
    cy.get('[data-test="add-to-cart"]')
      .should('be.visible')
  }

}

export default ProductPage