import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import fs from "fs"; // to write to fixture

export default defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    specPattern: "**/*.feature",

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

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
