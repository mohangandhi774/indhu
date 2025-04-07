const{test , expect}=require('@playwright/test');
test('redbus',async({page})=>{

    await page.goto("https://www.redbus.in/");
    
    await page.locator("//input[@id='src']").fill("Chennai");
    
    await page.locator("//input[@id='dest']").fill("Bangalore");
    await page.waitForTimeout(4000);
    await page.locator("//div[@id='onwardCal']").click();
    await page.locator("//span[text()='5']").click();
    await page.waitForTimeout(4000);
    await page.locator("//button[@id='search_button']");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(4000);
})

//const {test , expect} = require ('@playwright/test');

test.skip('booking', async ({page}) => {

await page.goto("https://www.redbus.in/");

await page.locator("//input[@id='src']").fill( "koyambedu");
await page.locator("//input[@id='dest']").fill("Coimbatore");
await page.waitForTimeout(2000);
await page.locator("//div[@id='onwardCal']").click();
// const bookingdate = await page.locator("//div[@id='onwardCal']").click(); 

await page.locator("//span[text()='28']").click();
await page.waitForTimeout(2000);

await page.locator(" //button[@id='search_button']");
await page.waitForLoadState("networkidle")
// await page.click();
await page.waitForTimeout(2000);

await page.screenshot({path:"screenshots/booked.jpg",fullPage:true})
});