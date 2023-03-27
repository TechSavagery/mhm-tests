/// <reference types="cypress" />

describe("Browse Therapist Page", () => {
  it("Validate Response Headers", () => {
    cy.request(`${Cypress.env('baseUrl')}browse-therapists`).as("browseTherapistPage");
    cy.get("@browseTherapistPage")
      .its("headers")
      .its("cache-control")
      .should("include", "max-age=2592000");
  });
});
