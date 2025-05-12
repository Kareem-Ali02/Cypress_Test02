Feature: Place Order - Login Before Checkout

  Scenario: Logged-in user places an order successfully
    Given I open the home page
    Given I am a registered user and logged in
    And I navigate to the Products page
    And I add product to the cart
    When I view the cart
    And I proceed to checkout
    And I enter order comments and place the order
    And I enter payment details
    Then I should see the order confirmation
