/**
 * Tests the login functionality of the Sauce Demo website.
 *
 * This test navigates to the Sauce Demo website, fills in the username and password
 * fields, and clicks the login button. It then asserts that the user is redirected
 * to the inventory page.
 */
const { test, expect } = require("@playwright/test");
const { error } = require("console");

test("login checker", async ({ page }) => {
  // Navigate to the Sauce Demo login page
  await page.goto("https://www.saucedemo.com/");

  // Fill in login credentials using placeholder text to locate elements
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click the login button using accessibility role selector
  await page.getByRole("button", { name: "Login" }).click();

  // Verify successful login by checking if URL matches the inventory page
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("locked user", async ({ page }) => {
  // Navigate to the Sauce Demo login page
  await page.goto("https://www.saucedemo.com/");

  // Fill in login credentials using placeholder text to locate elements
  await page.getByPlaceholder("Username").fill("locked_out_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click the login button using accessibility role selector
  await page.getByRole("button", { name: "Login" }).click();

  // Looks for error message to appear
  let err = (await page.locator('[data-test="error"]').innerText());

  // Prints the Error message
  console.log("Error Message: " + err)

  // Verify successful login by checking if URL matches the inventory page
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});