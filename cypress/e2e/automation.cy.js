describe('Automation Test Suite', () => {
  it("TC22 navigate to required page", () => {
    cy.visit("http://automationexercise.com")
    cy.get('a[href="/test_cases"]').first().click()
  })
})