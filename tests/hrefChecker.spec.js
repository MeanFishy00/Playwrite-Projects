// @ts-check

// Import the test and expect functions from the Playwright library
const { test, expect } = require("@playwright/test");

// Define the URL of the website to be tested
const TestSite = "https://ultimateqa.com/automation";

// Initialize empty arrays to store the links
const intLinks = []; // Internal Links
const exLinks = []; // External Links
const failedLinks = []; // Failed Links

// This test.beforeEach hook is executed before each test and signs in each page.
test.beforeEach(async ({ page }) => {
  // Navigate to the TestSite and wait for the page to load
  await page.goto(TestSite, { timeout: 30000 });
  await page.waitForLoadState("load", { timeout: 30000 });
});

// This test extracts all the hrefs from the current page and logs them to the console.
test("Page Href Grabber", async ({ page }) => {
  // Use page.evaluate to extract all the hrefs from the page
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });

  // Create a set of unique values using Set constructor
  let s = new Set(hrefs);

  // Convert the set back to an array
  let a1 = [...s];

  // Log each href to the console
  a1.forEach(function (linksText) {
    console.log(linksText);
  });

  // Log the number of hrefs
  console.log(a1.length);
});

// This test crawls the website, extracts the links, and categorizes them into internal, external, or failed links.
test("Nav page Hrefs", async ({ page }) => {
  // Initialize an empty array to store all the links
  const allLinks = [];

  // Use page.evaluate to extract all the hrefs from the page
  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map((item) => item.href);
  });

  // Create a set of unique values using Set constructor
  let s = new Set(hrefs);

  // Convert the set back to an array
  let a1 = [...s];

  // Iterate over each href
  for (let i = 0; i < a1.length; i++) {
    // If the href starts with the TestSite, it's an internal link
    if (a1[i].startsWith(TestSite)) {
      try {
        // Navigate to the href and wait for the page to load
        await page.goto(a1[i]);
        await page.waitForURL(a1[i]);

        // Use page.evaluate to extract all the hrefs from the page
        let pageHref = await page.evaluate(() => {
          return Array.from(document.links).map((item) => item.href);
        });

        // Create a set of unique values using Set constructor
        let c = new Set(pageHref);

        // Convert the set back to an array
        let cl = [...c];

        // Add each href to the allLinks array
        cl.forEach(function (linksText) {
          allLinks.push(linksText);
        });
      } catch (err) {
        // If the href fails to load or returns an error, it's a failed link
        failedLinks.push(a1[i]);
      }
    } else {
      // If the href doesn't start with the TestSite, it's an external link
      exLinks.push(a1[i]);
    }
  }

  // Categorize the allLinks array into internal, external, or failed links
  allLinks.forEach(function (linksText) {
    if (linksText.startsWith(TestSite)) {
      intLinks.push(linksText);
    } else {
      exLinks.push(linksText);
    }
  });

  // Create sets of unique values for intLinks, ex
  // Create sets of unique values for intLinks, exLinks, and failedLinks
  let f3 = new Set(failedLinks);
  let finalFailed = [...f3];

  let f2 = new Set(intLinks);
  let finalInt = [...f2];

  let f1 = new Set(exLinks);
  let finalEx = [...f1];

  // Log the categories and their lengths
  console.log("------------     Internal Links     -----------------");
  finalInt.forEach(function (linksText) {
    console.log(linksText);
  });

  console.log("------------     External Links     -----------------");
  finalEx.forEach(function (linksText) {
    console.log(linksText);
  });

  console.log("------------     Failed Links     -----------------");
  finalFailed.forEach(function (linksText) {
    console.log(linksText);
  });

  console.log(" Internal Links: " + finalInt.length);
  console.log(" External Links: " + finalEx.length);
  console.log(" Failed Links: " + failedLinks.length);
  console.log(
    " Total Links: " + (finalInt.length + finalEx.length + finalFailed.length)
  );
});
