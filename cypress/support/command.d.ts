// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * CExecute therapist login workflow.
       * @example cy.therapistLogin('test@test.com','test1234!')
       */
      therapistLogin(email: string, password: string): Chainable<Element>
    }
  }
  