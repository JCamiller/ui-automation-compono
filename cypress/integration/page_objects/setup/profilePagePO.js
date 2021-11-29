const common = require('../common')
const locator = require('../locators/profilePage')

export function verifyPage() {
    common.assertVisibility(locator.lblProfileNameHeader)
}

export function verifyCVResumeTitle(value) {
    common.assertVisibility(locator.lblCVResumeCardHeader)
    common.assertText(locator.lblCVResumeCardHeader, value)
}

export function verifyCVResumeDescription(value) {
    common.assertVisibility(locator.lblCVResumeCardDescription)
    common.assertText(locator.lblCVResumeCardDescription, value)
}

export function verifyCVResumeFileName(value) {
    common.assertVisibility(locator.lblCVResumeFileName)
    common.assertText(locator.lblCVResumeFileName, value)
}

export function verifyUploadCVSuccessMessage(value) {
    common.assertVisibility(locator.lblUploadSuccessMessage)
    common.assertText(locator.lblUploadSuccessMessage, value)
}

export function clickUpdateYourCVButton() {
    common.click(locator.btnUpdateYourCV)
}

export function clickUploadYourCVButton() {
    common.click(locator.btnUploadYourCVModal)
}

export function clickUploadCVModalProfilePrefillCheckbox() {
    common.click(locator.chkProfilePrefillOption)
}

export function clickUploadCVModalXIcon() {
    common.click(locator.iconUploadYourCVModalClose)
}

export function clickExperienceAndSkillsEditButton() {
    common.click(locator.lnkExperienceAndSkillsEdit)
}

export function uploadAFile(fileName) {
    cy.xpath(locator.uploadFileUploadCV).attachFile(fileName)
    cy.wait(10000)
}