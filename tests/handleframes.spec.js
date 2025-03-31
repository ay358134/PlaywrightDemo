const {test, expect} = require("@playwright/test")

test ("Handle Frames", async function ({page}) {
    
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

   const iframe= await page.frameLocator("//frame[@title='All Packages']")

    await iframe.locator("//a[normalize-space()='java.applet']").click()

    await page.pause()
})