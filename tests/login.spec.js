import {test, expect} from '@playwright/test'

//test.use({viewport:{width:1300,height:800}}) 
test("Valid login", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // console.log(await page.viewportSize().width)
    // console.log(await page.viewportSize().height)

    //await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Username").pressSequentially("Admin", {delay:100})

    //await page.locator("input[name='password']").fill("admin123")
    await page.locator("input[name='password']").pressSequentially("admin123", {delay:100})

    await page.locator("//button[@type='submit']").click()

   // await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/)

    //await page.waitForTimeout(3000)

})