import { CartUI } from "../locators/CartUI.locators";
import { HomeUI } from "../locators/HomeUI.locators";


export class CartPage{

    constructor(page){
        this.page = page
        this.cartBtn = page.locator(HomeUI.goTocrct)
        this.checkoutBtn = page.locator(CartUI.chkout)
        this.firstName = page.locator(CartUI.frstname)
        this.lastName = page.locator(CartUI.lstname)
        this.zipcode = page.locator(CartUI.zip)
        this.ctnuBtn = page.locator(CartUI.contu_btn)
        this.fnshBtn = page.locator(CartUI.finsh_btn)
        this.BkHomeBtn = page.locator(CartUI.bckhome_btn)
    }

    async CartDetails(firstName , Lastname , Zipcode){

        await this.cartBtn.click()
        await this.checkoutBtn.click()
        await this.firstName.fill(firstName)
        await this.lastName.fill(Lastname)
        await this.zipcode.fill(Zipcode)
        await this.ctnuBtn.click()

    }

    async CartPayment(){
        await this.fnshBtn.click()
        await this.BkHomeBtn.click()
    }
}