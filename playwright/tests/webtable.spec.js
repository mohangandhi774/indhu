import{test,expect}from '@playwright/test';
test('webtable',async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");
   const column= await page.locator("//table[@name='BookTable'] /tbody/tr/th");
   const columncount=await column.count();
   console.log("no of column:",columncount);

   const row=await page.locator("//table[@name='BookTable'] /tbody/tr");
   const rowcount=await row.count();
   console.log("no of row:",rowcount);

   for(let i=0;i<columncount;i++){

    const currentcolumn=await page.locator(`//table[@name='BookTable'] /tbody/tr/th[${i+1}]`);
    const cellTexts = await currentcolumn.allTextContents();
        console.log(`column ${i + 1}:`, cellTexts);
   }

   const locate= await page.locator("//table[@name='BookTable']/tbody/tr[5]/td[2]");
   console.log(await locate.textContent());
   
   
    await page.waitForTimeout(4000);
})