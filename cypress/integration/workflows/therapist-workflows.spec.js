describe("Therapist Workflow Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it("Therapist - Login - Desktop", () => {
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get(".nav-link > strong").click();
    cy.get("#inputEmail").clear();
    cy.get("#inputEmail").type(Cypress.env('therapist-subscribed').email);
    cy.get("#inputPassword").clear();
    cy.get("#inputPassword").type(Cypress.env('therapist-subscribed').password);
    cy.get(".btn").click();
  });
  it("Therapist - Login Tablet", () => {
    cy.viewport('ipad-2')

    cy.get('.part-1').click();
    cy.get(':nth-child(4) > .nav-link-mobile').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > .text-light').click();
    cy.get('#inputEmail').clear();
    cy.get('#inputEmail').type(Cypress.env('therapist-subscribed').email);
    cy.get('.animated').click();
    cy.get('#inputPassword').clear();
    cy.get('#inputPassword').type(Cypress.env('therapist-subscribed').password);
    cy.get('.btn').click();

  });

  it("Therapist - Login Mobile", () => {
    cy.viewport('iphone-8')
    cy.get('.part-1').click();
    cy.get(':nth-child(4) > .nav-link-mobile').click();
    cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > .text-light').click();
    cy.get('#inputEmail').clear();
    cy.get('#inputEmail').type(Cypress.env('therapist-subscribed').email);
    cy.get('#inputPassword').clear();
    cy.get('#inputPassword').type(Cypress.env('therapist-subscribed').password);
    cy.get('.btn').click();
  });
});
