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
        cy.get('a[href*="/register/therapist"]').should(($ctas) =>{
          expect($ctas).length.to.be.greaterThan(3);
        });
        cy.get('#SIT').click();
        cy.contains('THERAPIST HOME');
        cy.contains('CONTACT US');
        cy.contains('PRICING');
        cy.contains('LOGIN');
        cy.contains('JOIN AS A THERAPIST');
        //cy.viewport('iphone-8');
                cy.get('a[href*="/register/therapist"]').should(($ctas) =>{
          expect($ctas).length.to.be.greaterThan(3);
        });
        cy.get('#SIT').click();
        cy.contains('THERAPIST HOME');
        cy.contains('CONTACT US');
        cy.contains('PRICING');
        cy.contains('LOGIN');
        cy.contains('JOIN AS A THERAPIST');
    })

    it("CTA's Navigate to /register/therapist", () => {
      cy.viewport('macbook-13');
      cy.get('a[href*="/register/therapist"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })
  
      cy.viewport('ipad-2');
      cy.get('a[href*="/register/therapist"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })
  
      cy.viewport('iphone-8');  
      cy.get('a[href*="/register/therapist"]').first().invoke('attr','href').then(href => {
        cy
        .request(href)
        .its('status')
        .should('eq', 200)
      })  
    })

    it("All Sections Load", () => {
        cy.viewport('macbook-13');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO FEEL A STRONG')
        cy.contains('WHY ARE YOU MORE LIKELY TO FIND')
        cy.contains('Mental Health Match is skilled at advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')

        cy.viewport('ipad-2');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO FEEL A STRONG')
        cy.contains('WHY ARE YOU MORE LIKELY TO FIND')
        cy.contains('Mental Health Match is skilled at advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')
        
        cy.viewport('iphone-8');
        cy.contains('BREAK THROUGH THE NOISE')
        cy.contains('GROW YOUR PRACTICE WITH CLIENTS WHO FEEL A STRONG')
        cy.contains('WHY ARE YOU MORE LIKELY TO FIND')
        cy.contains('Mental Health Match is skilled at advertising')
        cy.contains('EXPLORE NEW IDEAS TO GROW')
    })
  });
  