// const{test ,expect ,chromium}=require('@playwright/test');
// test('handle pages',async()=>{

//     const browser=await chromium.launch();
//     const context=await browser.newContext();
//     const page1=await context.newPage();
//     const page2=await context.newPage();

//     const allpages=context.pages();
//     console.log("Total no of pages:",allpages.length);
//     await page1.waitForTimeout(3000);
    
//     await page1.goto("https://www.amazon.in/");
//     expect(page1).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

//     await page2.goto("https://www.facebook.com/login.php/");
//     expect(page2).toHaveTitle("Log in to Facebook")

//     await page2.bringToFront();

//     await page1.waitForTimeout(3000);
    
// })

// test.skip('multiple windows',async()=>{

//     const browser=await chromium.launch();
//     const context=await browser.newContext();
//     const page1=await context.newPage();
//     //const page2=await context.newPage();

//     const allpages=context.pages();
//     console.log("Total no of pages:",allpages.length);
//     await page1.waitForTimeout(3000);
    
//     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await expect(page1).toHaveTitle("OrangeHRM");

//     const pagePromise=context.waitForEvent('page');
//     await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
//     const newPage=await pagePromise;
//     await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

    
//     await page1.waitForTimeout(3000);
    
// })



const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  const page1 = await context.newPage();
  await page1.goto('https://example.com');

  const page2 = await context.newPage();
  await page2.goto('https://google.com');

  // Bring page2 to the front
  await page2.bringToFront();

  // Do something on the front page
  await page2.fill('input[name="q"]', 'Playwright');
  await page2.keyboard.press('Enter');

  await browser.close();
})();
