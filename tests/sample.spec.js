const {test, expect} = require("@playwright/test")

test("My first test",async function ({page}){
    
    expect(12).toBe(12)
})

test.skip("My second test",async function ({page}) {
    expect(200).toBe(200)
})

test("My thirt test",async function ({page}) {
    expect(20).toBe(20)
})

test("My fourth test",async function ({page}) {
    expect("Abhay Yadav").toContain("Abhay")
    expect(true).toBeTruthy()
})

test("My fifth test",async function ({page}) {
    expect(false).toBeFalsy()
})

test("My sixth test",async function ({page}) {
    expect("Abhay Yadav1".includes("Yadav1")).toBeTruthy()
})
