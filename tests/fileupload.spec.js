import {test, expect} from "@playwright/test"

test("Verify file Upload", async ({page}) =>
{
    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./Test images/Desktop.png")

    await page.locator("#file-submit").click()

    await expect(page.locator("div[class='example'] h3")).toHaveText("File Uploaded!")

    //read dlocs for more
})