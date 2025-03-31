import { expect } from "@playwright/test"


class HomePage{
    constructor(page)
    {
        this.page=page
        this.menu=("//img[@alt='menu']")
        this.logoutoption=("//button[contains(normalize-space(),'Sign out')]")
        this.manageoption=("//span[contains(text(),'Manage')]")
    }


    async verifymanageoption(){
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

    async logoutfromapp()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
    }
}

module.exports= HomePage