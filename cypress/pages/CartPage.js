class CartPage {
  elements = {
    cartProductRow: () => cy.get(".cart_info .cart_product"),
    productName: () => cy.get(".cart_description h4 a"),
    productPrice: () => cy.get(".cart_price p"),
    productQuantity: () => cy.get(".cart_quantity button"),
    productTotal: () => cy.get(".cart_total p"),
    deleteButton: () => cy.get(".cart_delete a"),
    emptyCartMessage: () => cy.get("#empty_cart")
  };

  verifyProductVisible() {
    this.elements.cartProductRow().should("exist");
  }

  verifyProductDetails() {
    this.elements.productName().should("be.visible");
    this.elements.productPrice().invoke("text").should("match", /^Rs\.?\s?\d+$/);
    this.elements.productQuantity().should("be.visible");
    this.elements.productTotal().invoke("text").should("match", /^Rs\.?\s?\d+$/);
  }

  removeProduct() {
    this.elements.deleteButton().first().click();
  }

  verifyCartEmpty() {
    cy.wait(1000);
    this.elements.cartProductRow().should("not.exist");
  }
}

export default CartPage;
