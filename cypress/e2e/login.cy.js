/// <reference path="../support/commands.d.ts" />

describe('Login', () => {
  it('Login com sucesso', () => {
    cy.guiLogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})