import {HomeUI} from '../locators/HomeUI.locators'

export  class Homepage{

    constructor(page){
        this.page = page
        this.product = page.locator(HomeUI.product)
        this.addcart = page.getByText(HomeUI.addcrtbtn)
        this.cartbtn = page.locator(HomeUI.goTocrct)
    }


    async selectprdct(){

        await this.product.click()
        await this.addcart.click()
        await this.cartbtn.click()
    }
}