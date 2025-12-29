import {LoginUI} from "../locators/LoginUI.locators"
import {expect} from "@playwright/test"
import testinput from "../test-data/testinput.json"
import test from "node:test"

export class LoginPage {
    constructor(page){
        this.page = page
        this.username = page.locator(LoginUI.username)
        this.password = page.getByPlaceholder(LoginUI.password)
        this.lgnbtn = page.locator(LoginUI.loginbtn)
        this.menuicon = page.getByRole('button' , {name:LoginUI.menubtn})
        this.logoffbtn = page.locator(LoginUI.logoffbtn)
        this.error = page.locator(LoginUI.error)
    }

    async login(usrname , passwrd){

        await this.page.goto("https://www.saucedemo.com")

        if(usrname){

            await this.username.fill(usrname)
        }
        if(passwrd){

            await this.password.fill(passwrd)
        }

        await this.lgnbtn.click()

    }

        async verifyTitle(){

            try{
                await expect(page).toHaveTitle(testinput.Verifydetails.title)

                 return true
            }
            catch{
                return false;
            }
             
        }

        async verifyError(){
        await this.error.waitFor({state:'visible'})

        const errormessage = await this.error.textContent();

        console.log(errormessage);

        expect(errormessage).toBe(testinput.Verifydetails.Invalid_login_message)
    }

    async logoff(){
        await this.menuicon.click()
        await this.logoffbtn.click()
    }
}