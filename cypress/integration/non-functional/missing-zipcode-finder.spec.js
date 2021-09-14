/// <reference types="cypress" />
var zipCodes = require("../../fixtures/zipcodes.json");
context("Validate Zip Codes", () => {
  zipCodes.forEach((z, i) => {
    it(`Validate Zipcode: (${z}}#${i + 1}/${zipCodes.length})`, () => {
      cy.request(Cypress.env("baseUrl") + "browse-therapists/" + z + "/anxiety")
        .its("body")
        .should("include", 'id="therapy-type-filter"');
    });
  });
});
