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
});

describe("Therapist/EditProfile Page No Authentication Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Redirects To /Login - Desktop #smoke", () => {
    //Arrange
    cy.viewport("macbook-13");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/editprofile");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Tablet #smoke", () => {
    //Arrange
    cy.viewport("ipad-2");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/editprofile");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/editprofile");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
});
