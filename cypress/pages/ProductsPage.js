class ProductsPage {
  elements = {
    productsNavLink: () => cy.get('a[href="/products"]'),
    productGridItems: () => cy.get(".features_items .product-image-wrapper"),
    firstProductViewButton: () =>
      cy.get(".features_items .product-image-wrapper").first().contains("View Product"),
    productName: () => cy.get(".product-information h2"),
    productCategory: () => cy.get(".product-information p"),
    productPrice: () => cy.get(".product-information span span"),
    productAvailability: () => cy.contains("Availability:"),
    productCondition: () => cy.contains("Condition:"),
    productBrand: () => cy.contains("Brand:"),
    searchInput: () => cy.get("#search_product"),
    searchButton: () => cy.get("#submit_search"),
    searchedProductNames: () => cy.get(".features_items .productinfo p"),
    firstProductContainer: () => cy.get(".features_items .product-image-wrapper").first(),
    firstAddToCartButton: () => cy.get(".features_items .product-image-wrapper").first().contains("Add to cart"),
    continueShoppingButton: () => cy.contains("Continue Shopping"),
    productAddedModal: () => cy.get("#cartModal")
  };

  goToProducts() {
    this.elements.productsNavLink().click();
  }

  verifyProductListLoaded() {
    this.elements.productGridItems().should("have.length.greaterThan", 0);
  }

  clickFirstProductView() {
    this.elements.firstProductViewButton().click();
  }

  verifyProductDetailsVisible() {
    this.elements.productName().should("be.visible");
    this.elements.productCategory().should("be.visible");
    this.elements.productPrice().should("be.visible");
    this.elements.productAvailability().should("be.visible");
    this.elements.productCondition().should("be.visible");
    this.elements.productBrand().should("be.visible");
  }

  verifySearchInputVisible() {
    this.elements.searchInput().should("be.visible");
  }

  searchForProduct(term) {
    this.elements.searchInput().type(term);
    this.elements.searchButton().click();
  }

  verifySearchResults(term) {
    cy.url().should("include", "search");
    this.elements.productGridItems().should("exist");
    this.elements.searchedProductNames().should("contain.text", term);
  }

  verifyAllResultsContain(term) {
    this.elements.searchedProductNames().each(($el) => {
      cy.wrap($el).invoke("text").then((text) => {
        expect(text.toLowerCase()).to.include(term.toLowerCase());
      });
    });
  }

  hoverAndAddFirstProductToCart() {
    this.elements.firstProductContainer().trigger("mouseover");
    this.elements.firstAddToCartButton().click({ force: true });
  }

  verifyModalVisible() {
    this.elements.productAddedModal().should("be.visible");
    this.elements.continueShoppingButton().should("be.visible");
  }

}

export default ProductsPage;
