UI Automation

- This automation script is written on Cypress using CucumberJS (NodeJS)
- The script follows the BDD behavior and uses Gherkin format that correlates the feature files

> In this automation script, it assumes that all test scenarios outside the specified scope had already been automated. Thus, focusing only within the scope of the scenario.

> The automation script also follows page-object model design. This allows the script to be organized whenever a certain change should be given.

> Note that both positive and negative scenarios are within the same feature file. All scenarios specified within the script has a corresponding reference in the exploratory test made earlier.
---

__Pre-requisites:__

- Need `npm` to be installed to run the script https://nodejs.org/en/download/

__Needed Packages:__
- cypress
- cypress-cucumber-preprocessor
- cypress-xpath
- faker

> To install all pre-requisite packages from the package.json file, run `npm install`

__How to run tests:__

> To run all test with GUI, run `npm run test-all`

> To run all test in headless, run `npm run test-all-headless`