import { Then, When } from "@badeball/cypress-cucumber-preprocessor";



When ("I remove the product from the cart", () => {
  cy.removeProductFromCart();
});

Then ("the cart should be empty", () => {
  cy.verifyCartIsEmpty();
});
