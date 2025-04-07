const { expect } = require("@playwright/test");

test('heading' , async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const { test, expect } = require('@playwright/test');

    test('Confirm dialog', async ({ page }) => {
      // Go to the test page
      await page.goto("https://testautomationpractice.blogspot.com/");
    
      // Listen for the dialog event and handle it
      page.on('dialog', async (dialog) => {
        // Expect the dialog to be of type 'confirm' (not 'alert')
        expect(dialog.type()).toBe('confirm');  // Use toBe instead of toContain for exact match
        // Expect the dialog message to contain 'You pressed OK!'
        expect(dialog.message()).toContain('You pressed OK!');
        // Dismiss the dialog (simulate clicking "Cancel")
        await dialog.dismiss();  // You can also use await dialog.accept() for clicking "OK"
      });
    
      // Trigger the confirmation dialog by clicking the button
      await page.click("//button[@id='confirmBtn']");
    
      // Wait to ensure everything has processed
      await page.waitForTimeout(5000);  // Wait for 5 seconds
    });
    
});