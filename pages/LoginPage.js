import {LoginUI} from "../locators/LoginUI.locators"

export class LoginPage {
    constructor(page){
        this.page = page
        this.username = page.locator(LoginUI.username)
        this.password = page.getByPlaceholder(LoginUI.password)
        this.lgnbtn = page.locator(LoginUI.loginbtn)
        this.menuicon = page.getByRole('button' , {name:LoginUI.menubtn})
        this.logoffbtn = page.locator(LoginUI.logoffbtn)
    }

    async login(usrname , passwrd){

        await this.page.goto("https://www.saucedemo.com")

        await this.username.fill(usrname)
        await this.password.fill(passwrd)
        await this.lgnbtn.click();
        
    }

    async logoff(){
        await this.menuicon.click()
        await this.logoffbtn.click()
    }
}