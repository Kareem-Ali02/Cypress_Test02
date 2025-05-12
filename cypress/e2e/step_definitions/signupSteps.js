const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When ("I register a new user account with valid data", () => {
  cy.registerNewUser();
});

Then ("My account should be created successfully", () => {
  cy.verifyAccountCreated();
});
