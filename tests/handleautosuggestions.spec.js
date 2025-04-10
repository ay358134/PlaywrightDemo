import {test, expect} from "@playwright/test"

test.skip("Verify Application Title Using keyboard", async ({page}) =>
{
    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").fill("Playwright")

    await page.waitForSelector("//li[@role='presentation']")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")
})

test("Verify Application Title Using Loop", async ({page}) =>
    {
        await page.goto("https://www.google.com")
    
        await page.locator("textarea[name='q']").pressSequentially("Mitkat Advisory")
    
        await page.waitForSelector("//li[@role='presentation']")
    
      const elements =  await page.$$("//li[@role='presentation']")

      for(let i=0;i<elements.length;i++)
      {

       const text =  await elements[i].textContent()

        if(text.includes("bangalore"))
        {
            await elements[i].click()
            break
        }
      }
    })