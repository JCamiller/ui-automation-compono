const common = require('../common')
const locator = require('../locators/loginPage')

export function navigateTo(url) {
    common.navTo(url)
}

export function enterUsername(value) {
    common.enter(locator.txtEmail, value)
}

export function enterPassword(value) {
    common.enter(locator.txtPassword, value)
}

export function clickLoginButton() {
    common.click(locator.btnLogin)
}

export function clickSignUpLink() {
    common.click(locator.lnkSignUp)
}