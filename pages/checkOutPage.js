

exports.CheckOutPage = class CheckOutPage{

    constructor(page){
        this.page = page
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.postalCode = page.locator('[data-test="postalCode"]');
        this.continue_button = page.locator('[data-test="continue"]');
    }

    async fillTheDetails(){
        await this.firstName.fill('Something');
        await this.lastName.fill('Nothing');
        await this.postalCode.fill('123445');
    }

    async gotoOverviewPage(){
        await this.continue_button.click();
    }
}