/* global cy */

describe("Testing our form inputs", () => {
    beforeEach(function () {
        // runs before each test in this block
        // arrange
        cy.visit("http://localhost:3000")
    });

    it("input name into name input", () => {
        //arrange - et the element
        //act - mimic user interaction
        //assert - test / verify
        cy.get('input[name="name"]')
        .type("Ryan Mersmann")
        .should("have.value", "Ryan Mersmann")
    });

    it("check multiple boxes", () => {
        cy.get('[type="checkbox"]').check()       // Check checkbox element
        cy.get('[type="checkbox"]').first().check()  // Check first radio element
        cy.get('[type="checkbox"]').check('pepperoni', 'canadianbacon')  // Check last radio element
    });

    //submit a form
    it("submit form input", () => {
        cy.get('form').submit()
    });
})