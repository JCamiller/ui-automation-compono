const common = require('../common')
const locator = require('../locators/personalDetailsPage')

export function verifyPage() {
    common.assertVisibility(locator.lblPersonalDetailsHeader)
}

export function enterPhoneNumber(value) {
    common.enter(locator.txtPhoneNumber, value)
}

export function enterPreferredWorkLocation(value) {
    common.click(locator.txtPreferredWorkLocation)
    common.enter(locator.txtPreferredWorkLocationList, value)
    cy.wait(1000)
    common.click(locator.dropPreferredWorkLocationList)
}

export function enterTimezone(value) {
    common.click(locator.txtTimezone)
    common.enter(locator.txtTimezoneList, value)
    cy.wait(1000)
    common.click(locator.dropTimezoneList)
}

export function chooseSalaryExpectationMinDropdown() {
    common.click(locator.dropSalaryExpectationsMin)
    cy.wait(500)
    common.click(locator.dropSalaryExpectationsMinList)
}

export function chooseSalaryExpectationMaxDropdown() {
    common.click(locator.dropSalaryExpectationsMax)
    cy.wait(500)
    common.click(locator.dropSalaryExpectationsMaxList)
}

export function clickEmploymentFullTime() {
    common.click(locator.chkEmploymentTypeFullTime)
}

export function clickSaveButton() {
    common.click(locator.btnSave)
}

export function fillUpPersonalDetails() {
    let testData = {
        "phoneNumber": "09111111111",
        "preferredWorkLocation": "Philippines",
        "timezone": "Asia/Hong_Kong",
    }

    enterPhoneNumber(testData.phoneNumber)
    enterPreferredWorkLocation(testData.preferredWorkLocation)
    enterTimezone(testData.timezone)
    clickEmploymentFullTime()
    chooseSalaryExpectationMinDropdown()
    chooseSalaryExpectationMaxDropdown()
}