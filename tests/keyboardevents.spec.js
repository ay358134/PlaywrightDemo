import {test, expect} from "@playwright/test"

test("Keyboard Events", async ({page}) =>
{
    await page.goto("https://www.google.com")

    // await page.locator("textarea[name='q']").pressSequentially("Mitkat Advisory", {delay:100})

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Mitkat Advisory!")

    await page.waitForTimeout(2000)

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for(let i=0;i<='Advisory'.length;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")

    await page.waitForTimeout(2000)

    await page.keyboard.press("Backspace")

   /*  await page.keyboard.press("Control+A")
    
    await page.keyboard.press("Control+C")
    
    await page.keyboard.press("Backspace")
    
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+V")
    
    await page.waitForTimeout(2000) */

    
    
})