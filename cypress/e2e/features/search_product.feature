Feature: Search for a product

  Scenario: Search for a product by name
    Given I navigate to the Products page
    And I see the product search input
    When I enter "Jeans" in the search field and click the search button
    Then I should see search results related to "Jeans"
    And each result should contain the word "Jeans"
