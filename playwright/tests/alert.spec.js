// const{test , expect}=require('@playwright/test');
// test('Alert ok', async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");
    
//     page.on('dialog' , async(dialog)=>{

//         expect(dialog.type()).toContain('alert');
//         expect(dialog.message()).toContain('how are you');
//         await dialog.accept();
//     });

//     await page.click("//button[@id='alertBtn']");
//     await page.waitForTimeout(5000);
// });








// test('confirm with ok and cancel', async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/");
    
//     page.on('dialog' , async(dialog)=>{

//         expect(dialog.type()).toContain('confirm');
//         expect(dialog.message()).toContain('You pressed OK!');
//         await dialog.accept();  
//         //await dialog.dismiss();

//     });

//     await page.click("//button[@id='confirmBtn']");
//     await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
//     await page.waitForTimeout(5000);
// });



// const { test, expect } = require('@playwright/test');

test.skip('Confirm dialog', async ({ page }) => {
    // Go to the test page
    await page.goto("https://testautomationpractice.blogspot.com/");
  
    // Listen for the dialog event and handle it
    page.on('dialog', async (dialog) => {
      // Expect the dialog to be of type 'confirm' (not 'alert')
      expect(dialog.type()).toBe('confirm');  // Use toBe instead of toContain for exact match
      // Expect the dialog message to contain 'You pressed OK!'
      expect(dialog.message()).toContain('You pressed OK!');
      // Dismiss the dialog (simulate clicking "Cancel")
      //await dialog.dismiss();  // You can also use await dialog.accept() for clicking "OK"
    });
  
    // Trigger the confirmation dialog by clicking the button
    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
  
    // Wait to ensure everything has processed
    await page.waitForTimeout(5000);  // Wait for 5 seconds
  });
  

// test('Prompt dialog test', async ({ page }) => {
//   // Navigate to the page
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   // Listen for the dialog event and handle it
//   page.on('dialog', async (dialog) => {
//     // Check if the dialog is a prompt
//     expect(dialog.type()).toBe('prompt');  // Fixed typo in 'toBe'
    
//     // Check if the dialog message contains the expected text
//     expect(dialog.message()).toContain('Please enter your name:');
    
//     // Check if the default value matches 'Harry Potter'
//     expect(dialog.defaultValue()).toBe('Harry Potter');
    
//     // Accept the dialog with input 'John' (simulating user typing)
//     await dialog.accept('John');  // Provide input value here
//   });

//   // Trigger the prompt dialog by clicking the button
//   await page.click("//button[@id='promptBtn']");

//   // Wait for the text to update on the page
//   const demoText = await page.locator("//p[@id='demo']");
//   await expect(demoText).toHaveText("Hello John! How are you today?");

//   // Optionally wait for 5 seconds to observe the result
//   await page.waitForTimeout(5000);  // Wait for 5 seconds
// });







