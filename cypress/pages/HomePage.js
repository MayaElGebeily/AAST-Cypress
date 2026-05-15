class HomePage {
  elements = {
    searchField: () => cy.get('[data-test="search-query"]'),
    searchSubmit: () => cy.get('[data-test="search-submit"]'),
    productCards: () => cy.get(".card"),
    categoriesNav: () => cy.get('[data-test="nav-categories"]'),
    signInLink: () => cy.contains("Sign in"),
  }

  visit() {
    cy.visit("https://practicesoftwaretesting.com")
  }

  searchFor(term) {
    this.elements.searchField().clear().type(term)
    this.elements.searchSubmit().click()
  }

  openCategories() {
    this.elements.categoriesNav().click()
  }

  goToLogin() {
  cy.visit("https://practicesoftwaretesting.com/auth/login")
}

  getProductCards() {
    return this.elements.productCards()
  }
}

export default new HomePage()