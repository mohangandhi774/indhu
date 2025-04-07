// const{test , expect}=require('@playwright/test');
// test('booking show' , async({page})=>{

//     await page.goto("https://in.bookmyshow.com/");
//     const chennai=page.locator("//span[@class='bwc__sc-ttnkwg-16 dizuyr'][text()='Chennai']");
//     await expect(chennai).toBeVisible();
//     await chennai.click();
//     const movies =page.locator("//a[text()='Movies']");
//     await expect(movies).toBeVisible();
//     await movies.click();
//     const Tamil= page.locator("//div[@class='sc-1y4pbdw-15 dXjsgM'][text()='Tamil']");
//     await expect(Tamil).toBeVisible();
//     await Tamil.click();
//     await page.waitForTimeout(4000);
// })

const { test, expect } = require("@playwright/test");

test('Movie selection flow', async ({ page }) => {

    await page.goto("https://in.bookmyshow.com/");

    // Ensure that the Chennai element is available and clickable
    const chennaiLocator = page.locator("//span[@class='bwc__sc-ttnkwg-16 dizuyr'][text()='Chennai']");
    await expect(chennaiLocator).toBeVisible();
    await chennaiLocator.click();

    // Wait for Movies tab to be clickable
    const moviesTabLocator = page.locator("//a[text()='Movies']");
    await expect(moviesTabLocator).toBeVisible();
    await moviesTabLocator.click();

    // Wait for Tamil genre to be clickable
    const tamilGenreLocator = page.locator("//div[@class='sc-1y4pbdw-15 dXjsgM'][text()='Tamil']");
    await expect(tamilGenreLocator).toBeVisible();
    await tamilGenreLocator.click();

    // Wait for the page to load (instead of using waitForTimeout, use a specific wait like waitForSelector)
    await page.waitForTimeout(4000); // Optional: Can be replaced by a more specific wait condition.

});
