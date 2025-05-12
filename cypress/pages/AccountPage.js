class AccountPage {
  elements = {
    successHeader: () => cy.get('h2[data-qa="account-created"]'),
    continueButton: () => cy.get('a[data-qa="continue-button"]')
  };

  verifyAccountCreationSuccess() {
    this.elements.successHeader().should('be.visible');
    this.elements.continueButton().click();
  }
}

export default AccountPage;
