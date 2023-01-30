const { expect } = require("@playwright/test");


exports.FinalPage = class FinalPage{

    constructor(page){
        this.page = page
        this.order_status = page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' });
        this.goto_inventory = page.locator('[data-test="back-to-products"]')
    }

    async gotoInventoryPage(){
        await this.goto_inventory.click();
    }
    

    async checkOrderStatus(){
        
        // Assertion to find whether element exists or not
        await expect(this.order_status).toHaveCount(1)
    }
}