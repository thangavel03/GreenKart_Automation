describe('API Testing with Cypress', () => {
    it('GET - Fetch Users', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(10);
      });
    });
  });