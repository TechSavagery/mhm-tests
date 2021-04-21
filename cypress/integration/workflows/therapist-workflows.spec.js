describe("Therapist Workflow Tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it("Therapist - Login", () => {
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get(".nav-link > strong").click();
    cy.get("#inputEmail").clear();
    cy.get("#inputEmail").type(Cypress.env('therapist-subscribed').email);
    cy.get("#inputPassword").clear();
    cy.get("#inputPassword").type(Cypress.env('therapist-subscribed').password);
    cy.get(".btn").click();
  });
});
