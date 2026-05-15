class LoginPage {
  elements = {
    emailField: () => cy.get("#email"),
    passwordField: () => cy.get("#password"),
    loginButton: () => cy.get('[data-test="login-submit"]'),
    errorMessage: () => cy.get('[data-test="login-error"]'),
    pageTitle: () => cy.get('[data-test="page-title"]'),
  }
/*
  visit() {
    cy.visit("https://practicesoftwaretesting.com/auth/login")
  }
*/
  enterEmail(email) {
    this.elements.emailField().clear().type(email)
  }

  enterPassword(password) {
    this.elements.passwordField().clear().type(password)
  }

  clickLogin() {
  this.elements.loginButton().click()
  cy.wait(2000) // give the site time to redirect
}

  login(email, password) {
    this.enterEmail(email)
    this.enterPassword(password)
    this.clickLogin()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export default new LoginPage()