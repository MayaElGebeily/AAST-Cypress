describe("Shop & Product Test Suite", () => {

  let productData

  beforeEach(() => {

    cy.fixture("productData").then((data) => {
      productData = data
    })

    cy.openHomePage()

  })


  it("TC11 Verify homepage title", () => {

    cy.title().should("include", productData.expectedTitle)

  })


  it("TC12 Verify products are displayed", () => {

    cy.get(".card").should("have.length.greaterThan", 0)

  })


  it("TC13 Search for product", () => {

    cy.searchProduct(productData.searchProduct)

    cy.get(".card").should("exist")

  })


  it("TC14 Open first product page", () => {

  cy.get(".card", { timeout: 10000 })
    .should("have.length.greaterThan", 0)

  cy.get(".card").first().click()

})




  it("TC15 Verify product title exists", () => {

  cy.get(".card-title").first().should("be.visible")

})



  it("TC16 Verify categories menu exists", () => {

    cy.openCategories()

    cy.contains(productData.category).should("exist")

  })


  it("TC17 Verify search field exists", () => {

    cy.get('input[placeholder="Search"]').should("be.visible")

  })

/*
  it("TC18 Verify product image exists", () => {

  cy.get(".card", { timeout: 10000 })
    .should("have.length.greaterThan", 0)

  cy.get(".card")
    .first()
    .find("img")
    .should("be.visible")

})
*/

  it("TC19 Verify navigation bar exists", () => {

    cy.contains("Home").should("exist")
    cy.contains("Categories").should("exist")

  })


  it("TC20 Verify products grid exists", () => {

    cy.get(".container").should("exist")

  })

})
