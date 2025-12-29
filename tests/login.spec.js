import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import testinput from '../test-data/testinput.json'
import {Homepage} from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'


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
    const lgnobj = new LoginPage(page)

    await lgnobj.login(testinput.loginuser.username , testinput.loginuser.password)
    await lgnobj.logoff()
})

test.only("Add product" , async()=>{

    const lgnobj = new LoginPage(page)
    const Homeobj = new Homepage(page)
    const Cartobj = new CartPage(page)
 
    await lgnobj.login(testinput.loginuser.username , testinput.loginuser.password)

    await Homeobj.selectprdct()

    await Cartobj.CartDetails(testinput.userdetails.firstname,testinput.userdetails.lastname,testinput.userdetails.zipcode)

    await Cartobj.CartPayment()
})