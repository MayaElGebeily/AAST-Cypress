class ProductPage {
  elements = {
    productTitle: () => cy.get('[data-test="product-name"]'),
    productPrice: () => cy.get('[data-test="unit-price"]'),
    addToCartButton: () => cy.get('[data-test="add-to-cart"]'),
    productImage: () => cy.get(".product-image img"),
  }

  getTitle() {
    return this.elements.productTitle()
  }

  getPrice() {
    return this.elements.productPrice()
  }

  addToCart() {
    this.elements.addToCartButton().click()
  }
}

export default new ProductPage()