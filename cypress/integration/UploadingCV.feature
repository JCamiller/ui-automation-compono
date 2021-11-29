Feature: Uploading CV

    A user wants to upload a CV

    Scenario: Visibility Of Upload CV Card Title
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        And it should display upload cv card title as "CV/Resume Upload"
        
    Scenario: Visibility of Upload CV card description
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        And it should display upload cv card description as "Your CV will be available to employers when you apply"

    Scenario: Success message after uploading a CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And it should display upload cv success message as "Your CV has been uploaded, and your profile has been prefilled!"
        
    Scenario: Visibility of uploaded file on CV card
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        Then it should display the CV filename "AutomationT.docx"

    Scenario: Success message after uploading a CV when 'Profile prefill is off'
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I click profile prefill checkbox
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And it should display upload cv success message as "Success, your CV has been uploaded!"

    Scenario: Visibility of prefilled job titles from CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill job titles "LEAD QUALITY ENGINEER,SENIOR QUALITY ENGINEER"

    Scenario: Visibility of prefilled company names from CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill company names "Sample Company Uno,Sample Company Dos"

    Scenario: Visibility of prefilled commenced dates from CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill commenced and completed dates "Jun 2021 – Jun 2021,Mar 2021 – Mar 2021"

    Scenario: Validate missing commenced dates from CV should not be prefilled
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I enter email as "automationtester123@email.com" 
        When I enter password as "P@ssword"
        When I click login button
        Then it should redirect to profile page
        When I click update your CV button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should not prefill commenced and completed dates "May 2020 – December 2020"

    Scenario: Visibility of prefilled job titles from CV using new account
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I click signup link
        And I fill up sign up details
        And I click sign up button
        Then it should redirect to personal details page
        When I fill up personal details
        And I click save button
        And I click upload cv button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill job titles "LEAD QUALITY ENGINEER,SENIOR QUALITY ENGINEER"

    Scenario: Visibility of prefilled company names from CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I click signup link
        And I fill up sign up details
        And I click sign up button
        Then it should redirect to personal details page
        When I fill up personal details
        And I click save button
        And I click upload cv button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill company names "Sample Company Uno,Sample Company Dos"

    Scenario: Visibility of prefilled commenced dates from CV
        Given I navigate to "https://candidate-qa-exercise.reviews.compono.dev/signin"
        When I click signup link
        And I fill up sign up details
        And I click sign up button
        Then it should redirect to personal details page
        When I fill up personal details
        And I click save button
        And I click upload cv button
        And I uploaded a file "AUTOMATION_TESTER_CV.docx"
        And I click the Upload CV modal X icon
        And I click Experience and Skills edit button
        Then it should prefill commenced and completed dates "Jun 2021 – Jun 2021,Mar 2021 – Mar 2021"