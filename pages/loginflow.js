/**
 * A page object for the Sauce Labs login page.
 *
 * @class
 */
exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Get the username and password fields and the login button
    this.usernameField = page.getByPlaceholder("Username");
    this.passwordField = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  /**
   * Navigate to the Sauce Labs login page.
   *
   * @returns {Promise<void>}
   */
  async navigateToHomePage() {
    await this.page.goto("https://www.saucedemo.com/");
    await expect(this.page).toHaveTitle("Swag Labs");
  }

  /**
   * Fill in the username and password fields with the given values.
   *
   * @param {string} username
   * @param {string} password
   *
   * @returns {Promise<void>}
   */
  async fillCredentials(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }

  /**
   * Click the login button after filling in the username and password fields.
   *
   * @param {string} username
   * @param {string} password
   *
   * @returns {Promise<void>}
   */
  async login(username, password) {
    await this.fillCredentials(username, password);
    await this.loginButton.click();
  }

  /**
   * Verify that the user has successfully logged in by checking the URL.
   *
   * @returns {Promise<void>}
   */
  async verifyLoginSuccess() {
    await this.page.waitForURL("https://www.saucedemo.com/inventory.html", {
      timeout: 3000,
    });
  }

  /**
   * Execute the login flow with the given username and password.
   *
   * @param {string} username
   * @param {string} password
   *
   * @returns {Promise<void>}
   */
  async executeLoginFlow(username, password) {
    try {
      await this.login(username, password);
      await this.verifyLoginSuccess();
    } catch (error) {
      console.error(
        "Error occurred during login flow:",
        username,
        error.message
      );
      this.test.fail(error.message);
      this.page.close();
    }
  }

  /**
   * Perform the login flow with the standard user credentials.
   *
   * @returns {Promise<void>}
   */
  async standardUserFlow() {
    await this.executeLoginFlow("standard_user", "secret_sauce");
  }

  /**
   * Perform the login flow with the locked out user credentials.
   *
   */
  async lockedUserFlow() {
    await this.executeLoginFlow("locked_out_user", "secret_sauce");
  }

  /**
   * Perform the login flow with the problem user credentials.
   *
   */
  async problemUserFlow() {
    await this.executeLoginFlow("problem_user", "secret_sauce");
  }

  /**
   * Perform the login flow with the performance glitch user credentials.
   *
   */
  async performanceUserFlow() {
    await this.executeLoginFlow("performance_glitch_user", "secret_sauce");
  }

  /**
   * Perform the login flow with the error user credentials.
   *
   */
  async errorUserFlow() {
    await this.executeLoginFlow("error_user", "secret_sauce");
  }

  /**
   * Perform the login flow with the visual user credentials.
   *
   */
  async visualUserFlow() {
    await this.executeLoginFlow("visual_user", "secret_sauce");
  }
};
