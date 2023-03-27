/// <reference types="cypress" />

describe("Admin License Workflow Tests", () => {
  it("Therapist/Account Page Loads - Desktop #smoke", () => {
    cy.adminLogin(Cypress.env("admin").email, Cypress.env("admin").password);

    //Act
    cy.contains("Licenses", { matchCase: false }).click({
      force: true,
    });

    cy.contains("AAMFT Approved Supervisor", { matchCase: false }).click({
        force: true,
      });

    //Assert
    cy.contains("add to AAMFT Approved Supervisor");
  });
});
