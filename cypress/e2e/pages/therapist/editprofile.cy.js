/// <reference types="cypress" />
describe("Therapist/EditProfile Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Therapist/EditProfile Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Edit Profile", { matchCase: false }).click({ force: true });

    //Assert
    cy.contains("Private Information", { matchCase: false });
    cy.contains("Locations & Licenses", { matchCase: false });
    cy.contains("Public Information", { matchCase: false });
    cy.contains("Insurance & Availability", { matchCase: false });
  });
  it("Therapist/EditProfile Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-edit").click();

    //Assert
    cy.contains("Private Information", { matchCase: false });
    cy.contains("Locations & Licenses", { matchCase: false });
    cy.contains("Public Information", { matchCase: false });
    cy.contains("Insurance & Availability", { matchCase: false });
  });

  it("Therapist/EditProfile Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-edit").click();

    //Assert
    cy.contains("Private Information", { matchCase: false });
    cy.contains("Locations & Licenses", { matchCase: false });
    cy.contains("Public Information", { matchCase: false });
    cy.contains("Insurance & Availability", { matchCase: false });
  });

  it("Therapist/EditProfile View Profile Button Redirects to Therapist/ViewProfile", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Edit Profile", { matchCase: false }).click({ force: true });
    cy.contains("View Profile", { matchCase: false }).click();

    //Assert
    cy.location("pathname").should("eq", "/therapist/viewprofile");
  });

  it.only("Therapist Can Add Psypact License", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Edit Profile", { matchCase: false }).click({ force: true });
    cy.get('[app-edit-display-locations=""] > .card-body').click();
    cy.contains("Add Another License").click();
    cy.get(
      '[style="position: relative; background-color: transparent;"]'
    ).clear();
    cy.get('[style="position: relative; background-color: transparent;"]').type(
      "PSYPACT{enter}"
    );

    //Assert
    cy.contains("State (Or PSYPACT):");
  });
});

describe("Therapist/EditProfile Page No Authentication Tests", () => {
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
        cy.visit(Cypress.env("baseUrl") + "therapist/editprofile");

        //Assert
        cy.location("pathname").should("eq", "/therapist/login");
      });
    });
  });
});
