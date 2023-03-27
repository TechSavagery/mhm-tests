describe("For Therapist Page", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit(Cypress.env('baseUrl') + 'for-therapists');
    });
  
    it("Page Loads Successfully", () => {
        cy.viewport('macbook-13');
        cy.title().should('include', 'Therapists - Find & Meet New Clients - Mental Health Match');
        cy.contains('THERAPIST HOME');
        cy.contains('CONTACT US');
        cy.contains('PRICING');
        cy.contains('LOGIN');
        cy.contains('JOIN AS A THERAPIST');

        cy.viewport('ipad-2');
        cy.get('a[href*="/therapist/register"]').should(($ctas) =>{
          expect($ctas).length.to.be.greaterThan(3);
        });
        cy.get('#SIT').click();
        cy.contains('THERAPIST HOME');
        cy.contains('CONTACT US');
        cy.contains('PRICING');
        cy.contains('LOGIN');
        cy.contains('JOIN AS A THERAPIST');
        //cy.viewport('iphone-8');
                cy.get('a[href*="/therapist/register"]').should(($ctas) =>{
          expect($ctas).length.to.be.greaterThan(3);
        });
        cy.get('#SIT').click();
        cy.contains('THERAPIST HOME');
        cy.contains('CONTACT US');
        cy.contains('PRICING');
        cy.contains('LOGIN');
        cy.contains('JOIN AS A THERAPIST');
    })

    it("CTA's Navigate to /therapist/register", () => {
      cy.viewport('macbook-13');
      cy.get('a[href*="/therapist/register"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })
  
      cy.viewport('ipad-2');
      cy.get('a[href*="/therapist/register"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })
  
      cy.viewport('iphone-8');  
      cy.get('a[href*="/therapist/register"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })  
    })

    it("All Sections Load", () => {
        cy.viewport('macbook-13');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO ARE A GOOD FIT')
        cy.contains('WHY DOES MENTAL HEALTH MATCH MAKE IT EASIER TO FIND YOUR NICHE CLIENTS')
        cy.contains('Let Mental Health Match handle the advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')

        cy.viewport('ipad-2');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO ARE A GOOD FIT')
        cy.contains('WHY DOES MENTAL HEALTH MATCH MAKE IT EASIER TO FIND YOUR NICHE CLIENTS')
        cy.contains('Let Mental Health Match handle the advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')
        
        cy.viewport('iphone-8');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO ARE A GOOD FIT')
        cy.contains('WHY DOES MENTAL HEALTH MATCH MAKE IT EASIER TO FIND YOUR NICHE CLIENTS')
        cy.contains('Let Mental Health Match handle the advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')
    })

    it("Validate Response Headers", () => {
      cy.request(`${Cypress.env('baseUrl')}for-therapists`).as("forTherapistsPage");
      cy.get("@forTherapistsPage")
        .its("headers")
        .its("cache-control")
        .should("include", "max-age=2592000");
    });
  });
  