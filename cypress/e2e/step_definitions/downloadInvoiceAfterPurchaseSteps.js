const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


Given ("I add a product to the cart and complete the checkout process", () => {
  cy.goToProductsPage();
  cy.addFirstProductToCart();
  cy.verifyProductAddedModal();
  cy.clickViewCartFromModal();
  cy.proceedToCheckout();
  cy.enterOrderCommentAndPlaceOrder();
  cy.enterPaymentDetailsAndConfirm();
  cy.verifyOrderConfirmation();
});

When ("I download the invoice", () => {
  cy.downloadInvoice();
});

Then ("the invoice should be downloaded successfully", () => {
  cy.verifyInvoiceDownloaded();
});
