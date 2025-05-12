class LoginPage {
  elements = {
    emailInput: () => cy.get('input[data-qa="login-email"]'),
    passwordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]')
  };

  performLogin(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}

export default LoginPage;
