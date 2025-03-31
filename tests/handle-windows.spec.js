import {test, expect} from "@playwright/test"

test('Working with Multiple Windows', async ({browser}) =>
{

   const context = await browser.newContext()
   const page  = await context.newPage();
   await page.goto("https://www.browserling.com/windows-testing")
 const [newPage] = await Promise.all
   (
        [
             context.waitForEvent("page"),
             page.locator("//div[@class='fffff']").click()
        ]
   )

//    await newPage.waitForTimeout(5000)

   await newPage.locator("//input[contains(@name,'email')][@id='«r11»']").pressSequentially("spookydemon@gmail.com")
//    await newPage.waitForTimeout(3000)

   await newPage.close()

//    await page.waitForTimeout(3000)

   await page.locator("//input[@placeholder='Your email']").pressSequentially("Hello this is finished")
})
