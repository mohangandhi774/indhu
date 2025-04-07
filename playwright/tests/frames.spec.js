const{test , expect}=require('@playwright/test');
test.skip('frames' , async({page})=>{

    await page.goto("https://login.qualifacts.org/authorization/login.html#redirect_uri=https%3A%2F%2Flogin.qualifacts.org%2Fcarelogic");
    await page.locator("//input[@name='account']").fill("mohan");
    await page.locator("//input[@name='username']").fill("gandhi");
    await page.locator("//input[@name='password']").fill("paithiyam");
    await page.locator("//button[@type='button']").click();
    await page.waitForTimeout(7000);
})

test('iframes' , async({page})=>{

    await page.goto("https://letcode.in/frame");
  //await page.frame({name:'firstFr'}).locator("//input[@type='text'][@name='fname']").fill("mohan");
//  await page.frame({url :'https://letcode.in/frameui'}).locator("//input[@type='text'][@name='lname']").fill()
//    let childframe= await page.frame({url : 'https://letcode.in/innerframe'});
//    await childframe.fill("//input[@type='text'][@name='email']","gandhi282000@gmail.com");
//    await childframe.parentFrame();
   
//     await page.mainFrame();

   // const allframes=await page.frames();
    //console.log("number of frames:",allframes.length);
    
    const output= page.frameLocator("https://letcode.in/innerframe");
    await output.locator("//input[@name='email']").fill("mohangandhi282000@gmail.com");
    await page.waitForTimeout(4000);

     
 })