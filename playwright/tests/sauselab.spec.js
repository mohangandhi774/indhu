const {test , expect} = require ('@playwright/test');


test('websitecheck', async ({page}) => {

await page.goto("https://www.saucedemo.com");

const usernameField = page.locator("#user-name");
    await usernameField.fill('error_user');

    // Locate the password input field and fill it
    const passwordField = page.locator("#password");
    await passwordField.fill('secret_sauce');
    const loginpage = page.locator('#login-button');
    await loginpage.waitFor();
    await loginpage.click();
    
await page.waitForTimeout(2000);

 const product1=page.locator("//div[text()='Sauce Labs Backpack']");

 await product1.click();
 await page.waitForTimeout(2000);

 const cart=page.locator("//button[@name='add-to-cart']");
await cart.click();
 //await page.waitForTimeout(2000);


const backtoproducts=page.locator("//button[@name='back-to-products']");
await backtoproducts.click();
//await page.waitForTimeout(2000);

const product2=page.locator("//div[text()='Sauce Labs Onesie']");
await product2.click();
//await page.waitForTimeout(2000);

const cart2=page.locator("//button[@class='btn btn_primary btn_small btn_inventory']");
await cart2.click();
//await page.waitForTimeout(2000);

const yourcart=page.locator("//a[@class='shopping_cart_link']");
await yourcart.click();
//await page.waitForTimeout(2000);

const checkout=page.locator("//button[@class='btn btn_action btn_medium checkout_button ']");
await checkout.click();
//await page.waitForTimeout(2000);

const firstname=page.locator("//input[@name='firstName']");
await firstname.fill('mohan');
//await page.waitForTimeout(2000);

let lastname=page.locator("[data-test*='lastName']");
expect (locator).toHaveText('gandhi');
await page.waitForTimeout(5000);

   
// const postalcode=page.locator("//input[@name='postalCode']");
// await postalcode.fill(637208);
// await page.waitForTimeout(10000);

// await page.waitForSelector();
// await page.waitForResponse
//[data-test*='lastName']
});