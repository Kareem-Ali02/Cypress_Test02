import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given ("I see a list of products displayed", () => {
  cy.verifyProductListVisible();
});

When ('I click on the "View Product" button of the first product', () => {
  cy.viewFirstProduct();
});

Then ("I should see the product detail page with product name, category, price, availability, condition, and brand", () => {
  cy.verifyProductDetailPageVisible();
});
