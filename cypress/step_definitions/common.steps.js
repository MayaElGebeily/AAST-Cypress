import { Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

Given("I am on the home page", () => {
  cy.clearAllCookies()
  cy.clearAllLocalStorage()
  cy.clearAllSessionStorage()
  HomePage.visit()
});

// Navigate directly to login URL instead of clicking Sign In
// This avoids Angular state issues after previous specs
Given("I navigate to the login page", () => {
  cy.visit("/auth/login")
});