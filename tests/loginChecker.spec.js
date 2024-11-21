const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginflow");

// Before each test, navigate to the Sauce Demo login page
test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

/**
 * Test the login flow with standard user credentials.
 */
test("login with standard user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.standardUserFlow();
});

/**
 * Test the login flow with locked out user credentials.
 */
test("login with locked user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.lockedUserFlow();
});

/**
 * Test the login flow with problem user credentials.
 */
test("login with problem user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.problemUserFlow();
});

/**
 * Test the login flow with performance glitch user credentials.
 */
test("login with performance user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.performanceUserFlow();
});

/**
 * Test the login flow with visual user credentials.
 */
test("login with visual user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visualUserFlow();
});
