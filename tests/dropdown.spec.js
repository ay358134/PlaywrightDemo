import {test, expect} from '@playwright/test'

test("Select Values from Dropdowm", async ({page}) =>{

    await page.goto("https://be-smart-quiz.web.app")

    await page.locator("#category").selectOption({label:"Science: Computers"})

    // await page.waitForTimeout(3000)

    await page.locator("#category").selectOption({value: "20"})

    // await page.waitForTimeout(5000)

    await page.locator("#category").selectOption({index:4})

    // await page.waitForTimeout(2000)

    // const value = await page.locator("#category").textContent()

    // console.log("All dropdown values: "+value)

    // await expect(value.includes("Mythology")).toBeTruthy()

    let state = await page.$("#category")

   let allElements= await state.$$("option")

   let ddstatus=false

   for(let i=0;i<allElements.length;i++)
   {
    let element=allElements[i]

    let value= await element.textContent()
    
    console.log("Value from dropdown using for loop "+value)

    if(value.includes("Mythology"))
    {
        ddstatus=true
        break
    }


}

await expect(ddstatus).toBeTruthy()

// await page.locator("#hobbies").selectOption(['Playing','Swimming'])

// await page.waitForTimeout(2000)

})