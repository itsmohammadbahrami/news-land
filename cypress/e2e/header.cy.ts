/// <reference types="cypress" />

import { testIds } from "../utils";

describe('Header elements', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(7000)
    })

    it('Check elements', () => {
        cy.findByTestId(testIds.header.container)
        cy.findByTestId(testIds.header.logo)
        cy.findByTestId(testIds.header.language)
    });

    it(`Url should contain "en" on first load`, () => {
        cy.url().should('contain', 'en')
    });

});

describe('Header functionality', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(7000)
    })
    it(`Url should contain "de" after click on "DE"`, () => {
        cy.contains('DE').click();
        cy.wait(1000)
        cy.url().should('contain', 'de')
    });

});
