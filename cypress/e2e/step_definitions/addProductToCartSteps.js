import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given ("I see a list of products", () => {
  cy.verifyProductListVisible();
});

When ("I add the first product to the cart", () => {
  cy.addFirstProductToCart();
});

Then ("I should see a modal confirming the product was added", () => {
  cy.verifyProductAddedModal();
});


