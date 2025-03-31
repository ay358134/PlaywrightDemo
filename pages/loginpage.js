import {expect} from "@playwright/test"


class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username="//input[@name='email1']"
        this.password="#password1"
        this.loginbtn="button[type='submit']"
        this.header="//h2[.='Sign In']"
    }

    async verifysignin(){
        await expect(this.page.locator(this.header)).toBeVisible()
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"admin@email.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbtn)
    }
}

module.exports=LoginPage