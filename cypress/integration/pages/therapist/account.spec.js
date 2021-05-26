describe("Therapist/Account Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
  cy.clearCookies();
  cy.visit(Cypress.env('baseUrl'));
    });
    it("Therapist/Account Page Loads - Desktop #smoke", () => {
      cy.viewport('macbook-13')
      cy.get(":nth-child(4) > .nav-link").click();
      cy.get(".nav-link > strong").click();
      cy.get("#inputEmail").clear();
      cy.get("#inputEmail").type(Cypress.env('therapist-subscribed').email);
      cy.get("#inputPassword").clear();
      cy.get("#inputPassword").type(Cypress.env('therapist-subscribed').password);
      cy.get(".btn").click();

      //Act
      cy.contains('Account Settings',{matchCase: false}).click({force: true});

      //Assert
      cy.contains('Plans & Payments');
      cy.contains('Account Info');
    });
    it("Therapist/Account Page Loads Tablet #smoke", () => {
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

      //Act 
      cy.get('.fa-cog').click();

      //Assert 
      cy.contains('Plans & Payments');
      cy.contains('Account Info'); 
    });
  
    it("Therapist/Account Page Loads Mobile #smoke", () => {
      //Arrange
      cy.viewport('iphone-8')
      cy.get('.part-1').click();
      cy.get(':nth-child(4) > .nav-link-mobile').click();
      cy.get(':nth-child(3) > .list-unstyled > :nth-child(3) > .text-light').click();
      cy.get('#inputEmail').clear();
      cy.get('#inputEmail').type(Cypress.env('therapist-subscribed').email);
      cy.get('#inputPassword').clear();
      cy.get('#inputPassword').type(Cypress.env('therapist-subscribed').password);
      cy.get('.btn').click();

      //Act 
      cy.get('.fa-cog').click();

      //Assert 
      cy.contains('Plans & Payments');
      cy.contains('Account Info'); 
    });
  });
  
  describe("Therapist/Account Page No Authentication Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl'));
    });
  
    it("Redirects To /Login - Desktop #smoke", () => {
      //Arrange
      cy.viewport('macbook-13')

      //Act
      cy.visit(Cypress.env('baseUrl') + 'therapist/account');
  
      //Assert
      cy.location('pathname').should('eq', '/login')
      
    });
    it("Redirects To /Login - Tablet #smoke", () => {
        //Arrange
        cy.viewport('ipad-2')
  
        //Act
        cy.visit(Cypress.env('baseUrl') + 'therapist/account');
    
        //Assert
        cy.location('pathname').should('eq', '/login')
        
      });
      it("Redirects To /Login - Mobile #smoke", () => {
        //Arrange
        cy.viewport('iphone-8')
  
        //Act
        cy.visit(Cypress.env('baseUrl') + 'therapist/account');
    
        //Assert
        cy.location('pathname').should('eq', '/login')
        
      });
  });