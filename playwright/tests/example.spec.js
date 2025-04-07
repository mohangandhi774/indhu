// @ts-check
// const{test,expect}=require('@playwright/test');
// test('will find'),async({page})=>{

// await page.goto("https://www.saucedemo.com/");

// });
const{test,expect}=require('@playwright/test');
test('output',async({page})=>{
    
    await page.goto("https://www.amazon.in/");
    await page.fill('locator' , 'laptop');
    const amazon=await page.$$('//div[@class='autocomplete-results-container']/parent::div/parent::div/ancestor::div[1]/descendant::form/child::div[2]/child::div/child::input');

    for(let x of amazon){

        console.log(x);
        
    }

});