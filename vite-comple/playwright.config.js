// @ts-check
import { defineConfig, devices } from "@playwright/test";
import { ENV_TEST_URL } from "./test/__data__/env.testing";

/* eslint-disable no-undef */

export default defineConfig({
  testDir: "./src",
  testMatch: "*.spec.js",
  outputDir: "./playwright-results",
  globalSetup: "./test/playwright.setup.js",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 3,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: ENV_TEST_URL,
    trace: "on-first-retry",
    storageState: "./test/__data__/local-storage.json",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local test server before starting the tests */
  webServer: {
    command: "npm run test",
    url: ENV_TEST_URL,
    reuseExistingServer: !process.env.CI,
  },
});
