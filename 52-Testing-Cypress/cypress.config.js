const { defineConfig } = require('cypress')
// * npx cypress open
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
    viewportHeight: 1500,
    viewportWidth: 1200,
  },
})