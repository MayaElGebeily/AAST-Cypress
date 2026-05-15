Feature: Shop and Products

  Background:
    Given I am on the home page

  Scenario: TC11 Homepage has correct title
    Then the page title should contain "Practice Software Testing"

  Scenario: TC12 Products are displayed on homepage
    Then I should see product cards on the page

  Scenario: TC13 Search for a product
    When I search for "Hammer"
    Then I should see product results

  Scenario: TC14 Open first product
    When I click on the first product card
    Then I should be on a product detail page

  Scenario: TC16 Categories menu is accessible
    When I open the categories menu
    Then I should see "Hand Tools" category