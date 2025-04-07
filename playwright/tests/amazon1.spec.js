const{test , expect}=require('@playwright/test');
test('IPHONE', async({page})=>{


    await page.goto("https://www.amazon.in/");
    await page.fill("//input[@id='twotabsearchtextbox']","iphone");
    await page.keyboard.press("Enter");
    //await page.waitForTimeout(3000);
    
    await page.waitForSelector("//div[@id='brandsRefinements']");
    const brandLocator=await page.locator("//div[@id='brandsRefinements']/child::ul/child::span/child::span");
    
    const brandNames = await brandLocator.allInnerTexts();
    console.log(brandNames);
    for (let i = 0; i < brandNames.length; i++) {
        const brandName = brandNames[i];
        const brandElement = brandLocator.nth(i);  // Get the corresponding locator for the current brand
    
        if (brandName.includes("Apple")) {
          console.log("Found Apple brand! Clicking...");
          await brandElement.click();
    
          // Wait for the page to update or the results to load
          await page.waitForSelector("//div[@id='brandsRefinements']");  // Adjust the selector if necessary
          break;
        }
    }
 await page.screenshot({path:"Screenshots/amazon.jpg",fullpage:true})
});