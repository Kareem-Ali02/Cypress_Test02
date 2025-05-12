import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import user from "../../fixtures/user.json";

Given ('I open the home page', () => {
  cy.visit('/');
});

Given("I navigate to the Products page", () => {
  cy.visit("/");
  cy.goToProductsPage();
});

Given ("I add product to the cart", () => {
  cy.addFirstProductToCart();
  cy.verifyProductAddedModal();
});

When ("I view the cart", () => {
  cy.clickViewCartFromModal();
});

Given ("I am a registered user and logged in", () => {
  cy.login(user.email, user.password);
});