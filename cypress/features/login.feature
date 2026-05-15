Feature: User Login

  Background:
    Given I am on the home page
    And I navigate to the login page

  Scenario: TC01 Successful login with valid credentials
    When I enter email "customer@practicesoftwaretesting.com"
    And I enter password "welcome01"
    And I click the login button
    Then I should be redirected to the account page

  Scenario: TC02 Login fails with invalid email
    When I enter email "wrong@email.com"
    And I enter password "welcome01"
    And I click the login button
    Then I should see the error "Invalid email or password"

  Scenario: TC03 Login fails with invalid password
    When I enter email "admin@practicesoftwaretesting.com"
    And I enter password "wrong123"
    And I click the login button
    Then I should see the error "Invalid email or password"

  Scenario: TC04 Email field is visible
    Then the email field should be visible

  Scenario: TC05 Password field is visible
    Then the password field should be visible