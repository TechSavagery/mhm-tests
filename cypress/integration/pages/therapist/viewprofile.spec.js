/// <reference types="cypress" />
describe("Therapist/ViewProfile Page Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Therapist/ViewProfile Page Loads - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("View Profile", { matchCase: false }).click({ force: true });

    //Assert
    cy.location("pathname").should("eq", "/therapist/viewprofile");
    cy.get('.sebm-google-map-container-inner').should('be.visible')
    cy.get('.profile-user-img-profile').should('be.visible')
    cy.contains("About Me", { matchCase: false });
    cy.contains("View Profile", { matchCase: false });
    cy.contains("Edit Profile", { matchCase: false });
    cy.contains("More Details", { matchCase: false });
  });
  it("Therapist/ViewProfile Page Loads Tablet #smoke", () => {
    cy.viewport("ipad-2");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-user").first().click()

    //Assert
    cy.location("pathname").should("eq", "/therapist/viewprofile");
    cy.get('.sebm-google-map-container-inner').should('be.visible')
    cy.get('.profile-user-img-profile').should('be.visible')
    cy.contains("About Me", { matchCase: false });
    cy.contains("View Profile", { matchCase: false });
    cy.contains("Edit Profile", { matchCase: false });
    cy.contains("More Details", { matchCase: false });
  });

  it("Therapist/ViewProfile Page Loads Mobile #smoke", () => {
    //Arrange
    cy.viewport("iphone-8");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.get(".fa-user").first().click()

    //Assert
    cy.location("pathname").should("eq", "/therapist/viewprofile");
    cy.get('.sebm-google-map-container-inner').should('be.visible')
    cy.get('.profile-user-img-profile').should('be.visible')
    cy.contains("About Me", { matchCase: false });
    cy.contains("View Profile", { matchCase: false });
    cy.contains("Edit Profile", { matchCase: false });
    cy.contains("More Details", { matchCase: false });
  });

  it("Therapist/ViewProfile Edit Profile Button Redirects to Therapist/EditProfile", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.contains("View Profile", { matchCase: false }).click({ force: true })
    cy.get('[routerlink="/therapist/editprofile"]').click()

    //Assert
    cy.location("pathname").should("eq", "/therapist/editprofile");
  });
});

describe("Therapist/ViewProfile Page No Authentication Tests", () => {
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
        cy.visit(Cypress.env("baseUrl") + "therapist/viewprofile");

        //Assert
        cy.location("pathname").should("eq", "/login");
      });
    });
  });
});