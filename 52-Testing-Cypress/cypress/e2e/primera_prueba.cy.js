/// <reference types="cypress" />

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    // Visita el sitio web
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
  
    // Busca si la pagina que visita coincide con la busqueda acceciendo despues de  visitar la web
    cy.contains('h1', 'Administrador de Pacientes de Veterinaria');

    // Busqueda de elemento mas generalizada.
    cy.get('h1').should('exist');
  })
})