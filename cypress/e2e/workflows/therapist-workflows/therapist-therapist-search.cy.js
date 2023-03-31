/// <reference types="cypress" />
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
    cy.log("Navigate to Login Page + Submit Form");
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.log(
      "Navigate to Therapist Search + Search By Zipcode + Load More Results"
    );
    cy.contains("Find a Therapist", { matchCase: false }).click({
      force: true,
    });
    cy.get('[placeholder="e.g. 77019"]').click().type("77019");
    cy.contains("Start Search").first().click();
    cy.wait(3000);
    cy.contains("Show More").click();
    cy.wait(3000);

    //Assert
    cy.log("Validate Page Components + URL");
    cy.url().should("include", "/therapist/search");
    cy.contains("Email", { matchCase: false })
      .its("length")
      .should("be.lte", 5);
    cy.contains("Showing 1 - 5", { matchCase: false })
      .its("length")
      .should("be.eq", 1);
    cy.contains("Hide Full Profile");
    cy.contains("Show Less");
  });

  it("Search By State Returns Results #smoke", () => {
    //Arrange
    cy.log("Navigate to Login Page + Submit Form");
    cy.viewport("macbook-13");
    cy.therapistLogin(
      Cypress.env("therapist-subscribed").email,
      Cypress.env("therapist-subscribed").password
    );

    //Act
    cy.log(
      "Navigate to Therapist Search + Search By State + Load More Results"
    );
    cy.contains("Find a Therapist", { matchCase: false }).click({
      force: true,
    });
    cy.get("input")
      .eq(2)
      .click({
        force: true,
      })
      .type("TEXAS", {
        force: true,
        delay:200
      })
    cy.wait(3000);
    cy.findAllByText("Start Search").eq(1).click();
    cy.wait(4000);
    cy.contains("Show More").click();
    cy.wait(3000);

    //Assert
    cy.log("Validate Page Components + URL");
    cy.url().should("include", "/therapist/search");
    cy.contains("Email", { matchCase: false })
      .its("length")
      .should("be.lte", 5);
    cy.contains("Showing 1 - 5", { matchCase: false })
      .its("length")
      .should("be.eq", 1);
    cy.contains("Hide Full Profile");
    cy.contains("Show Less");
    cy.contains("Copy Profile Link");
    cy.contains("Add To Favorites");
    cy.get('.fa-heart-o').should('have.length.at.least', 5);
    cy.get('[alt*="remote and phone therapy"]').should(
      "have.length.at.least",
      5
    );
  });
});
