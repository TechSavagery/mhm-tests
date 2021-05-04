
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
})
