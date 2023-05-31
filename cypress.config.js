const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4bajr8',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    specPattern: [
      'cypress/e2e/2-advanced-examples/1Fe_Login.spec.js',
      'cypress/e2e/2-advanced-examples/2Fe_Dashboard.spec.js',
    ],
    projectId: '4bajr8', // Set the projectId for recording
    recordKey: '323f9d3f-caaa-4904-a876-638017f85dd9', // Set your record key
  },
  // Rest of your configuration...
});
