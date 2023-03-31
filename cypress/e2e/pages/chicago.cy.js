/// <reference types="cypress" />

describe("Chicago Page Tests", () => {
    it("Validate Response Headers", () => {
      cy.request(`${Cypress.env('baseUrl')}chicago`).as("chicagoPage");
      cy.get("@chicagoPage")
        .its("headers")
        .its("cache-control")
        .should("include", "max-age=2592000");
    });
  });
  