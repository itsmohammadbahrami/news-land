/// <reference types="cypress" />


describe('URL Check', () => {
   it('Check /en', () => {
      cy.visit('/en');
      cy.wait(7000)
   });

   it('Check /de', () => {
      cy.visit('/de');
      cy.wait(7000)
   });
});
