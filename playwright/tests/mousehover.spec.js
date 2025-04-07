const{test ,execute, expect} = require("@playwright/test");
test('mouse hover',async({page})=> {

     await page.goto("https://www.myntra.com/");
    const men= await page.locator("//a[@class='desktop-main'][@data-reactid='21']");
    await men.hover();
    await page.locator("//a[@data-reactid='72']").click();
    
    await page.waitForTimeout(4000);

    // const currentTitle=await page.title();
    // expect(page).toHaveTitle(currentTitle);
    // console.log(currentTitle);
   // expect(currentTitle).toBe("Track Pants Men - Buy Men's Track Pants Online in India | Myntra");
 
   
   //searching for shoes
   await page.locator(".desktop-searchBar").fill("shoes");
   //waiting for the webpage to load
   const output=await page.locator(".desktop-searchBar");
   //double click
   //await output.dblclick();
   await page.click(".desktop-searchBar", { clickCount: 2 }); 
   //scroll down
   await page.mouse.wheel(0,10000);
   //scroll up
   await page.mouse.wheel(0,-7000);

   

   await page.goto("https://testautomationpractice.blogspot.com/");
   

   //drag and drop

   await page.dragAndDrop("//p[normalize-space()='Drag me to my target']", "//div[@id='droppable']");
   await page.waitForTimeout(6000);
   
   //right click

   //await button.click({page}:"right");
})