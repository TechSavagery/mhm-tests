describe("Home Page Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl'));
    });
  
    it("'Are You a Therapist' Link Navigates to /for-therapists #smoke", () => {
      cy.viewport('macbook-13')
      cy.contains('Are you a therapist?',{matchCase: false}).click({force: true});
      cy.url().should('eq', Cypress.env('baseUrl') + 'for-therapists')
    });
   
    it("'Guide To Therapy' Link Navigates to /articles/about-therapy-and-mental-health #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Guide To Therapy',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles/about-therapy-and-mental-health/')
      });

      it("'Match With Therapists' Link Navigates to /search/start #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Match With Therapists',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'search/start')
    });

    it("'Mental Health Tips' Link Navigates to /articles #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Mental Health Tips',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles')
    });

    it("'Find Therapists' Link Navigates to /search/start?zip= #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Find Therapists',{matchCase: false}).click({force: true});
        cy.url().should('include', 'search/start?zip=')
    });
  });
  