Feature: Continue Shopping After Adding Product to Cart

  Scenario: User adds product to cart and chooses to continue shopping
    Given I open the home page
    Given I am a registered user and logged in
    And I navigate to the Products page
    When I add product to the cart
    And I click Continue Shopping in the modal
    Then I should remain on the Products page
