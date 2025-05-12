Feature: User Logout

  Scenario: Logout user
    Given I am logged in as a valid user
    When I click on the Logout button
    Then I should be redirected to the login page
