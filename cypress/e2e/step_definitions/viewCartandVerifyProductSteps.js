import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then ("I should see the added product listed in the cart", () => {
  cy.verifyCartHasProduct();
});

Then ("the product name, price, quantity, and total should be correct", () => {
  cy.verifyCartProductDetails();
});
