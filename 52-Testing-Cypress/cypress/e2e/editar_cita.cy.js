/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
  beforeEach('Campos nueva cita', () => {
    // Visita el sitio web
    cy.visit('/index.html');

    cy.get('[data-cy="mascota-input"]')
      .type('Donna'); // escribe en el input

    cy.get('[data-cy="propietario-input"]')
      .type('Fiorela');

    cy.get('[data-cy="telefono-input"]')
      .type('123987312');

    cy.get('[data-cy="fecha-input"]')
      .type('2023-05-08');

    cy.get('[data-cy="hora-input"]')
      .type('20:30');

    cy.get('[data-cy="sintomas-textarea"]')
      .type('Duerme mucho');

    cy.get('[data-cy="submit-cita"]')
      .click();

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'Administra tus Citas');

    // Seleccionar la alerta
    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Se agregó correctamente');

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-success');
  });

  it('Edita la cita', () => {
    cy.get('[data-cy="btn-editar"]')
      .click();
    
    cy.get('[data-cy="mascota-input"]')
      .clear()
      .type('Donnita'); // escribe en el input

    cy.get('[data-cy="submit-cita"]')
      .click();

    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Guardado Correctamente');

    cy.get('[data-cy=alerta]')
      .should('have.class', 'alert-success');
  })
});