/// <reference types="cypress" />
describe("Therapist Login Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });
  it("Therapist - Login - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );
  });
  it("Therapist - Login Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );
  });

  it("Therapist - Login Mobile #smoke", () => {
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );
  });
});

describe("Therapist Therapist Search Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Search By Zip Code Returns Results #smoke", () => {
    //Arrange
    cy.viewport("macbook-13");
    //Login
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Find a Therapist", { matchCase: false }).click({
      force: true,
    });
    cy.get('[placeholder="e.g. 77019"]').click().type("77019");
    cy.contains("Start Search").first().click();
    cy.wait(3000)
    cy.contains('Show More').click();


    //Assert
    cy.url().should("include", "/therapist/search");
    cy.contains("Email", { matchCase: false })
      .its("length")
      .should("be.lte", 5)
    cy.contains("Showing 1 - 5", { matchCase: false })
      .its("length")
      .should("be.eq", 1)
    cy.contains('Hide Full Profile')
    cy.contains('Show Less')
  });
});
