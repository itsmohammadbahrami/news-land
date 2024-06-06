/// <reference types="cypress" />

import { deTexts, enTexts, getArray, testIds } from "../utils";

describe('News elements', () => {
    beforeEach(() => {
        cy.visit('/').wait(7000)
    })

    it('Check elements', () => {
        cy.findByTestId(testIds.news.container)
        cy.findByTestId(testIds.news.tabs)
        cy.findByTestId(testIds.news.searchInput)
        cy.findByTestId(testIds.news.listContainer)
    });

});

describe('News texts', () => {

    const checkNewsTexts = (language: 'en' | 'de', texts: typeof enTexts) => {
        cy.visit(`/${language}`).wait(7000);
        getArray(texts.mainContent.tabs)
            .forEach(tab => cy.findByTestId(testIds.news.tabs).contains(tab));
    };

    it('Check "EN" texts', () => {
        checkNewsTexts('en', enTexts)
    });

    it('Check "DE" texts', () => {
        checkNewsTexts('de', deTexts)
    });
});

describe('News functionality', () => {

    beforeEach(() => {
        cy.visit('/en').wait(7000)
    })

    it('Should change active tab on click second tab', () => {
        cy.findByTestId(testIds.news.container)
            .contains(getArray(enTexts.mainContent.tabs)[1])
            .click()
            .should('have.attr', 'aria-selected', 'true')
    });

    it('Should hide date filter on "My Feed" tab activated', () => {
        cy.findByTestId(testIds.news.container)
            .contains(getArray(enTexts.mainContent.tabs)[1])
            .click()
        cy.findByTestId(testIds.filters.container)
            .should('not.contain', enTexts.filters.date)
    });

    it('Should display relative words on search', () => {
        cy.findByTestId(testIds.news.searchInput)
            .wait(3000)
            .type("Football{enter}")
            .wait(7000)
        cy.findByTestId(testIds.news.listContainer)
            .should('contain', "Football")
    });

});