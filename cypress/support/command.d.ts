// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Execute therapist login workflow.
       * @example cy.therapistLogin('test@test.com','test1234!')
       */
      therapistLogin(email: string, password: string): Chainable<Element>
            /**
       * Execute generic consumer therapist match search workflow.
       * @example cy.consumerMatchSearch('77019','How I feel')
       */
      consumerMatchSearch(zipcode:string, expertise:string): Chainable<Element>
    }
  }
  