// import cypress from "cypress";

class Searching {
    SearchField="input[type='search']";

    Visit(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    }

    searchTerm(productName){
        cy.get(this.SearchField).type(productName);
    }

    verifyProductCount(expectedCount){
        cy.get('.products').find('.product').should('have.length',expectedCount);
    }

    AddtoCart(index){
        cy.get('.products').find('.product').eq(index).contains("ADD TO CART").click();
    }

    GoToCart(){
        cy.get('.cart-icon > img').click();
    }

    VerifyCart(expectedCount){
        cy.get('td >strong').first().should('have.text',expectedCount);
    }

    CheckoutButton() {
        cy.contains('PROCEED TO CHECKOUT').click({ force: true });

    }

    ProductPrice(index){

        var text = cy.get('.product').find('.product-price').eq(index).invoke('text').then((price) => {
            cy.log('Product Price:', price.trim());
          }); 

    }
    promoInfo(expectedText) {  
        cy.get('.promoInfo')
            .should('be.visible')
            .and('have.text', expectedText);
    };
    agreeTerms(){
    return cy.get('.chkAgree').check();
    }
};
export default new Searching;  