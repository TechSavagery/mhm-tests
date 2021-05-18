describe("Therapist Login Tests", () => {
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

describe("Therapist Therapist Search Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
cy.clearCookies();
cy.visit(Cypress.env('baseUrl'));
  });

  it.only("Search By Zip Code Returns Results #smoke", () => {
    //Arrange
    cy.viewport('macbook-13')
    //Login
    cy.visit(Cypress.env('baseUrl') + 'login');
    cy.get('#inputEmail').clear();
    cy.get('#inputEmail').type(Cypress.env('therapist-subscribed').email);
    cy.get('#inputPassword').clear();
    cy.get('#inputPassword').type(Cypress.env('therapist-subscribed').password);
    cy.contains('LOG IN').click();

    //Act
    cy.contains('Find a Therapist',{matchCase: false}).click({force: true});
    cy.get('[placeholder="e.g. 77019"]').click().type('77019');
    cy.contains ('Start Search').first().click();
    
    //Assert
    cy.url().should('include', '/therapist/search');
    cy.contains('Contact',{matchCase: false}).its('length').should('be.lte', 5);
    cy.contains('Showing 1 - 5',{matchCase: false}).its('length').should('be.eq', 1);
  });
});
