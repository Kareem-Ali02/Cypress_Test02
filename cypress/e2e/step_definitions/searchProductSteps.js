import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given ("I see the product search input", () => {
  cy.verifySearchInputVisible();
});

When ('I enter {string} in the search field and click the search button', (term) => {
  cy.searchForProduct(term);
});

Then ('I should see search results related to {string}', (term) => {
  cy.verifySearchResultsVisible(term);
});

Then ('each result should contain the word {string}', (term) => {
  cy.verifyAllResultsContain(term);
});
