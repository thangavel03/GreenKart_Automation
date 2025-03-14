import Searching from "../PageObjects/Search";
describe ('Search Functionality', function(){
beforeEach(() => {
    Searching.Visit(); // Visit before each test
});

    it('should search for a product and add it to cart', function(){
        Searching.searchTerm("Ca");
        Searching.verifyProductCount(4);
        Searching.AddtoCart(3);
        Searching.GoToCart();
        Searching.VerifyCart("1");
    });
    it('Checkout', function(){
        Searching.searchTerm("Ca");
        Searching.verifyProductCount(4);
        Searching.AddtoCart(3);
        Searching.GoToCart();
        Searching.VerifyCart("1");
        Searching.CheckoutButton();
        Searching.ProductPrice(3);
        cy.get('.promoCode').type("1234");
        cy.get('.promoBtn').click();
        cy.wait(7000);             
        Searching.promoInfo("Invalid code ..!");
        cy.contains('Place Order').click();
        cy.get('select').select("India");
        Searching.agreeTerms().should("be.checked");
        cy.contains('Proceed').click();
        cy.get('[style="color:green;font-size:25px"]').should('have.text',"Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!");
    });
});
