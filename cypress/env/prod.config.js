const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalStudio: true,
  retries: 3,
  defaultCommandTimeout: 10000,
  env: {
    baseUrl: 'https://www.mentalhealthmatch.com/',
    integrationFolder: 'cypress/integration',
    'therapist-subscribed': {
      email: 'andrew+ladell.erby@mentalhealthmatch.com',
      password: 'test1234!',
    },
    'contact-form': {
      link: 'therapist-profile/texas/houston/crystal-collier',
      name: 'CRYSTAL',
    },
    'admin': {
      email: 'LaDell',
      password: 'c3SCOqQLbcBh',
    },
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
