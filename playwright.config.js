// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.STAGING_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: process.env.STAGING_URL ? undefined : {
    command: 'npm start',
    port: 3000,
    reuseExistingServer: true,
  },
});
