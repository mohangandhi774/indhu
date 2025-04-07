const{test , expect}=require("@playwright/test");
test.skip('alert', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog',async(dialog)=>{
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("I am an alert box!");
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(5000);
});


test('confirm with ok and cancel',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async(dialog)=>{
      
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Press a button!");
        await dialog.accept();
        //await dialog.dismiss();
    });


    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);

    });


test.skip('prompt' , async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async(dialog)=>{

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        expect(dialog.defaultValue()).toBe('Harry Potter');
        await dialog.accept('Mohan');
    });

    await page.locator("//button[@id='promptBtn']").click();
    const demo=await page.locator("//p[@id='demo']");
    await expect(demo).toHaveText("Hello Harry Potter! How are you today?");
    await page.waitForTimeout(4000);
});

