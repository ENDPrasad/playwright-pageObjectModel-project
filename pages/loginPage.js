const { expect } = require("@playwright/test")
const { TestData } = require("../data/data")


exports.LoginPage = class LoginPage{

    constructor(page){
        this.page = page
        this.userName = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.login_button = page.locator('[data-test="login-button"]')
    }

    async goToLoginPage(){
        await this.page.goto(TestData.url);
    }

    async checkLogOutStatus(){
        await expect(this.page).toHaveURL(TestData.url);
    }

    async login() {
        
        await this.userName.fill(TestData.userName);
        await this.password.fill(TestData.password);
        await this.login_button.click();
    }

}