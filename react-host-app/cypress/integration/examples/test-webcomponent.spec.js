/// <reference types="cypress" />

context('Tests for -> Web Component', () => {

  beforeEach(() => {
    cy.visit('http://localhost:2000/')
    cy.get('select[id="id-native-simple"]').select('testable-component').then(() => {
      cy.get('button[id="but-load-component"]').click();
    });
  })

  it('Test event propogation from wc to host', () => {
    cy.get('span[name="accordian_text"]').click()
    cy.get('input[name="enter_color"]').type('black').should('have.value', 'black')
    cy.get('button[name="submit_color"]').click()
    cy.get('span[name="host_message"]').contains('Color is black')
  })

})
