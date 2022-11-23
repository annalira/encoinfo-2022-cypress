describe('Deve fazer login corretamente', function() {
    it('A home deve estar acessível', function() {    
        cy.visit("https://github.com/");
        cy.contains("Let’s build from here");
    });

    it('Sign in deve estar acessível', function() {  
        cy.contains("Sign in").click();
        cy.contains("Sign in to GitHub");  
    });

    it('Preenchimento deve estar acessível', function() {  
        cy.get("#login_field").type("Anna Júlia");
        cy.get("#password").type("123");  
        //cy.contains("Sign in").eq(1).click();
        cy.get('input[name="commit"]').click();
    });
});