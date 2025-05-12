import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import user from "../../fixtures/user.json";

Given ("I am logged in as a valid user", () => {
  cy.visit("/");
  cy.login(user.email, user.password);
});

When ("I click on the Logout button", () => {
  cy.logout();
});

Then ("I should be redirected to the login page", () => {
  cy.verifyLoginPageVisible();
});
