const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    defaultCommandTimeout: 30000,
    requestTimeout: 20000
  }
})