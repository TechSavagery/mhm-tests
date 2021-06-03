describe("Therapist/Dashboard Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
  cy.clearCookies();
  cy.visit(Cypress.env('baseUrl') + '/login')
    });
    it("Therapist/Dashboard Page Loads - Desktop #smoke", () => {
      //Arrange 
      cy.viewport('macbook-13')

      //Act
      cy.therapistLogin(
        Cypress.env("therapist-subscribed").email,
        Cypress.env("therapist-subscribed").password
      );

      //Assert
      cy.url().should('include', '/dashboard')

      //Sidebar Menu
      cy.contains('Dashboard');
      cy.contains('Find a Therapist');
      cy.contains('View Profile');
      cy.contains('Edit Profile');
      cy.contains('Publish Article');
      cy.contains('Account Settings');
      cy.contains('Contact Us');
      cy.contains('Sign Out');

      //Dashboard Widgets
      cy.contains('have seen you as a match.');
      cy.contains('has viewed your full profile.');
      cy.contains('have emailed you.');
      cy.contains('Share with a colleague.');
      cy.contains('Update your availability.');
      cy.contains('Share your profile.');
    });
    it("Therapist/Account Page Loads Tablet #smoke", () => {
      //Arrange
      cy.viewport('ipad-2')        
      //Act 
      //Assert 
    });
  
    it("Therapist/Account Page Loads Mobile #smoke", () => {
      //Arrange
      cy.viewport('iphone-8')
      //Act 
      //Assert 
    });
  });
  
  describe("Therapist/Dashboard Page No Authentication Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
        win.sessionStorage.clear()
      })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl') + '/login')
    });
  
    it("Redirects To /Login - Desktop #smoke", () => {
      //Arrange
      cy.viewport('macbook-13')

      //Act
      cy.visit(Cypress.env('baseUrl') + 'therapist/dashboard');
  
      //Assert
      cy.location('pathname').should('eq', '/login')
      
    });
    it("Redirects To /Login - Tablet #smoke", () => {
        //Arrange
        cy.viewport('ipad-2')
  
        //Act
        cy.visit(Cypress.env('baseUrl') + 'therapist/dashboard');
    
        //Assert
        cy.location('pathname').should('eq', '/login')
        
      });
      it("Redirects To /Login - Mobile #smoke", () => {
        //Arrange
        cy.viewport('iphone-8')
  
        //Act
        cy.visit(Cypress.env('baseUrl') + 'therapist/dashboard');
    
        //Assert
        cy.location('pathname').should('eq', '/login')
        
      });
  });