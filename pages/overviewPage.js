
exports.OverviewPage = class OverviewPage{

    constructor(page){
        this.page = page
        this.finish_button = page.locator('[data-test="finish"]');
    }

    async gotoFinalPage(){
        await this.finish_button.click();
    }
}