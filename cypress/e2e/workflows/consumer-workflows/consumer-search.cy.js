/// <reference types="cypress" />
describe("Consumer Search Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Consumer Find Therpist - Desktop #smoke", () => {
    cy.viewport("macbook-13");
    //Click "Find Therapists"
    cy.get(
      ".input-group-sm > .input-group-append > .input-group-text > strong"
    ).click();
    cy.get(".form-control").clear();

    //Enter Zip Code
    cy.get(".form-control").type("77019");

    // Agree to Privacy Policy & Terms Of Service
    cy.get(".ng-untouched").check();

    //Click Get Matched
    cy.get(
      ":nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch"
    ).click();

    //Step 1
    //Select "Do you want therapy with another person?" option
    cy.get(":nth-child(1) > .unselected-option").click();

    //Enter Age
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").clear();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").type("25");
    //Click Next
    cy.get("#search-about-next").click();

    //Step 2
    //Click Next
    cy.get("#search-goals-next").click();

    //Step 3
    cy.contains("Connect with animals or nature").scrollIntoView().click();
    cy.contains("Create music or art").scrollIntoView().click();
    cy.contains("Join a support group").scrollIntoView().click();
    cy.contains("Your dreams").scrollIntoView().click();
    cy.contains("Join a support group").scrollIntoView().click();
    cy.contains("Communication").scrollIntoView().click();

    //Click Next
    cy.get("#search-approaches-next").click();

    //Step 4
    //Click Next
    cy.get("#search-traits-next").click();

    //Step 5
    //Click "Do you have health insurance you want to use for therapy?" Option
    cy.contains("Yes").scrollIntoView().click();

    //Click (2) Insurance Options
    cy.contains("CELTIC").scrollIntoView().click();
    cy.contains("Add more insurers").scrollIntoView().click();
    cy.contains("BLUE CROSS BLUE SHIELD").scrollIntoView().click();

    //Click "Some of your matches do not take insurance. Are you willing to pay out-of-pocket if it is affordable to you?" Option
    cy.get('[type="button"]').eq(2).click();

    //Adjust "How much are you willing to pay per session if you pay out-of-pocket?" Option
    cy.get(".fa-plus-square-o").click();
    cy.get(".fa-plus-square-o").click();

    //Click "Meet Your Matches" button
    cy.get("#search-costs-match").click();

    //Page Assertions
    cy.get("#therapy-type-filter").should("exist");
    cy.get("#waitlist-filter").should("exist");
    cy.get("#results-sort-key").should("exist");

    //Click View PR
    cy.contains("View Profile").first().click({ force: true });
    cy.contains("CONTACT").first().click();
    cy.get("#nameC").clear();
    cy.get("#nameC").type("Test Consumer");
    cy.get('input[name="email"]')
      .clear()
      .type("andrew+test-contact-form@mentalhealthmatch.com");
    cy.get("#seeakinC").clear();
    cy.get("#seeakinC").type("(123) 456-7890");
    cy.get('input[value="Email"]').click();
    cy.get("select").select("In the next week");
    cy.get('input[type="checkbox"]').check();
    cy.wait(3000);
    cy.get("#contact-send-email").click();
    //cy.contains("CLOSE").click();
  });

  it("Consumer Match Filters - Location - In-Person Only", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.consumerMatchSearch("77019", "How I feel");

    //Act
    cy.get("#therapy-type-filter")
      .as("contact-method")
      .select("Offers In-Person");

    //Assert
    cy.wait(1500);
    cy.get('img[src*="api.mapbox"]').should("have.length.gte", 5);
  });

  it("Consumer Match Filters - Location - Online Only", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.consumerMatchSearch("77019", "How I feel");

    //Act
    cy.get("#therapy-type-filter").as("contact-method").select("Offers Online");

    //Assert
    cy.wait(1500);
    cy.get('img[src*="remote-therapy-only"]').should("have.length.gte", 1);
    cy.get('img[src*="api.mapbox"]').should("exist");
  });

  it("Consumer Match Filters - Location - Both", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.consumerMatchSearch("77019", "How I feel");

    //Act
    cy.get("#therapy-type-filter")
      .as("contact-method")
      .select("Online or In-Person");

    //Assert
    cy.wait(1500);
    cy.get('img[src*="remote-therapy-only"]').should("exist");
    cy.get('img[src*="api.mapbox"]').should("exist");
  });

  it("Consumer Match Search - Difficult Searcher - Schizophrenia- Desktop #smoke", () => {
    //Arrange
    const schizophreniaList = [
      "Catatonia",
      "Schizotypal Disorder",
      "Schizophrenia",
      "Schizoaffective Disorder",
      "Schizoid Personality Disorder",
      "Schizophreniform Disorder",
    ];
    const regex = new RegExp(`${schizophreniaList.join("|")}`, "g");
    cy.viewport("macbook-13");

    //Act
    cy.log("Navigate to Therapist Search Page");
    cy.get(
      ".input-group-sm > .input-group-append > .input-group-text > strong"
    ).click();
    cy.get(".form-control").clear();

    cy.log("Enter Zip Code + Agree To TOS + Click Get Matched");
    cy.get(".form-control").type("77019");

    cy.get(".ng-untouched").check();

    cy.get(
      ":nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch"
    ).click();

    cy.log(
      'Step 1: Select "Do you want therapy with another person?" + Age. Then Click "Next"'
    );
    cy.get(":nth-child(1) > .unselected-option").click();

    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").clear();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").type("25");

    cy.get("#search-about-next").click();

    cy.log('Step 2: Select Expertise. Then Click "Next"');
    cy.contains("A disorder I want to test for or treat").click();

    cy.get("#search-goals-next").click();

    cy.log('Step 2: Select Disorder. Then Click "Next"');
    cy.contains("Schizophrenia").click();

    cy.get("#search-goals-details-next").click();

    cy.log('Step 3: Keep Default Goals. Then Click "Next"');
    cy.get("#search-approaches-next").click();

    cy.log('Step 4: Keep Default Approaches. Then Click "Next"');
    cy.get("#search-traits-next").click();

    cy.log('Step 5: Click "Meet Your Matches"');
    cy.contains("Meet your matches").click();

    //Assert
    cy.log("Validate each therapist contains one of the disorders from list");
    cy.get(".splitList").each(($el, index, $list) => {
      cy.wrap($el).contains(regex);
    });
  });

  it("Consumer Match Search - Difficult Searcher - Psychosis- Desktop #smoke", () => {
    //Arrange
    const disorderList = [
      "Catatonia",
      "Schizotypal Disorder",
      "Schizophrenia",
      "Schizoaffective Disorder",
      "Schizoid Personality Disorder",
      "Schizophreniform Disorder",
      "Altered States",
      "Hearing Voices",
      "Psychosis",
      "Paranoia",
      "Hallucinations",
      "Delusional Disorder",
    ];
    const regex = new RegExp(`${disorderList.join("|")}`, "g");
    cy.viewport("macbook-13");

    //Act
    //Click "Find Therapists"
    cy.get(
      ".input-group-sm > .input-group-append > .input-group-text > strong"
    ).click();
    cy.get(".form-control").clear();

    //Enter Zip Code
    cy.get(".form-control").type("77019");

    // Agree to Privacy Policy & Terms Of Service
    cy.get(".ng-untouched").check();

    //Click Get Matched
    cy.get(
      ":nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch"
    ).click();

    //Step 1
    //Select "Do you want therapy with another person?" option
    cy.get(":nth-child(1) > .unselected-option").click();

    //Enter Age
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").clear();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").type("25");
    //Click Next
    cy.get("#search-about-next").click();

    //Step 2
    //Select Expertise
    cy.contains("A disorder I want to test for or treat").click();
    //Click Next
    cy.get("#search-goals-next").click();
    //Select Disorder Type
    cy.contains("Psychosis").click();
    //Click Next
    cy.get("#search-goals-details-next").click();

    //Step 3
    //Click Next
    cy.get("#search-approaches-next").click();

    //Step 4
    //Click Next
    cy.get("#search-traits-next").click();

    //Step 5
    //Click "Meet Your Matches" button
    cy.contains("Meet your matches").click();

    //Assert
    //Check all Focus Area <div>'s and validate they contain at least one Therapist Specialty
    cy.wait(1500);
    cy.get(".splitList").each(($el, index, $list) => {
      cy.wrap($el)
        .scrollIntoView()
        .then(($el) => {
          cy.get($el).contains(regex);
        });
    });
  });

  it("Consumer Match Search - Difficult Searcher - Suicidal - Desktop #smoke", () => {
    //Arrange
    const disorderList = [
      "Life Crisis",
      "Crisis Counseleing",
      "Suicidal Thoughts",
      "Suicidal Ideation",
      "Crisis",
      "Suicidality",
      "Crisis Intervention",
      "Suicide",
    ];
    const regex = new RegExp(`${disorderList.join("|")}`, "g");
    cy.viewport("macbook-13");

    //Act
    //Click "Find Therapists"
    cy.get(
      ".input-group-sm > .input-group-append > .input-group-text > strong"
    ).click();
    cy.get(".form-control").clear();

    //Enter Zip Code
    cy.get(".form-control").type("77019");

    // Agree to Privacy Policy & Terms Of Service
    cy.get(".ng-untouched").check();

    //Click Get Matched
    cy.get(
      ":nth-child(3) > .col-md-8 > .ng-star-inserted > #search-findmatch"
    ).click();

    //Step 1
    //Select "Do you want therapy with another person?" option
    cy.get(":nth-child(1) > .unselected-option").click();

    //Enter Age
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").click();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").clear();
    cy.get(":nth-child(3) > .col-md-8 > .form-control").type("25");
    //Click Next
    cy.get("#search-about-next").click();

    //Step 2
    //Select Expertise
    cy.contains("How I feel").click();
    //Click Next
    cy.get("#search-goals-next").click();
    //Select Disorder Type
    cy.contains("Suicidal").click();
    cy.contains("I Understand").click();
    //Click Next
    cy.get("#search-goals-details-next").click();

    //Step 3
    //Click Next
    cy.get("#search-approaches-next").click();

    //Step 4
    //Click Next
    cy.get("#search-traits-next").click();

    //Step 5
    //Click "Meet Your Matches" button
    cy.contains("Meet your matches").click();

    //Assert
    //Check all Focus Area <div>'s and validate they contain at least one Therapist Specialty
    cy.wait(5000);
    cy.get(".splitList").each(($el, index, $list) => {
      cy.wrap($el)
        .scrollIntoView()
        .then(($el) => {
          cy.get($el).contains(regex);
        });
    });
  });

  it("Contact Form Email Domain Suggestion", () => {
    //Arrange
    cy.viewport("macbook-13");
    cy.consumerMatchSearch("77019", "How I feel");
    cy.wait(5000);

    //Act
    cy.get('a[href*="therapist-profile"]').first().click({ force: true });
    cy.get(".ga-contact-modal-button").first().click();

    cy.wait(500);
    cy.get('[name="name"]').as("name-field").clear().type("name");
    cy.get('[name="email"]')
      .as("email-field")
      .clear()
      .type("funkyemail897456123@gmail.com");
    cy.get('[name="phone"]').as("phone-field").clear().type("1234567890");
    cy.get("select").select("In the next week");
    cy.get('input[value="Email"]').click();

    cy.get('input[name="reiterateInsurance"]').then(($insuranceConfirm) => {
      if ($insuranceConfirm.is(":visible")) {
        cy.get('input[name="reiterateInsurance"]').click();
      }
    });
    cy.get('textarea[placeholder="Optional"]').click();
    cy.contains("SEND EMAIL TO ").click();

    //Assert
    cy.contains("The email you entered is not valid.");
  });
});
