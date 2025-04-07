const{test , expect}=require('@playwright/test');
test('Heading' , async({page})=>{

    await page.goto("https://www.instagram.com");
    var title=await page.title();
    console.log(title);
    await page.locator("//i[@aria-label='Instagram']").screenshot({ path: 'screenshot.png' });

})
