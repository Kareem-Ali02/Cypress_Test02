Feature: User Registration

  Scenario: Register user with existing email
    Given I open the home page
    When I try to register with an already registered email
    Then I should see an error message that the email already exists
