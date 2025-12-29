import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import testinput from '../test-data/testinput.json'


let page

let context 


test.beforeAll(async({browser})=>{

    context = await browser.newContext()

    page = await context.newPage()
})

test.afterAll(async()=>{
    if(page) await page.close()
        if(context) await context.close()
})


test("Login_test" , async()=>{
    const obj = new LoginPage(page)

    await obj.login(testinput.loginuser.username , testinput.loginuser.password)
})