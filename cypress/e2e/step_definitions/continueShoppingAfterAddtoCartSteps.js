const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When ("I click Continue Shopping in the modal", () => {
  cy.get(".modal-content").within(() => {
    cy.contains("Continue Shopping").click();
  });
});

Then ("I should remain on the Products page", () => {
  cy.url().should("include", "/products");
  cy.get(".features_items").should("exist");
});