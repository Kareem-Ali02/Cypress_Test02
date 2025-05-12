import { HomePage } from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import AccountPage from "../pages/AccountPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

/******************************************************** */
Cypress.Commands.add("registerNewUser", () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();

  const email = `Kareem_${Date.now()}@example.com`;
    const userData = {
    email: email,
    password: "Test1234",
    username: "KareemAli",
  };
  

  cy.task("writeUserData", userData);

  homePage.navigateToSignup();
  signupPage.submitSignupForm("KareemAli", email);

  signupPage.fillAccountInformation({
    password: "Test1234",
    day: "11",
    month: "December",
    year: "2002",
    firstName: "Kareem",
    lastName: "Ali",
    address: "45 street",
    country: "United States",
    state: "Alex",
    city: "Alexandria",
    zipcode: "90001",
    mobileNumber: "1234567890"
  });
});

Cypress.Commands.add("verifyAccountCreated", () => {
  const accountPage = new AccountPage();
  accountPage.verifyAccountCreationSuccess();
});
/****************************************************************** */

Cypress.Commands.add("login", (email, password) => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  homePage.navigateToLogin();
  loginPage.performLogin(email, password);
});

Cypress.Commands.add("verifyUserLoggedIn", (username) => {
  const homePage = new HomePage();
  homePage.verifyLoggedIn(username);
});

/***************************************************************** */
Cypress.Commands.add("logout", () => {
  const homePage = new HomePage();
  homePage.clickLogout();
});

Cypress.Commands.add("verifyLoginPageVisible", () => {
  const homePage = new HomePage();
  homePage.verifyOnLoginPage();
});

/***************************************************************** */

Cypress.Commands.add("registerWithExistingEmail", (name, email) => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();

  homePage.navigateToSignup();
  signupPage.submitSignupForm(name, email);
});

Cypress.Commands.add("verifyEmailAlreadyExistsError", () => {
  const signupPage = new SignupPage();
  signupPage.verifyEmailAlreadyExistsMessage();
});

/************************************************************************** */
Cypress.Commands.add("goToProductsPage", () => {
  const productsPage = new ProductsPage();
  productsPage.goToProducts();
});

Cypress.Commands.add("verifyProductListVisible", () => {
  const productsPage = new ProductsPage();
  productsPage.verifyProductListLoaded();
});

Cypress.Commands.add("viewFirstProduct", () => {
  const productsPage = new ProductsPage();
  productsPage.clickFirstProductView();
});

Cypress.Commands.add("verifyProductDetailPageVisible", () => {
  const productsPage = new ProductsPage();
  productsPage.verifyProductDetailsVisible();
});

/************************************************************** */
Cypress.Commands.add("verifySearchInputVisible", () => {
  const productsPage = new ProductsPage();
  productsPage.verifySearchInputVisible();
});

Cypress.Commands.add("searchForProduct", (term) => {
  const productsPage = new ProductsPage();
  productsPage.searchForProduct(term);
});

Cypress.Commands.add("verifySearchResultsVisible", (term) => {
  const productsPage = new ProductsPage();
  productsPage.verifySearchResults(term);
});

Cypress.Commands.add("verifyAllResultsContain", (term) => {
  const productsPage = new ProductsPage();
  productsPage.verifyAllResultsContain(term);
});

/******************************************************************* */

Cypress.Commands.add("addFirstProductToCart", () => {
  const productsPage = new ProductsPage();
  productsPage.hoverAndAddFirstProductToCart();
});

Cypress.Commands.add("verifyProductAddedModal", () => {
  const productsPage = new ProductsPage();
  productsPage.verifyModalVisible();
});
/******************************************************************** */

Cypress.Commands.add("clickViewCartFromModal", () => {
  cy.contains("View Cart").should("be.visible").click();
});

Cypress.Commands.add("verifyCartHasProduct", () => {
  const cartPage = new CartPage();
  cartPage.verifyProductVisible();
});

Cypress.Commands.add("verifyCartProductDetails", () => {
  const cartPage = new CartPage();
  cartPage.verifyProductDetails();
});

/****************************************************************** */

Cypress.Commands.add("removeProductFromCart", () => {
  const cartPage = new CartPage();
  cartPage.removeProduct();
});

Cypress.Commands.add("verifyCartIsEmpty", () => {
  const cartPage = new CartPage();
  cartPage.verifyCartEmpty();
});

/***************************************************************** */

Cypress.Commands.add("proceedToCheckout", () => {
  cy.contains("Proceed To Checkout").click();
});

Cypress.Commands.add("enterOrderCommentAndPlaceOrder", () => {
  const checkoutPage = new CheckoutPage();
  checkoutPage.enterComment("Please deliver between 9AM–5PM");
  checkoutPage.placeOrder();
});

Cypress.Commands.add("verifyOrderConfirmation", () => {
  const checkoutPage = new CheckoutPage();
  checkoutPage.verifyOrderSuccess();
});

Cypress.Commands.add("enterPaymentDetailsAndConfirm", () => {
  cy.get('[name="name_on_card"]').type("Test User");
  cy.get('[name="card_number"]').type("4111111111111111");
  cy.get('[name="cvc"]').type("123");
  cy.get('[name="expiry_month"]').type("12");
  cy.get('[name="expiry_year"]').type("2026");
  cy.get('#submit').click();
});

/********************************************************************** */

Cypress.Commands.add("downloadInvoice", () => {
  cy.contains("Download Invoice").should("be.visible").click();
});

Cypress.Commands.add("verifyInvoiceDownloaded", () => {});

/*********************************************************************** */