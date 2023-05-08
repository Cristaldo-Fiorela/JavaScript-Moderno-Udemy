/// <reference types="cypress" />

describe('Validar el formulario', () => {
  it('Submit al formulario y mostrar la alerta de error', () => {
    cy.visit('/index.html');

    cy.get('[data-cy="formulario"]')
      .submit();

    // Seleccionar la alerta
    cy.get('[data-cy=alerta]')
      //.should('have.class', 'alert-danger'); // !funciona antes de invodar el texto, despues no.
      .invoke('text')
      .should('equal', 'Todos los campos son Obligatorios');

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-danger');
  })
})