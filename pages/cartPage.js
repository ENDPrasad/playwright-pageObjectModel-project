const { expect } = require("@playwright/test");
const { TestData } = require("../data/data");


exports.CartPage = class CartPage{

    constructor(page){
        this.page = page
        this.remove_item = page.getByText('Remove');
        this.checkOut_button = page.locator('[data-test="checkout"]');
    }

    async removeItem(){
        await this.remove_item.nth(0).click();
    }

    async removedItemStatus(){
        await expect(this.remove_item).toHaveCount(TestData.itemsToAdd-1)
    }

    async gotoCheckOutPage(){
        await this.checkOut_button.click();
    }
}