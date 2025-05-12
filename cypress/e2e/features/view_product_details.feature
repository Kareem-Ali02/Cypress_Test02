Feature: View Product Details

  Scenario: View product details
    Given I navigate to the Products page
    And I see a list of products displayed
    When I click on the "View Product" button of the first product
    Then I should see the product detail page with product name, category, price, availability, condition, and brand
