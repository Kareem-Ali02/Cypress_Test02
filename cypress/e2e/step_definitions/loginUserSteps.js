import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import user from "../../fixtures/user.json";

When ("I login with valid credentials", () => {
  cy.login(user.email, user.password);
});

Then ("I should be logged in successfully", () => {
  cy.verifyUserLoggedIn(user.username);
});
