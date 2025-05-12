Feature: View Cart and Verify Product Details

  Scenario: View cart and verify product details after adding a product
    Given I navigate to the Products page
    And I add product to the cart
    When I view the cart
    Then I should see the added product listed in the cart
    And the product name, price, quantity, and total should be correct
