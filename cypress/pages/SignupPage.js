class SignupPage {
  elements = {
    nameInput: () => cy.get('input[data-qa="signup-name"]'),
    emailInput: () => cy.get('input[data-qa="signup-email"]'),
    signupButton: () => cy.get('button[data-qa="signup-button"]'),
    genderMr: () => cy.get('#id_gender1'),
    passwordInput: () => cy.get('#password'),
    daySelect: () => cy.get('#days'),
    monthSelect: () => cy.get('#months'),
    yearSelect: () => cy.get('#years'),
    firstNameInput: () => cy.get('#first_name'),
    lastNameInput: () => cy.get('#last_name'),
    addressInput: () => cy.get('#address1'),
    countrySelect: () => cy.get('#country'),
    stateInput: () => cy.get('#state'),
    cityInput: () => cy.get('#city'),
    zipcodeInput: () => cy.get('#zipcode'),
    mobileInput: () => cy.get('#mobile_number'),
    createAccountButton: () => cy.get('button[data-qa="create-account"]'),
    emailExistsError: () => cy.get("p").contains("Email Address already exist!")
  };

  submitSignupForm(name, email) {
    this.elements.nameInput().type(name);
    this.elements.emailInput().type(email);
    this.elements.signupButton().click();
  }

  fillAccountInformation(info) {
    this.elements.genderMr().check();
    this.elements.passwordInput().type(info.password);
    this.elements.daySelect().select(info.day);
    this.elements.monthSelect().select(info.month);
    this.elements.yearSelect().select(info.year);
    this.elements.firstNameInput().type(info.firstName);
    this.elements.lastNameInput().type(info.lastName);
    this.elements.addressInput().type(info.address);
    this.elements.countrySelect().select(info.country);
    this.elements.stateInput().type(info.state);
    this.elements.cityInput().type(info.city);
    this.elements.zipcodeInput().type(info.zipcode);
    this.elements.mobileInput().type(info.mobileNumber);
    this.elements.createAccountButton().click();
  }

  verifyEmailAlreadyExistsMessage() {
    this.elements.emailExistsError().should("be.visible");
  }
  
}

export default SignupPage;
