import test from "@playwright/test"


test.describe(`Example`, async() => {
   test(`[Example] test`, async({page, baseURL}) => {
        await page.goto(baseURL!);
   }) 
})