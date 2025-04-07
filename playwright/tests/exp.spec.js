const{test,expect}=require('@playwright/test');
test('dummy website check',async({page})=>{
    
   await page.goto("https://www.ctscorp.com/");
   await expect(page).toHaveURL("https://www.ctscorp.com/");

   await page.reload("https://www.ctscorp.com/");
   await expect(page).toHaveURL("https://www.ctscorp.com/");

   await page.goto("https://www.globalsqa.com/about/");
   await expect(page).toHaveURL("https://www.globalsqa.com/about/");

   await page.goBack("https://www.ctscorp.com/");
   await expect(page).toHaveURL("https://www.ctscorp.com/");
   await page.setViewportSize({ width: 700, height: 7000 });
   
   await page.close();
   await page.goForward("https://www.globalsqa.com/about/");
   await expect(page).toHaveURL("https://www.globalsqa.com/about/");

})
