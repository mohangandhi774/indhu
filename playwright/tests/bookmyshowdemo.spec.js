import{test, expect} from '@playwright/test';
test('bookmyshow',async({page})=>{

    await page.goto("https://in.bookmyshow.com/");
    //choose location
    await page.locator("//span[text()='Bengaluru']").click();
    //go to movies
    await page.locator("//a[text()='Movies']").click();

    //tamil
     await page.locator('.sc-133848s-2 sc-7naidv-0 hsgHeH').click();
    // await page.waitForTimeout(3000);
    // //dragon
    // await page.locator("//div[text()='Dragon']").click();
    // //book ticket
    // await page.locator("xpath=//span[text()='Book tickets']").first().click();
    // await page.reload();
    // await page.waitForTimeout(3000);
})