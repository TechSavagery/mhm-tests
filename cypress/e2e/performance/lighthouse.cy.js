
describe("Lighthouse Audit Tests", () =>{
    it("Home Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl'));
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });
      it("For-Therapist Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'for-therapists');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Articles Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'articles');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("About Therapy and Mental Health Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'articles/about-therapy-and-mental-health');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Find Therapist Start Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'search/start');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Contact Us Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'contact-us');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Pricing Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'pricing');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Login Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'login');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

      it("Therapist Registration Page Lighthouse Audit", function () {
        cy.visit(Cypress.env('baseUrl') + 'register/therapist');
        cy.lighthouse({
            "performance": 70,
            "accessibility": 70,
            "best-practices": 70,
            "seo": 70,
          });
      });

})
