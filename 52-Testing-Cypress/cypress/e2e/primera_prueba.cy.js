/// <reference types="cypress" />

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    // Visita el sitio web
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
  
    // Busca si la pagina que visita coincide con la busqueda acceciendo despues de  visitar la web
    // Verifica su elemento y texto
    cy.contains('h1', 'Administrador de Pacientes de Veterinaria');

    // Busqueda de elemento mas generalizada. Get obtiene elemento de DOM y comprueba su contenido.
    // Verifica si existe
    //cy.get('h1').should('exist'); // ! Mala practica porque es muy general
    cy.get('[data-cy="titulo-proyecto"]').should('exist'); // buena practica porque es mas especifico en lo que busca

    // Verificar que exista el elemento y contenga un texto en especifico
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');

    // Verificar el texto de las citas
    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('not.equal', 'Fiorela');
  })
})