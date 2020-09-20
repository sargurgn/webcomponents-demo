/// <reference types="cypress" />

context('Tests for -> Form Component', () => {

  const colors = ['red', 'green', 'blue'];

  beforeEach(() => {
    cy.visit('http://localhost:2000/')
    cy.get('select[id="id-native-simple"]').select('testable-formcomponent').then(() => {
      cy.get('button[id="but-load-component"]').click();
    });
  })

  it('Test event propogation from wc to host', () => {
    cy.get('input[id="color-1"]').type(colors[0]).should('have.value', colors[0])
    cy.get('input[id="color-2"]').type(colors[1]).should('have.value', colors[1])
    cy.get('input[id="color-3"]').type(colors[2]).should('have.value', colors[2])
    cy.get('button[id="host_message"]').click();
    cy.get('#host_color_list').children('li').each((li, i) => {
      expect(li).contain(colors[i]);
    });
  })

})
