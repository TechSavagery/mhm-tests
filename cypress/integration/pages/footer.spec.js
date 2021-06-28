/// <reference types="cypress" />
describe("Footer Tests", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Footer Section Loads on All Pages", () => {
    //Arrange
    const pages = [
      "home",
      "articles",
      "articles/about-therapy-and-mental-health",
      "for-therapists",
      "contact-us",
    ];

    const links = [
      "Search for Therapists",
      "Browse Therapists by State",
      "COVID-19 Resources",
      "Advice and Articles",
      "About Therapy and Mental Health",
      "Consumer Terms of Service",
      "Therapist Signup",
      "Therapist Pricing",
      "Therapist Login",
      "Therapist Terms of Service",
      "Contact Us",
      "Privacy Policy",
    ];

    const socialLinks = [
      "follow us on facebook",
      "follow us on instagram",
      "follow us on linked in",
    ];
    //Act
    pages.forEach((page) => {
      cy.visit(Cypress.env("baseUrl") + page);
      cy.wait(1000)
      //Assert
      links.forEach((link) => {
        cy.contains(link);
      });
      socialLinks.forEach((socialLink) => {
        cy.get(`img[alt="${socialLink}"]`).should('be.visible');
      });
    });
  });
});
