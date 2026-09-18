class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get('[data-test="username"]')
      .type(username)
  }

  enterPassword(password) {
    cy.get('[data-test="password"]')
      .type(password)
  }

  clickLogin() {
    cy.get('[data-test="login-button"]')
      .click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

  verifyErrorMessage(message) {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', message)
  }

}

export default LoginPage
