/// <reference types="cypress" />
describe("Therapist/Contact Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  Cypress.Comman;
  it("Therapist/Contact Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Contact Us", { matchCase: false }).click({ force: true });

    //Assert
    cy.contains("Contact Mental Health Match");
    cy.contains("832-224-6652");
    cy.contains("4771 Sweetwater Blvd. #347");
  });
  it("Therapist/Contact Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-envelope").click();

    //Assert
    cy.contains("Contact Mental Health Match");
    cy.contains("832-224-6652");
    cy.contains("4771 Sweetwater Blvd. #347");
  });

  it("Therapist/Contact Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-envelope").click();

    //Assert
    cy.contains("Contact Mental Health Match");
    cy.contains("832-224-6652");
    cy.contains("4771 Sweetwater Blvd. #347");
  });

  it("Therapist/Contact Page Form Submits #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-envelope").click();
    cy.get('[name="name"]').clear().type("Automated Tests");
    cy.get('[name="email"]').clear().type("test@test.com");
    cy.get("#comment").clear().type("test@test.com");
    cy.contains("Submit", { matchCase: false }).click({ force: true });

    //Assert
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Email has been sent! Thank you.");
    });
  });
});

describe("Therapist/Contact Page No Authentication Tests", () => {
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
    cy.visit(Cypress.env("baseUrl") + "therapist/contact");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Tablet #smoke", () => {
    //Arrange
    cy.viewport("ipad-2");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/contact");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/contact");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
});
