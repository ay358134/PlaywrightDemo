import {test, expect} from "@playwright/test"

test("Handle Alert", async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (d) =>
    {
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()
    })

    await page.locator("button[onclick='jsAlert()']").click()
})


test("Handle Confirm Box", async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dialogwindow) =>
    {
        expect(dialogwindow.type()).toContain("confirm")
        expect(dialogwindow.message()).toContain("I am a JS Confirm")
        // await dialogwindow.accept()
        await dialogwindow.dismiss()
    })

    await page.locator("button[onclick='jsConfirm()']").click()
})


test("Handle Prompt", async ({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dialogwindow) =>
    {
        expect(dialogwindow.type()).toContain("prompt")
        expect(dialogwindow.message()).toContain("I am a JS prompt")
        await dialogwindow.accept('Abhay')
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(5000)
})