describe("Contact Us Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl') + 'articles');
    });
  
    it("Page Loads Successfully", () => {
        cy.viewport('macbook-13');
        cy.title().should('include', 'Mental Health Match');
        cy.contains('Why therapy? A personal story from our founder');
        cy.contains('Use our free, confidential matching tool to find support that best meets your needs.');
        cy.contains('The opinions expressed by the authors are their own and are not Mental Health Match');
        cy.get('.cs-overlay-link').should('have.length.greaterThan', 3);

        cy.viewport('ipad-2');
        cy.title().should('include', 'Mental Health Match');
        cy.contains('Why therapy? A personal story from our founder');
        cy.contains('Use our free, confidential matching tool to find support that best meets your needs.');
        cy.contains('The opinions expressed by the authors are their own and are not Mental Health Match');
        cy.get('.cs-overlay-link').should('have.length.greaterThan', 3);

        cy.viewport('iphone-8');
        cy.title().should('include', 'Mental Health Match');
        cy.contains('Why therapy? A personal story from our founder');
        cy.contains('Use our free, confidential matching tool to find support that best meets your needs.');
        cy.contains('The opinions expressed by the authors are their own and are not Mental Health Match');
        cy.get('.cs-overlay-link').should('have.length.greaterThan', 3);
    })
  });
  