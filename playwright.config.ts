/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the QA Automation training programme.
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Where our test files live
  testDir: './tests',

  // Run test files in parallel
  fullyParallel: true,

  // Fail the build on CI if someone leaves test.only in a file
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI only (covered in week 11: flakiness)
  retries: process.env.CI ? 2 : 0,

  // One worker on CI keeps results predictable
  workers: process.env.CI ? 1 : undefined,

  // Produce a clickable HTML report after every run: npm run report
  reporter: 'html',

  // How long one test may run before it fails (30 seconds)
  timeout: 30_000,

  // Shared settings for every test
  use: {
    // Every page.goto('/path') starts from this address.
    // Weeks 1-4 use the practice site. From week 5 this points at our app.
    baseURL: 'https://the-internet.herokuapp.com',

    // Capture a trace when a test fails, so we can replay what happened
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // We start with one browser. Firefox and WebKit come later in the programme.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
