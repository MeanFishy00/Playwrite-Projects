QA Automation Portfolio Showcase

This repository highlights my skills in Quality Assurance Automation using Playwright. It demonstrates various automated tests for web applications, focusing on functional testing, link validation, and usability. The repository is organized using best practices like the Page Object Model (POM) to ensure scalability and maintainability.
Contents

    Purpose
    Test Descriptions
        Sauce Labs Login Tests
        Ultimate QA Link Validation Tests
    Setup Instructions
    How to Run Tests
    Why This Matters
    Future Enhancements

Purpose

The goal of these tests is to:

    Validate critical login functionality for various user roles on the Sauce Labs platform.
    Crawl and analyze links on the Ultimate QA website to ensure no broken or invalid links exist.

These tests are designed to showcase my expertise in web automation, error handling, and functional validation.
Test Descriptions
Sauce Labs Login Tests

Located in loginflow.spec.js, these tests validate the login functionality of Sauce Labs' web application for different user roles.
Key Features

    Reusable Methods (Page Object Model):
        Navigation to the login page.
        Filling in credentials.
        Clicking the login button.
        Verifying successful login by checking the URL.

    Test Scenarios:
        standard_user: Ensures a regular user can log in successfully.
        locked_out_user: Validates error handling for locked accounts.
        problem_user: Tests behavior when issues occur with the user's data.
        performance_glitch_user: Simulates performance challenges during login.
        visual_user: Ensures login functionality for visually distinct data types.

What These Tests Accomplish

    Ensure robust login functionality for all user roles.
    Highlight error scenarios and edge cases.
    Validate successful redirection post-login.

Ultimate QA Link Validation Tests

Located in ultimateqa.spec.js, these tests validate links on the Ultimate QA Automation Page.
Key Features

    Page Href Grabber:
        Extracts all unique links (hrefs) from the page.
        Logs the total number of links to the console.

    Nav Page Hrefs:
        Crawls and categorizes links:
            Internal Links: Links that belong to the same website.
            External Links: Links that redirect outside the website.
            Failed Links: Links that are broken or return an error.

    Output:
        Categorizes and prints all internal, external, and failed links.
        Logs the total count for each category.

What These Tests Accomplish

    Provide a comprehensive audit of website links.
    Identify and report broken links to improve user experience.
    Ensure that all navigational paths are functional and valid.
