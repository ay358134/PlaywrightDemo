const {test, expect} = require('@playwright/test')
const testdata= JSON.parse(JSON.stringify(require("../testlogin.json")))
// const testdata1= JSON.parse(JSON.stringify(require("../testdata.json")))

test.describe("Data Driven Login Test", function()
{
    for (const data of testdata)
    {
        test.describe(`Login with users 3 ${data.id}`, function()
    {
        test("Login to Application", async ({page}) =>
            {
                await page.goto("https://freelance-learn-automation.vercel.app/login")
            
                await page.locator("//input[@placeholder='Enter Email']").pressSequentially(data.username)
            
                
                await page.locator("//input[contains(@placeholder,'Enter Password')]").pressSequentially(data.password)
                
            })
    })
    }
})

/* test.skip("Login to Application", async ({page}) =>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@placeholder='Enter Email']").pressSequentially(testdata1.username)

    
    await page.locator("//input[contains(@placeholder,'Enter Password')]").pressSequentially(testdata1.password)
    await page.pause()
}) */