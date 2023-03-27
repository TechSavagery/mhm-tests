/// <reference types="cypress" />

describe("Browse By Location Page", () => {
    it("Validate Response Headers", () => {
      cy.request(`${Cypress.env('baseUrl')}browse-by-location`).as("browseByLocationPage");
      cy.get("@browseByLocationPage")
        .its("headers")
        .its("cache-control")
        .should("include", "max-age=2592000");
    });
  });
  