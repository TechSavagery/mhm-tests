/// <reference types="cypress" />
describe("Consumer to Therapist Contact Form Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl") + Cypress.env("contact-form").link);
  });

  it("User recieves field validation for required fields", () => {
    //Arrange
    cy.viewport("macbook-13");

    //Act
    cy.wait(3000)
    cy.contains("CONTACT " + Cypress.env("contact-form").name).click();
    cy.get('[name="name"]').as("name-field").click();
    cy.get('[name="email"]').as("email-field").click();
    cy.get('[name="phone"]').as("phone-field").click();
    cy.get('[formcontrolname="response"]').eq(0).as("expectations-field").click();
    cy.get('[formcontrolname="response"]').eq(1).click();

    //Assert
    cy.get("@name-field")
      .invoke("attr", "placeholder")
      .should('eq', 'Required')
    cy.get("@email-field")
      .invoke("attr", "placeholder")
      .should('eq', 'Required')
    cy.get("@phone-field")
      .invoke("attr", "placeholder")
      .should('eq', 'Required')
    cy.get("@expectations-field")
      .invoke("attr", "placeholder")
      .should('eq', 'Required')

    cy.contains("Name is required.");
    cy.contains("A valid email address is required.");
    cy.contains("A valid phone number is required.");
    cy.contains("A response is required.");

    cy.contains('SEND EMAIL TO ' + Cypress.env("contact-form").name).should('be.disabled')
  });
});
