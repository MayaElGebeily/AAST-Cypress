
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
 
describe("Login Test Suite", () => {
  let data;
 
  beforeEach(() => {
    cy.fixture("loginData").then((fixtureData) => {
      data = fixtureData;
    });
    HomePage.visit();
    HomePage.goToLogin();
  });
 
  it("TC01 Enter valid credentials", () => {
  LoginPage.login(data.validUser.email, data.validUser.password);
  cy.url({ timeout: 15000 }).should("include", "account");
  cy.url().should("not.include", "login");
  LoginPage.elements.pageTitle().should("be.visible");
});
 
  it("TC02 Invalid email login attempt", () => {
    LoginPage.login(data.invalidEmail.email, data.invalidEmail.password);
    cy.url().should("include", "login");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Invalid email or password");
  });
 
  it("TC03 Invalid password login attempt", () => {
    LoginPage.login(data.invalidPassword.email, data.invalidPassword.password);
    cy.url().should("include", "login");
    LoginPage.getErrorMessage()
      .should("be.visible")
      .and("contain", "Invalid email or password");
  });
 
  it("TC04 Verify email field exists", () => {
    LoginPage.elements.emailField().should("be.visible");
  });
 
  it("TC05 Verify password field exists", () => {
    LoginPage.elements.passwordField().should("be.visible");
  });
 
  it("TC06 Verify login button exists", () => {
    LoginPage.elements.loginButton().should("be.visible");
  });
 
  it("TC07 Verify password field type is password", () => {
    LoginPage.elements.passwordField().should("have.attr", "type", "password");
  });
 
  it("TC08 Verify login page title", () => {
    cy.title().should("include", "Practice Software Testing");
  });
 
  it("TC09 Verify Sign in navigation", () => {
    HomePage.visit();
    HomePage.goToLogin();
    cy.url().should("include", "login");
  });
 
  it("TC10 Verify login page loads", () => {
    cy.url().should("include", "login");
  });
});