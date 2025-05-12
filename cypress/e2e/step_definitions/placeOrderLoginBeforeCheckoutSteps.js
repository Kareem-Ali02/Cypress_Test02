const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When ("I proceed to checkout", () => {
  cy.proceedToCheckout();
});

When ("I enter order comments and place the order", () => {
  cy.enterOrderCommentAndPlaceOrder();
});

When ("I enter payment details", () => {
  cy.enterPaymentDetailsAndConfirm();
});

Then ("I should see the order confirmation", () => {
  cy.verifyOrderConfirmation();
});
