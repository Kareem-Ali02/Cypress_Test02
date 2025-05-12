Feature: Download Invoice After Purchase

  Scenario: User downloads invoice after successful order
    Given I open the home page
    Given I am a registered user and logged in
    And I add a product to the cart and complete the checkout process
    When I download the invoice
    Then the invoice should be downloaded successfully
