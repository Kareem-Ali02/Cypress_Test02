Feature: User Registration

  Scenario: Register a new user account
    Given I open the home page
    When I register a new user account with valid data
    Then My account should be created successfully
