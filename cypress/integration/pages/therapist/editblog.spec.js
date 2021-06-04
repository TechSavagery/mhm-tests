/// <reference types="cypress" />
describe("Therapist/EditBlog Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Therapist/EditBlog Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Publish Article", { matchCase: false }).click({ force: true });

    //Assert
    cy.contains("Publish Article", { matchCase: false }).click({ force: true });
    cy.contains("Create New Post", { matchCase: false });
  });
  it("Therapist/EditBlog Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-user").eq(1).click();

    //Assert
    cy.contains("Publish Article", { matchCase: false }).click({ force: true });
    cy.contains("Create New Post", { matchCase: false });
  });

  it("Therapist/EditBlog Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-user").eq(1).click();

    //Assert
    cy.contains("Publish Article", { matchCase: false }).click({ force: true });
    cy.contains("Create New Post", { matchCase: false });
  });

  it("Therapist/EditBlog Page CTA Takes User to Create Post Form #smoke", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("Publish Article", { matchCase: false }).click({ force: true });
    cy.contains("Create New Post", { matchCase: false }).click({ force: true });

    //Assert
    cy.location("pathname").should("eq", "/therapist/editblog");
    cy.contains("Publish Article", { matchCase: false });
    cy.contains("Editing", { matchCase: false });
    cy.contains("Save Post", { matchCase: false });
    cy.contains("Title(Max characters 60)", { matchCase: false });
    cy.contains("Content", { matchCase: false });
    cy.contains("I have the rights to publish this content", {
      matchCase: false,
    });
    cy.contains("Select a Category", { matchCase: false });
    cy.contains("Featured Image", { matchCase: false });
    cy.contains("After you save", { matchCase: false });
    cy.contains("Cancel", { matchCase: false });
  });
});

describe("Therapist/EditBlog Page No Authentication Tests", () => {
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
    cy.visit(Cypress.env("baseUrl") + "therapist/editblog");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Tablet #smoke", () => {
    //Arrange
    cy.viewport("ipad-2");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/editblog");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
  it("Redirects To /Login - Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");

    //Act
    cy.visit(Cypress.env("baseUrl") + "therapist/editblog");

    //Assert
    cy.location("pathname").should("eq", "/login");
  });
});
