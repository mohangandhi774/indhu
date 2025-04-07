const{test ,expect}=require('@playwright/test');
test('single file',async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#singleFileInput").click();
    // await page.setInputFiles('#singleFileInput','C:/Users/mohan gandhi/Downloads/Manual Testing Preparation 1.12 (3).pdf');
    await page.locator("#multipleFilesInput").click();
    await page.setInputFiles("#multipleFilesInput",['C:/Users/mohan gandhi/Downloads/046268075_Rel_12072024094039.pdf'],['C:/Users/mohan gandhi/Downloads/9040832876_SDCTN0075968561.pdf']);
    await page.waitForTimeout(7000);

})

