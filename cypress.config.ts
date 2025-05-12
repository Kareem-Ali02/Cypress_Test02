import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import mochawesome from "cypress-mochawesome-reporter/plugin";
import fs from "fs"; // to write to fixture

export default defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "**/*.feature",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Automation Exercise Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      overwrite: false,
      quiet: true,
      html: true,
      json: true,
      reportDir: "cypress/reports/mochawesome",
    },

    async setupNodeEvents(on, config) {
      // Cucumber BDD plugin
      await addCucumberPreprocessorPlugin(on, config);

      // esbuild preprocessor for .feature steps
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Mochawesome reporter plugin
      mochawesome(on);

      // Custom task to write fixture file
      on("task", {
        writeUserData(data) {
          fs.writeFileSync(
            "cypress/fixtures/user.json",
            JSON.stringify(data, null, 2)
          );
          return null;
        },
      });

      return config;
    },
  },
});
