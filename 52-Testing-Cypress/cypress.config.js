const { defineConfig } = require('cypress');

// * npx cypress open
// * npx cypress run

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
    viewportHeight: 1500,
    viewportWidth: 1200,
  },
})