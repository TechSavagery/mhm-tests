// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-audit/commands";
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('therapistLogin', (email, password)=>{
    cy.visit(Cypress.env('baseUrl') + 'login')
    cy.get("#inputEmail").clear();
    cy.get("#inputEmail").type(email);
    cy.get("#inputPassword").clear();
    cy.get("#inputPassword").type(password);
    cy.get(".btn").click();
  })

  Cypress.Commands.add('consumerMatchSearch', (zipcode, expertise, ) =>{
    cy.log('Navigate to Therapist Search Page')
    cy.get(
      ".input-group-sm > .input-group-append > .input-group-text > strong"
    ).click();
    cy.get(".form-control").clear();

    cy.log('Enter Zip Code + Agree To TOS + Click Get Matched')
    cy.get(".form-control").type(zipcode);

    cy.get(".ng-untouched").check();

    cy.get(
      ":nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch"
    ).click();

    cy.log('Step 1: Select "Do you want therapy with another person?" + Age. Then Click "Next"')
    cy.get(":nth-child(1) > .unselected-option").click();

    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").clear();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").type("25");

    cy.get("#search-about-next").click();

    cy.log('Step 2: Select Expertise. Then Click "Next"')
    cy.contains(expertise).click();

    cy.get("#search-goals-next").click();

    cy.log('Step 2: Select Disorder. Then Click "Next"')
    cy.get("#search-goals-details-next").click();

    cy.log('Step 3: Keep Default Goals. Then Click "Next"')
    cy.get("#search-approaches-next").click();

    cy.log('Step 4: Keep Default Approaches. Then Click "Next"')
    cy.get("#search-traits-next").click();

    cy.log('Step 5: Click "Meet Your Matches"')
    cy.contains("Meet your matches").click()
    cy.wait(1500)

    for(let n = 0; n < 7; n ++){
      cy.contains('LOAD MORE THERAPISTS').click()
    }
  })
