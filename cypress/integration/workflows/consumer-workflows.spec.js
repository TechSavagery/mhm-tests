describe("Consumer Workflow Tests", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl'));
    });
  
    it("Consumer Find Therpist - Desktop #smoke", () => {
      cy.viewport('macbook-13')
      //Click "Find Therapists"
      cy.get('.input-group-sm > .input-group-append > .input-group-text > strong').click();
      cy.get('.form-control').clear();

      //Enter Zip Code 
      cy.get('.form-control').type('77019');

      // Agree to Privacy Policy & Terms Of Service
      cy.get('.ng-untouched').check();

      //Click Get Matched
      cy.get(':nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch').click();

      //Step 1 
      //Select "Do you want therapy with another person?" option
      cy.get(':nth-child(1) > .unselected-option').click();

      //Enter Age
      cy.get(':nth-child(3) > .col-md-8 > .form-control').click();
      cy.get(':nth-child(3) > .col-md-8 > .form-control').click();
      cy.get(':nth-child(3) > .col-md-8 > .form-control').clear();
      cy.get(':nth-child(3) > .col-md-8 > .form-control').type('25');
      //Click Next
      cy.get('#search-about-next').click();

      //Step 2 
      //Click Next
      cy.get('#search-goals-next').click();


      //Step 3 
      cy.get(':nth-child(4) > :nth-child(2) > .ng-tns-c90-6 > .unselected-option').scrollIntoView().click();
      cy.get(':nth-child(7) > :nth-child(2) > .ng-tns-c90-6 > .unselected-option').scrollIntoView().click();
      cy.get(':nth-child(10) > .ng-tns-c90-6 > .unselected-option').scrollIntoView().click();
      cy.get(':nth-child(10) > :nth-child(2) > .ng-tns-c90-6 > .unselected-option').scrollIntoView().click();

      //Click Next 
      cy.get('#search-approaches-next').click();

      //Step 4
      //Click Next
      cy.get('#search-traits-next').click();

      //Step 5 
      //Click "Do you have health insurance you want to use for therapy?" Option 
      cy.get('.col-md-12 > app-button-toggle.ng-tns-c93-8 > .btn-group > :nth-child(1)').click();

      //Click (2) Insurance Options 
      cy.get(':nth-child(1) > .ng-tns-c93-8 > .unselected-option > .col-10').click();
      cy.get('.pt-3 > .btn').click();
      cy.get(':nth-child(2) > .ng-tns-c93-8 > .unselected-option > .col-10').click();

      //Click "Some of your matches do not take insurance. Are you willing to pay out-of-pocket if it is affordable to you?" Option
      cy.get('.col-12 > app-button-toggle.ng-tns-c93-8 > .btn-group > :nth-child(1)').click();

      //Adjust "How much are you willing to pay per session if you pay out-of-pocket?" Option 
      cy.get('.fa-plus-square-o').click();
      cy.get('.fa-plus-square-o').click();

      //Click "Meet Your Matches" button 
      cy.get('#search-costs-match').click();

      //Select Therapist From Result
      cy.get('#\\31 590 > .p-0 > app-therapist-card > .d-md-block > div.row > .col-md-4 > .text-center > .mb-2').click();
      cy.get('.px-5').click();

      //Send Contact 
      cy.get('#nameC').clear();
      cy.get('#nameC').type('Test Consumer');
      cy.get(':nth-child(2) > .col-md-8 > .form-group > .form-control').clear();
      cy.get(':nth-child(2) > .col-md-8 > .form-group > .form-control').type('andrew+test-contact-form@mentalhealthmatch.com');
      cy.get('#seeakinC').clear();
      cy.get('#seeakinC').type('(123) 456-7890');
      cy.get('.col-md-12 > .form-group > .form-control').click();
      cy.get('#contact-send-email').click();

      //Click "Close"
      cy.get(':nth-child(3) > :nth-child(1) > .btn.ng-star-inserted').click();
    });

    it("Consumer Find Therpist - Tablet #smoke", () => {
      cy.viewport('ipad-2')
    });
    it("Consumer Find Therpist - Mobile #smoke", () => {
      cy.viewport('iphone-8')
    });
  });
  