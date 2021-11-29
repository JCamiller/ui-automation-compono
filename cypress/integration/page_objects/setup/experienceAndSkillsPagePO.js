const common = require('../common')
const locator = require('../locators/experienceAndSkillsPage')

export function verifyJobTitles(value) {
    let titles = value.split(",")

    cy.xpath(locator.lblCVJobTitle).each((item, index, list) => {
        cy.wrap(item).should("contain.text", titles[index])
    })
}

export function verifyCompanyNames(value) {
    let titles = value.split(",")

    cy.xpath(locator.lblCVCompanyName).each((item, index, list) => {
        cy.wrap(item).should("contain.text", titles[index])
    })
}

export function verifyDateCommencedCompleted(value) {
    let titles = value.split(",")

    cy.xpath(locator.lblDateCommencedCompleted).each((item, index, list) => {
        cy.wrap(item).should("contain.text", titles[index])
    })
}

export function verifyJobTitleIsNotVisible(value) {
    cy.xpath(locator.lblCVJobTitle).each((item, index, list) => {
        cy.wrap(item).should("not.contain.text", value)
    })
}

export function verifyCommencedDateCompletedIsNotVisible(value) {
    cy.xpath(locator.lblDateCommencedCompleted).each((item, index, list) => {
        cy.wrap(item).should("not.contain.text", value)
    })
}