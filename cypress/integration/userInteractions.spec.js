/// <reference types="Cypress" />

// https://on.cypress.io/interacting-with-elements

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('input box should accept input from user', () => {
    cy.get('input[placeholder="Search documents..."')
      .type('XXX').should('have.value', 'XXX')
  })

  it('grid item should be able to be deleted', () => {
    cy.get('.doc-grid li').should('have.length', 6)
    cy.get('.doc-grid li:first button.delete').click()
    cy.get('.doc-grid li').should('have.length', 5)
  })
  
  // FILE UPLOAD TEST IF TIME
  // https://github.com/abramenal/cypress-file-upload#readme
  // https://github.com/abramenal/cypress-file-upload/tree/master/example
})
