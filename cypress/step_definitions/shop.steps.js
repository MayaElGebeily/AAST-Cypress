import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";


Then("I should see product cards on the page", () => {
  HomePage.getProductCards().should("have.length.greaterThan", 0);
});

When("I search for {string}", (term) => {
  HomePage.searchFor(term);
});

Then("I should see product results", () => {
  HomePage.getProductCards()
    .should("have.length.greaterThan", 0);
});

When("I click on the first product card", () => {

  cy.get(".card", { timeout: 15000 })
    .should("have.length.greaterThan", 0)

  cy.get(".card")
    .first()
    .click()

});

Then("I should be on a product detail page", () => {
  cy.get('[data-test="product-name"]', { timeout: 10000 }).should("be.visible");
});

Then("the first product card title should be visible", () => {
  cy.get(".card-title").first().should("be.visible");
});

When("I open the categories menu", () => {
  HomePage.openCategories();
});

Then("I should see {string} category", (category) => {
  cy.contains(category).should("exist");
});

Then("the search field should be visible", () => {
  cy.get('input[placeholder="Search"]').should("be.visible");
});

Then("the first product image should be visible", () => {
  cy.get(".card img").first().should("be.visible");
});

Then("the navigation bar should contain {string}", (text) => {
  cy.contains(text).should("exist");
});

Then("the products container should exist", () => {
  cy.get(".container").should("exist");
});