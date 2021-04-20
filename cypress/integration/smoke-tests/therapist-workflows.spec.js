describe("Therapist Workflow Tests", () => {
  beforeEach(() => {
    cy.visit("https://qa.mentalhealthmatch.com");
  });

  it("Therapist - Login", () => {
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get(".nav-link > strong").click();
    cy.get("#inputEmail").clear();
    cy.get("#inputEmail").type("andrew+yujimarshall2@mentalhealthmatch.com");
    cy.get("#inputPassword").clear();
    cy.get("#inputPassword").type("test1234!");
    cy.get(".btn").click();
  });
});
