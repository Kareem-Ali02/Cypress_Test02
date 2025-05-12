Feature: Remove Product from Cart

  Scenario: Remove a product after adding it to the cart
    Given I navigate to the Products page
    And I add product to the cart
    When I view the cart
    And I remove the product from the cart
    Then the cart should be empty
