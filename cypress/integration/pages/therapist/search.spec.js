/// <reference types="cypress" />
describe("Therapist/Search Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Therapist/Search Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Find a Therapist", { matchCase: false }).click({
      force: true,
    });

    //Assert
    cy.contains("Referral Tool", { matchCase: false });
    cy.contains("My Favorites", { matchCase: false });
    cy.contains("Zip Code", { matchCase: false });
    cy.contains("State", { matchCase: false });
    cy.get(".btn-outline-primary").should("have.length", 2);
  });
  it("Therapist/Search Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-search").click();

    //Assert
    cy.contains("Referral Tool", { matchCase: false });
    cy.contains("My Favorites", { matchCase: false });
    cy.contains("Zip Code", { matchCase: false });
    cy.contains("State", { matchCase: false });
    cy.get(".btn-outline-primary").should("have.length", 2);
  });

  it("Therapist/Search Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-search").click();

    //Assert
    cy.contains("Referral Tool", { matchCase: false });
    cy.contains("My Favorites", { matchCase: false });
    cy.contains("Zip Code", { matchCase: false });
    cy.contains("State", { matchCase: false });
    cy.get(".btn-outline-primary").should("have.length", 2);
  });

  it("Therapist/Search Start Search Button Navigates to Search Results Component", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Find a Therapist", { matchCase: false }).click({
      force: true,
    });
    //Select form by placeholders
    cy.get('[placeholder="e.g. 77019"]').clear().type("77019");
    cy.contains("Start Search", { matchCase: false }).click();

    //Assert
    cy.location("pathname").should("eq", "/therapist/search");
    cy.contains("Showing 1 - 5");
    cy.contains("Add Filters");
  });
});

describe("Therapist/Search Page No Authentication Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it(`Redirects To /Login #smoke`, () => {
    cy.fixture("viewports").then((viewports) => {
      viewports.forEach((viewport, index) => {
        //Arrange
        cy.log(`Verifying ${viewport.name}`);
        cy.viewport(viewport.screenSize);
        //Act
        cy.visit(Cypress.env("baseUrl") + "therapist/search");

        //Assert
        cy.location("pathname").should("eq", "/login");
      });
    });
  });
});
