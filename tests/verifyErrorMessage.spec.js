import {test, expect} from '@playwright/test'

test("Verify Error Message", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")

    await page.getByPlaceholder("Password").fill("adminisdrunk")

    await page.locator("//button[@type='submit']").click()

   const errorMessage =  await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

   console.log("Error Message is: "+ errorMessage);

   expect(errorMessage.includes("Invalid")).toBeTruthy()

   expect(errorMessage==="Invalid credentials").toBeTruthy()
})