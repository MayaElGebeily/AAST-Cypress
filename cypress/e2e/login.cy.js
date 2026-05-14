describe("Login Test Suite", () => {

  let data

  beforeEach(() => {

    cy.fixture("loginData").then((fixtureData) => {
      data = fixtureData
    })

    cy.openHomePage()
    cy.openLoginPage()

  })


  it("TC01 Enter valid credentials", () => {

    cy.enterEmail(data.validUser.email)
    cy.enterPassword(data.validUser.password)

    cy.clickLogin()
    cy.url().should("include", "account")

    cy.url().should("not.include", "login")
      cy.get('[data-test="page-title"]', { timeout: 10000 })
    .should("be.visible")
  })


  it("TC02 Invalid email login attempt", () => {

    cy.enterEmail(data.invalidEmail.email)
    cy.enterPassword(data.invalidEmail.password)

    cy.clickLogin()

    cy.url().should("include", "login")
    cy.get('[data-test="login-error"]', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Invalid email or password')

  })


  it("TC03 Invalid password login attempt", () => {

    cy.enterEmail(data.invalidPassword.email)
    cy.enterPassword(data.invalidPassword.password)

    cy.clickLogin()

    cy.url().should("include", "login")
    cy.get('[data-test="login-error"]', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Invalid email or password')
  })

  it("TC04 Verify email field exists", () => {

    cy.get("#email").should("be.visible")

  })


  it("TC05 Verify password field exists", () => {

    cy.get("#password").should("be.visible")

  })


it("TC06 Verify login button exists", () => {
  cy.get('[data-test="login-submit"]').should("be.visible")
})


  it("TC07 Verify password field type", () => {
    cy.get("#password").should("have.attr", "type", "password")
  })


  it("TC08 Verify login page title", () => {

    cy.title().should("include", "Practice Software Testing")

  })


  it("TC09 Verify Sign in navigation", () => {

    cy.visit("https://practicesoftwaretesting.com")

    cy.contains("Sign in").click()

    cy.url().should("include", "login")

  })


  it("TC10 Verify login page loads", () => {

    cy.url().should("include", "login")

  })

})
