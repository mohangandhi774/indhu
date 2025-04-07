const{test , expect}=require('@playwright/test');
test('dropdown' , async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator("#country").selectOption({label:'France'});
    //await page.locator("#country").selectOption('Japan');
    //await page.locator("#country").selectOption({value:'uk'});
   // await page.locator("#country").selectOption({index:5});
   //await page.selectOption("#country",'India');
   

   //TO CHECK THE VALUE INCLUDES IN A DROP DOWN BY FOR LOOP

//    const options=await page.$$('#country option');
//    let status=false;
//    for(const option of options)
//    {

//     //console.log(await option.textContent());
//     let value=await option.textContent();
//     if(value.includes('France')){

//         status=true;
//         break
//     }

    
//    }
//    expect(status).toBeTruthy();

// to select value from drop down using for

const options=await page.$$('#country option');
   
   for(const option of options)
   {

    //console.log(await option.textContent());
    let value=await option.textContent();
    if(value.includes('France')){
     
    await page.selectOption("#country", 'France');
    break;
    }

    
   }
   
   
   await page.waitForTimeout(3000);


})