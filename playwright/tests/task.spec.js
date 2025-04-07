import{test ,expect} from '@playwright/test';
test('sause lab', async({page}) =>{

    await page.goto("https://www.saucedemo.com/");
    //username
    await page.locator("#user-name").fill("standard_user");
    //password
    await page.locator("#password").fill("secret_sauce");
    //login
    await page.locator("#login-button").click();
    //products--1.Sause Labs Backpack
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    //products--2.Sauce Labs Fleece Jacket
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
    //your cart
    await page.locator(".shopping_cart_link").click();
    
    //checkout
     await page.locator("#checkout").click();
    //checkout:your information
    //firstname
    await page.locator("#first-name").fill("mohan");
    await page.waitForTimeout(5000);
    //lastname
    await page.locator("#last-name").fill("gandhi");
    await page.waitForTimeout(5000);
    //postal code
    await page.locator("#postal-code").fill("637208");
    await page.waitForTimeout(5000);
    //continue
    await page.locator("#continue").click();
    //checkout:overview//cancel
    //await page.locator("#cancel").click();
    //checkout:overview
    await page.locator("#finish").click();
    await page.waitForTimeout(5000);
    await page.screenshot({path :'Screenshots/task.jpg'});
     await page.waitForTimeout(5000);
})