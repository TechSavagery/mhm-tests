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

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('ipad-2')
        cy.get('#SIT').click();
        cy.contains('Are you a therapist?',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'for-therapists')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('iphone-8')
        cy.get('#SIT').click();
        cy.contains('Are you a therapist?',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'for-therapists')
    });
   
    it("'Guide To Therapy' Link Navigates to /articles/about-therapy-and-mental-health #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Guide To Therapy',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles/about-therapy-and-mental-health/')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('ipad-2')
        cy.get('#SIT').click();
        cy.contains('Guide To Therapy',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles/about-therapy-and-mental-health/')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('iphone-8')
        cy.get('#SIT').click();
        cy.contains('Guide To Therapy',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles/about-therapy-and-mental-health/')
      });

      it("'Match With Therapists' Link Navigates to /search/start #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Match With Therapists',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'search/start')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('ipad-2')
        cy.get('#SIT').click();
        cy.contains('Match With Therapists',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'search/start')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('iphone-8')
        cy.get('#SIT').click();
        cy.contains('Match With Therapists',{matchCase: false}).click({force: true});
        cy.url().should('eq', Cypress.env('baseUrl') + 'search/start')
    });

    it("'Mental Health Tips' Link Navigates to /articles #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Mental Health Tips',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('ipad-2')
        cy.get('#SIT').click();
        cy.contains('Mental Health Tips',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('iphone-8')
        cy.get('#SIT').click();
        cy.contains('Mental Health Tips',{matchCase: false}).click({force: true});
        cy.url().should('include', '/articles')
    });

    it("'Find Therapists' Link Navigates to /search/start?zip= #smoke", () => {
        cy.viewport('macbook-13')
        cy.contains('Find Therapists',{matchCase: false}).click({force: true});
        cy.url().should('include', 'search/start?zip=')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('ipad-2')
        cy.get('#SIT').click();
        cy.contains('Find Therapists',{matchCase: false}).click({force: true});
        cy.url().should('include', 'search/start?zip=')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));
  
        cy.viewport('iphone-8')
        cy.get('#SIT').click();
        cy.contains('Find Therapists',{matchCase: false}).click({force: true});
        cy.url().should('include', 'search/start?zip=')
    });

      it.only("'Match With Therapists' w/ Zip Code Entered Button Navigates to /search/start?zip={zipCode} #smoke", () => {
        cy.viewport('macbook-13')
        cy.get('#zipBox3 > .form-control').clear();
        cy.get('#zipBox3 > .form-control').type('77019');
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=77019')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('ipad-2')
        cy.get('#zipBox3 > .form-control').clear();
        cy.get('#zipBox3 > .form-control').type('77019');
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=77019')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('iphone-8')
        cy.get('#zipBox3 > .form-control').clear();
        cy.get('#zipBox3 > .form-control').type('77019');
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=77019')
      });

    it.only("'Match With Therapists' w/o Zip Code Entered Button Navigates to /search/start?zip= #smoke", () => {
        cy.viewport('macbook-13')
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('ipad-2')
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=')

        cy.clearCookies();
        cy.visit(Cypress.env('baseUrl'));

        cy.viewport('iphone-8')
        cy.get('div.ml-0 > .d-flex > .input-group-append > .input-group-text > strong').click();
        cy.url().should('include', 'search/start?zip=')
    });
  });
  