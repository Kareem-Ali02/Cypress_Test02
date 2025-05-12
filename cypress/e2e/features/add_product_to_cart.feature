Feature: Add Product to Cart

  Scenario: Add a product to the cart from the Products page
    Given I navigate to the Products page
    And I see a list of products
    When I add the first product to the cart
    Then I should see a modal confirming the product was added
