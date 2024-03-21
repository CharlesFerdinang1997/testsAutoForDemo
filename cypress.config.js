const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber()),
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
 
/* const { defineConfig } = require('cypress')

module.exports = defineConfig({

  'cypress-cucumber-preprocessor': {

    nonGlobalStepDefinitions: false,

    step_definitions: './cypress/e2e/login/',

  },

  e2e: {

    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on, config)

    },

    specPattern: 'cypress/e2e/*.feature',

    supportFile:false

  },

}) */