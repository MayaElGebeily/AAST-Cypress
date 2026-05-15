
Cypress.Commands.add("openHomePage", () => {
  cy.visit("https://practicesoftwaretesting.com", { failOnStatusCode: false })
})

Cypress.Commands.add("openLoginPage", () => {
  cy.contains("Sign in").click()
})

Cypress.Commands.add("enterEmail", (email) => {
  cy.get('#email').clear().type(email)
})

Cypress.Commands.add("enterPassword", (password) => {
  cy.get('#password').clear().type(password)
})

Cypress.Commands.add("clickLogin", () => {
  cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add("searchProduct", (product) => {
  cy.get('[data-test="search-query"]')
    .should("be.visible")
    .clear()
    .type(product)
})

Cypress.Commands.add("openFirstProduct", () => {
  cy.get(".card").first().click()
})

Cypress.Commands.add("openCategories", () => {
  cy.get('[data-test="nav-categories"]')
    .should("be.visible")
    .click()
})

