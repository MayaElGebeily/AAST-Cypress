import {When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../pages/LoginPage"

When("I enter email {string}", (email) => {
  LoginPage.elements.emailField().should("be.visible").clear().type(email)
})

When("I enter password {string}", (password) => {
  LoginPage.elements.passwordField().should("be.visible").clear().type(password)
})

When("I click the login button", () => {

  LoginPage.elements.loginButton()
    .should("be.visible")
    .and("not.be.disabled")

  LoginPage.clickLogin()

});

Then("I should be redirected to the account page", () => {
  cy.url({ timeout: 15000 }).should("include", "account")
  cy.url().should("not.include", "login")
  LoginPage.elements.pageTitle().should("be.visible")
});

Then("I should see the error {string}", (message) => {

  LoginPage.getErrorMessage()
    .should("be.visible")
    .and("contain", message)

});

Then("the email field should be visible", () => {
  LoginPage.elements.emailField().should("be.visible")
});

Then("the password field should be visible", () => {
  LoginPage.elements.passwordField().should("be.visible")
});

Then("the login button should be visible", () => {
  LoginPage.elements.loginButton().should("be.visible")
});

Then("the page title should contain {string}", (title) => {
  cy.title().should("include", title)
});

Then("the URL should contain {string}", (path) => {
  cy.url().should("include", path)
});