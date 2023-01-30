const { expect } = require("@playwright/test");
const { TestData } = require("../data/data");

exports.InventoryPage = class InventoryPage {

    constructor(page){
        this.page = page
        this.backPack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cart_items = page.getByText('Add to cart');
        this.cart_icon = page.locator('.shopping_cart_link');
        this.menu = page.getByRole('button', { name: 'Open Menu' });
        this.logout_button = page.getByRole('link', { name: 'Logout' });
    }

    async logout(){
        await this.menu.click();
        await this.logout_button.click();
    }

    async addItemsToCart(){
        // await this.backPack.click();
        // await this.bikeLight.click();
        for(let i =0; i<TestData.itemsToAdd;i++){
            await this.cart_items.nth(i).click();
        }
    }

    async AddedItemsStatus(){
        // Checks whether the cart_icon element exists or not
        // await expect(this.cart_icon).toHaveCount(1)
        await expect(this.page.locator('a').filter({hasText: TestData.itemsToAdd.toString()})).toHaveCount(1)
    }

    async gotoCart(){
        await this.cart_icon.click();
    }
}