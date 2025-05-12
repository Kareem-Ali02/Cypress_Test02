export class HomePage {
  getLogo() {
    return cy.get('img[alt="Website for automation practice"]');
  }

  getNavBar() {
    return cy.get('.navbar-nav');
  }

  navigateToSignup() {
    this.elements.signupLoginButton().click();
  }

  navigateToLogin() {
    this.elements.signupLoginButton().click();
  }

  clickLogout() {
    this.elements.logoutButton().click();
  }

  verifyLoggedIn(username) {
    this.elements.loggedInAsText().should("contain.text", username);
  }

  verifyOnLoginPage() {
    cy.url().should("include", "/login");
    cy.get("h2").should("contain.text", "Login to your account");
  }


  elements = {
    signupLoginButton: () => cy.get('a[href="/login"]'),
    loggedInAsText: () => cy.get('a').contains("Logged in as"),
    logoutButton: () => cy.get('a[href="/logout"]')
  };

}
