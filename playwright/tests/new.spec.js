const{test,expect}=require('@playwright/test');
test('gandhi' , async({page})=>{


    await page.goto("https://www.amazon.in/");
     await page.locator("//input[@id='twotabsearchtextbox']").fill("mobile");

     awaitpage.waitForSelector("//div[@class='autocomplete-results-container']");
    let dropdown = await page.$$("//div[@class='autocomplete-results-container']/child::div[@class='two-pane-results-container']/child::div[@class='left-pane-results-container']/child::div");

     
    for(let i=0;i<dropdown.length;i++){

        const text=await dropdown[i].textContent();
        console.log(`Suggestion : ${text}`);
        
    }
    if(text.includes('laptop under 35000')){

        await text.click();
    }
});