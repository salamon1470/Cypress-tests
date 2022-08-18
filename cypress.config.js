const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://35.205.56.34/',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    video: false,
  },
});
