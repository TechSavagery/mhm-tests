/// <reference types="cypress" />

describe("Therapist/Account Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Therapist/Account Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Account Settings", { matchCase: false }).click({
      force: true,
    });

    //Assert
    cy.contains("Plans & Payments");
    cy.contains("Account Info");
  });
  it("Therapist/Account Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-cog").click();

    //Assert
    cy.contains("Plans & Payments");
    cy.contains("Account Info");
  });

  it("Therapist/Account Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-cog").click();

    //Assert
    cy.contains("Plans & Payments");
    cy.contains("Account Info");
  });
});

describe("Therapist/Account Page No Authentication Tests", () => {
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
    cy.visit(Cypress.env("baseUrl") + "therapist/account");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Tablet #smoke", () => {
    //Arrange
    cy.viewport("ipad-2");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/account");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/account");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
});
