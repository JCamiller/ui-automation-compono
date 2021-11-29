const common = require('../common')
const locator = require('../locators/signUpPage')

export function enterFirstName(value) {
    common.enter(locator.txtFirstName, value)
}

export function enterLastName(value) {
    common.enter(locator.txtLastName, value)
}

export function enterEmail(value) {
    common.enter(locator.txtEmail, value)
}

export function enterPassword(value) {
    common.enter(locator.txtPassword, value)
}

export function clickSignUpButton() {
    common.click(locator.btnSignUp)
}

export function fillUpSignUpDetails() {
    const faker = require('faker')

    let testData = {
        "firstName": faker.name.firstName(),
        "lastName": faker.name.lastName(),
        "email": "automationtest" + faker.datatype.number(9999) + "@email.com",
        "password": "P@ssword"
    }

    enterFirstName(testData.firstName)
    enterLastName(testData.lastName)
    enterEmail(testData.email)
    enterPassword(testData.password)
}