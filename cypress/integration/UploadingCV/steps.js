const loginPO = require('../page_objects/setup/loginPagePO')
const profilePO = require('../page_objects/setup/profilePagePO')
const signUpPO = require('../page_objects/setup/signUpPage')
const personalDetailsPO = require('../page_objects/setup/personalDetailsPO')
const experienceAndSkillsPO = require('../page_objects/setup/experienceAndSkillsPagePO')

// GIVEN //
Given('I navigate to {string}', (url) => {
    loginPO.navigateTo(url)
})

// WHEN //
When('I enter email as {string}', (value) => {
    loginPO.enterUsername(value)
})

When('I enter password as {string}', (value) => {
    loginPO.enterPassword(value)
})

When('I click login button', () => {
    loginPO.clickLoginButton()
})

When('I click signup link', () => {
    loginPO.clickSignUpLink()
})

When('I fill up sign up details', () => {
    signUpPO.fillUpSignUpDetails()
})

When('I click sign up button', () => {
    signUpPO.clickSignUpButton()
})

When('I fill up personal details', () => {
    personalDetailsPO.fillUpPersonalDetails()
})

When('I click save button', () => {
    personalDetailsPO.clickSaveButton()
})

When('I click upload cv button', () => {
    profilePO.clickUploadYourCVButton()
})

When('I click update your CV button', () => {
    profilePO.clickUpdateYourCVButton()
})

When('I uploaded a file {string}', (fileName) => {
    profilePO.uploadAFile(fileName)
})

When('I click profile prefill checkbox', () => {
    profilePO.clickUploadCVModalProfilePrefillCheckbox()
})

When('I click the Upload CV modal X icon', () => {
    profilePO.clickUploadCVModalXIcon()
})

When('I click Experience and Skills edit button', () => {
    profilePO.clickExperienceAndSkillsEditButton()
})

// THEN //
Then('it should redirect to profile page', () => {
    profilePO.verifyPage()
})

Then('it should display upload cv card title as {string}', (value) => {
    profilePO.verifyPage()
    profilePO.verifyCVResumeTitle(value)
})

Then('it should display upload cv card description as {string}', (value) => {
    profilePO.verifyCVResumeDescription(value)
})

Then('it should display the CV filename {string}', (value) => {
    profilePO.verifyCVResumeFileName(value)
})

Then('it should display upload cv success message as {string}', (value) => {
    profilePO.verifyUploadCVSuccessMessage(value)
})

Then('it should prefill job titles {string}', (value) => {
    experienceAndSkillsPO.verifyJobTitles(value)
})

Then('it should prefill company names {string}', (value) => {
    experienceAndSkillsPO.verifyCompanyNames(value)
})

Then('it should prefill commenced and completed dates {string}', (value) => {
    experienceAndSkillsPO.verifyDateCommencedCompleted(value)
})

Then('it should not prefill job titles {string}', (value) => {
    experienceAndSkillsPO.verifyJobTitleIsNotVisible(value)
})

Then('it should not prefill commenced and completed dates {string}', (value) => {
    experienceAndSkillsPO.verifyCommencedDateCompletedIsNotVisible(value)
})

Then('it should redirect to personal details page', () => {
    personalDetailsPO.verifyPage()
})