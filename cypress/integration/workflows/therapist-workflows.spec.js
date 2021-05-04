describe("Therapist Workflow Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
cy.clearCookies();
cy.visit(Cypress.env('baseUrl'));
  });
  it("Therapist - Login - Desktop #smoke", () => {
    cy.viewport('macbook-13')
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get(".nav-link > strong").click();
    cy.get("#inputEmail").clear();
    cy.get("#inputEmail").type(Cypress.env('therapist-subscribed').email);
    cy.get("#inputPassword").clear();
    cy.get("#inputPassword").type(Cypress.env('therapist-subscribed').password);
    cy.get(".btn").click();
  });
  it("Therapist - Login Tablet #smoke", () => {
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

  it("Therapist - Login Mobile #smoke", () => {
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
