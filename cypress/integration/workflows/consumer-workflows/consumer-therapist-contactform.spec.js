/// <reference types="cypress" />
describe("Consumer to Therapist Contact Form Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("baseUrl") + Cypress.env("contact-form").link);
  });

  it.only("User recieves field validation for required fields", () => {
    //Arrange
    cy.viewport("macbook-13");

    //Act
    cy.wait(3000);
    cy.contains("CONTACT " + Cypress.env("contact-form").name).click();
    cy.wait(500);
    cy.get('[name="name"]').as("name-field").click();
    cy.get('[name="email"]').as("email-field").click();
    cy.get('[name="phone"]').as("phone-field").click();
    cy.contains("What do you hope will change through therapy? *")
      .siblings()
      .get("textarea")
      .eq(0)
      .as("expectations-field")
      .click();
    cy.get('textarea[placeholder="Optional"]').click();
    cy.contains("SEND EMAIL TO " + Cypress.env("contact-form").name).click();

    //Assert
    cy.get("@name-field")
      .invoke("attr", "placeholder")
      .should("eq", "Required");
    cy.get("@email-field")
      .invoke("attr", "placeholder")
      .should("eq", "Required");
    cy.get("@phone-field")
      .invoke("attr", "placeholder")
      .should("eq", "Required");
    cy.get("@expectations-field")
      .invoke("attr", "placeholder")
      .should("eq", "Required");

    cy.contains("Name is required.");
    cy.contains("A valid email address is required.");
    cy.contains("A valid phone number is required.");
    cy.contains("An answer to this question is required.");
  });

  it("User recieves email domain suggestions", () => {
    //Arrange
    cy.viewport("macbook-13");

    //Act
    cy.wait(3000);
    cy.contains("CONTACT " + Cypress.env("contact-form").name).click();
    cy.wait(500);
    cy.get('[name="name"]').as("name-field").clear().type("name");
    cy.get('[name="email"]').as("email-field").clear().type("funkyemail@gmail.co");
    cy.get('[name="phone"]').as("phone-field").clear().type("1234567890");
    cy.contains("What do you hope will change through therapy? *")
      .siblings()
      .get("textarea")
      .eq(0)
      .as("expectations-field")
      .click();
    cy.get('textarea[placeholder="Optional"]').click();
    cy.contains("SEND EMAIL TO " + Cypress.env("contact-form").name).click();

    //Assert
    cy.contains("The email you entered is not valid. Did you mean");
  });

  it("User recieves undeliverable email validation", () => {
    //Arrange
    cy.viewport("macbook-13");

    //Act
    cy.wait(3000);
    cy.contains("CONTACT " + Cypress.env("contact-form").name).click();
    cy.wait(500);
    cy.get('[name="name"]').as("name-field").clear().type("name");
    cy.get('[name="email"]').as("email-field").clear().type("funkyemail897456123@gmail.com");
    cy.get('[name="phone"]').as("phone-field").clear().type("1234567890");
    cy.contains("What do you hope will change through therapy? *")
      .siblings()
      .get("textarea")
      .eq(0)
      .as("expectations-field")
      .click();
    cy.get('textarea[placeholder="Optional"]').click();
    cy.contains("SEND EMAIL TO " + Cypress.env("contact-form").name).click();

    //Assert
    cy.contains("The email you entered is not valid.");
  });
});
