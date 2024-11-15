// @ts-check
const { test, expect } = require('@playwright/test');

// Change Default Website
const TestSite = 'https://www.automationexercise.com/'
const intLinks = []
const exLinks = []


test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto(TestSite);
});

test('Href Grabber', async ({ page }) => {

  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map(item => item.href);
  });
  // Create set of unique values using Set constructor
  let s = new Set(hrefs);

  let a1 = [...s]

  a1.forEach(function(linksText) {
    console.log(linksText);
  });
  console.log(a1.length)
    
});
test('All Hrefs', async ({ page }) => {

  const allLinks = []

  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map(item => item.href);
  });
  // Create set of unique values using Set constructor
  let s = new Set(hrefs);

  let a1 = [...s]

  for (let i = 0; i < a1.length; i++) {
    console.log("Grabbing links from " + a1[i])
    await page.goto(a1[i]);
    await page.waitForLoadState('load');

    let pageHref = await page.evaluate(() => {
      return Array.from(document.links).map(item => item.href);
    });

    let c = new Set(pageHref);
    let cl = [...c]
    cl.forEach(function(linksText) {
      allLinks.push(linksText);
    });
    console.log(allLinks.length)
  }

    let f = new Set(allLinks);
      let final = [...f]

      // Uncomment if you want to see list of Unique links //

      /* 

      final.forEach(function(linksText) {

        console.log(linksText);
      });

      */
});

test('Internal Hrefs', async ({ page }) => {

  const allLinks = []

  const hrefs = await page.evaluate(() => {
    return Array.from(document.links).map(item => item.href);
  });
  // Create set of unique values using Set constructor
  let s = new Set(hrefs);

  let a1 = [...s]

  for (let i = 0; i < a1.length; i++) {

    if (a1[i].startsWith(TestSite)) {
      await page.goto(a1[i]);
      await page.waitForLoadState('load');

      let pageHref = await page.evaluate(() => {
        return Array.from(document.links).map(item => item.href);
      });

      let c = new Set(pageHref);
      let cl = [...c]
      cl.forEach(function(linksText) {
        allLinks.push(linksText);
      });

    } else {
      exLinks.push(a1[i]);
    }
  }

  allLinks.forEach(function(linksText) {

    if (linksText.startsWith(TestSite)) {
      intLinks.push(linksText);
    } 
    else {
      exLinks.push(linksText);
    }
  });

  let f2 = new Set(intLinks);
    let finalInt = [...f2]

  let f1 = new Set(exLinks);
    let finalEx = [...f1]

  console.log("------------     Internal Links     -----------------");
    finalInt.forEach(function(linksText) {
      console.log(linksText);
    });


  console.log("------------     External Links     -----------------");
    finalEx.forEach(function(linksText) {
      console.log(linksText);
    });

});