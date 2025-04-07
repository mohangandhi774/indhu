const{test ,expect}=require('@playwright/test');
test('title',async({page})=>{
  
    await page.goto("https://github.com/mohangandhi774/indhu/tree/master/playwright");

})