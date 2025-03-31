import {test, expect} from "@playwright/test"
const LoginPage=require("../pages/loginpage")
const HomePage=require("../pages/homepage")

test("Login to Application using POM", async ({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

  const loginpage =  new LoginPage(page)
  await loginpage.loginToApplication()

  const homepage = new HomePage(page)

  await homepage.verifymanageoption()
  await homepage.logoutfromapp()
  await loginpage.verifysignin()

})