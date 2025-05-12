import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import user from "../../fixtures/user.json";


When ("I try to register with an already registered email", () => {
  cy.registerWithExistingEmail(user.username, user.email);
});

Then ("I should see an error message that the email already exists", () => {
  cy.verifyEmailAlreadyExistsError();
});
