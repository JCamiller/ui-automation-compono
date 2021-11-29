export function navTo(url) {
    cy.visit(url)
}

export function enter(loc, value) {
    cy.xpath(loc).type(value)
}

export function click(loc) {
    cy.xpath(loc).click({force: true})
}

export function assertVisibility(loc) {
    return cy.xpath(loc).should('be.visible')
}

export function assertValue(loc, value) {
    return cy.xpath(loc).should('have.value', value)
}

export function assertText(loc, value) {
    return cy.xpath(loc).contains(value)
}