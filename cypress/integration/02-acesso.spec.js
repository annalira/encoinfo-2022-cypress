describe('O site deve estar acessível', function() {

    it('A home deve estar acessível', function() {    
        cy.visit("https://github.com/");
        cy.contains("Let’s build from here");
    });
});