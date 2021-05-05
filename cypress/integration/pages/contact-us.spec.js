describe("Contact Us Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl') + 'contact-us');
    });
  
    it("User Successfully Submits Contact Form", () => {

      //Alert Box Setup 
      const stub = cy.stub()  
      cy.on('window:alert', stub);

      cy.viewport('macbook-13')
      cy.get('#contactName').clear().type('Test Contact');
      cy.get('#emailInput').clear().type('test@mentalhealthmatch.com');
      cy.get('#comment').clear().type('This is a test message');
      cy.get('iframe')
        .first()
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .and('not.be.empty')
        .then(cy.wrap)
        .find('#recaptcha-anchor')
        .should('be.visible')
        .click();
          cy.contains('Submit').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Thank you for contacting Mental Health Match')      
        })  
        })
  });
  