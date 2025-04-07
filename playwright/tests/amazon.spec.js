const{test , expect}=require('@playwright/test');
test('IPHONE', async({page})=>{


    await page.goto("https://www.myntra.com/");
    await page.waitForTimeout(2000);

    await page.screenshot({path:"Screenshots/amazon.jpg",fullPage:true});

    });//a[@title='Myntra']