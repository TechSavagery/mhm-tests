describe("Guide To Therapy Page", () => {
    beforeEach(() => {
      cy.window().then((win) => {
            win.sessionStorage.clear()
          })
      cy.clearCookies();
      cy.visit('https://mentalhealthmatch.com/articles/about-therapy-and-mental-health/');
      cy.get('._close-icon').click();
    });
  
    it("Page Loads Successfully", () => {
        cy.viewport('macbook-13');
        cy.title().should('include', 'About Therapy and Mental Health');
        cy.contains('Guide to Therapy and Mental Health');
        cy.contains('Is therapy for me?');
        cy.contains('What happens in therapy?');
        cy.contains('How to pay for therapy');
        cy.contains('How to find a therapist');
        cy.contains('Types of therapy');
        cy.contains('Types of therapists');
        cy.contains('Signs of mental health problems');
        cy.contains('Understanding mental health');

        cy.viewport('ipad-2');
        cy.title().should('include', 'About Therapy and Mental Health');
        cy.contains('Guide to Therapy and Mental Health');
        cy.contains('Is therapy for me?');
        cy.contains('What happens in therapy?');
        cy.contains('How to pay for therapy');
        cy.contains('How to find a therapist');
        cy.contains('Types of therapy');
        cy.contains('Types of therapists');
        cy.contains('Signs of mental health problems');
        cy.contains('Understanding mental health');

        cy.viewport('iphone-8');
        cy.title().should('include', 'About Therapy and Mental Health');
        cy.contains('Guide to Therapy and Mental Health');
        cy.contains('Is therapy for me?');
        cy.contains('What happens in therapy?');
        cy.contains('How to pay for therapy');
        cy.contains('How to find a therapist');
        cy.contains('Types of therapy');
        cy.contains('Types of therapists');
        cy.contains('Signs of mental health problems');
        cy.contains('Understanding mental health');
    })

    it("Search Form Return Results", () => {
        cy.viewport('macbook-13');
        cy.get('#epkb_search_terms').clear();
        cy.get('#epkb_search_terms').type('insurance');
        cy.get('#epkb-search-kb').click();
        cy.contains('How is therapy billed to my insurance?'); 

        cy.viewport('ipad-2');
        cy.get('#epkb_search_terms').clear();
        cy.get('#epkb_search_terms').type('insurance');
        cy.get('#epkb-search-kb').click();
        cy.contains('How is therapy billed to my insurance?');  

        cy.viewport('iphone-8');
        cy.get('#epkb_search_terms').clear();
        cy.get('#epkb_search_terms').type('insurance');
        cy.get('#epkb-search-kb').click();
        cy.contains('How is therapy billed to my insurance?');        
    })

    it("Links Go To Blog Post Single Page", () => {
        cy.viewport('macbook-13');
        cy.contains('How do I improve my mental health?').click({force: true}); 
        cy.url().should('include', '/how-do-i-improve-my-mental-health');

        cy.viewport('ipad-2');
        cy.contains('How do I improve my mental health?').click({force: true}); 
        cy.url().should('include', '/how-do-i-improve-my-mental-health');  

        cy.viewport('iphone-8');
        cy.contains('How do I improve my mental health?').click({force: true}); 
        cy.url().should('include', '/how-do-i-improve-my-mental-health')    
    })
  });
  