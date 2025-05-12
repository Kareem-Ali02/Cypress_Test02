Feature: User Login

  Scenario: Login with valid credentials
    Given I open the home page
    When I login with valid credentials
    Then I should be logged in successfully
