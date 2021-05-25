describe("Contact Us Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl') + 'contact-us');
    });
  
    it("User Successfully Inputs Contact Form Data", () => {
      cy.viewport('macbook-13')
      cy.get('#contactName').clear().type('Test Contact');
      cy.get('#emailInput').clear().type('test@mentalhealthmatch.com');
      cy.get('#comment').clear().type('This is a test message');  
        })
  });
  