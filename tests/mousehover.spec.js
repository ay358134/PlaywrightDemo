import {test, expect} from "@playwright/test"

test("Hover test", async ({page}) =>{

    await page.goto("https://www.ebay.com")

    await page.locator("(//a[contains(text(),'Electronics')])[1]").hover()

    await page.locator("(//a[@href='https://www.ebay.com/globaldeals/tech'])[1]").click()

    await page.waitForTimeout(2000)
})