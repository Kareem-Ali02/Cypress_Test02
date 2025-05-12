class CheckoutPage {
  elements = {
    commentTextarea: () => cy.get("textarea[name='message']"),
    placeOrderButton: () => cy.contains("Place Order"),
    orderConfirmationMessage: () => cy.contains("Congratulations! Your order has been confirmed!")
  };

  enterComment(comment) {
    this.elements.commentTextarea().type(comment);
  }

  placeOrder() {
    this.elements.placeOrderButton().click();
  }

  verifyOrderSuccess() {
    this.elements.orderConfirmationMessage().should("be.visible");
  }
}

export default CheckoutPage;
