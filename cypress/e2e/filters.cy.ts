/// <reference types="cypress" />

import { deTexts, enTexts, getArray, testIds } from "../utils";

describe('Filter elements', () => {
    beforeEach(() => {
        cy.visit('/').wait(7000)
    })

    it('Check elements', () => {
        cy.findByTestId(testIds.filters.container)
        cy.findByTestId(testIds.filters.title)
        cy.findByTestId(testIds.filters.category)
        cy.findByTestId(testIds.filters.categoryTags)
            .children().should('have.length', 4)
        cy.findByTestId(testIds.filters.date)
        cy.findByTestId(testIds.filters.dateInput)
        cy.findByTestId(testIds.filters.source)
        cy.findByTestId(testIds.filters.sourceInput)
    });

});

describe('Filter texts', () => {

    const checkFilterTexts = (language: 'en' | 'de', texts: typeof enTexts) => {
        cy.visit(`/${language}`).wait(7000);
        cy.findByTestId(testIds.filters.category)
            .contains(texts.filters.category);
        getArray(texts.filters.categoryItems)
            .forEach(category => cy.findByTestId(testIds.filters.category).contains(category));
        cy.findByTestId(testIds.filters.date)
            .contains(texts.filters.date);
        cy.findByTestId(testIds.filters.source)
            .contains(texts.filters.source);
        cy.findByTestId(testIds.filters.source)
            .contains(texts.filters.sourcePlaceholder);
    };

    it('Check "EN" texts', () => {
        checkFilterTexts('en', enTexts)
    });

    it('Check "DE" texts', () => {
        checkFilterTexts('de', deTexts)
    });
});

describe('Filter functionality', () => {

    beforeEach(() => {
        cy.visit('/en').wait(7000)
    })

    it('Should change active tag on click second tag', () => {
        cy.findByTestId(testIds.filters.categoryTags)
            .contains(getArray(enTexts.filters.categoryItems)[1])
            .click()
            .should('have.class', 'bg-blue-primary text-white')
    });

    it('Should filter news on click second tag', () => {
        cy.findByTestId(testIds.filters.categoryTags)
            .contains(getArray(enTexts.filters.categoryItems)[1])
            .click()

        cy.findByTestId(`${testIds.news.item}-0`)
            .contains(getArray(enTexts.filters.categoryItems)[1])
    });

});