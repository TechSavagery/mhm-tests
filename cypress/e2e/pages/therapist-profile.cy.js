/// <reference types="cypress" />

describe("Public Therapist Profile Page", () => {
    it("Validate Response Headers", () => {
      cy.request(`${Cypress.env('baseUrl')}therapist-profile/illinois/dr---menon`).as("therapistProfilePage");
      cy.get("@therapistProfilePage")
        .its("headers")
        .its("cache-control")
        .should("include", "max-age=2592000");
    });
  });
  