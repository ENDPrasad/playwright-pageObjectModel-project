// @ts-check
// const { test, expect } = require('@playwright/test');
// const { CartPage } = require('../pages/cartPage');
// const { CheckOutPage } = require('../pages/checkOutPage');
// const { FinalPage } = require('../pages/finalPage');
// const { InventoryPage } = require('../pages/inventoryPage');
// const { LoginPage } = require('../pages/loginPage');
// const { OverviewPage } = require('../pages/overviewPage');
const {test} = require('../fixtures/pageObjectFixture');
const { TestData } = require('../data/data');
// const {PageObjects} = require('../fixtures/pageObjectFixture')


test.describe('E-commerce site test', ()=>{

  test('end-to-end flow', async ({ page, Login,  Inventory, Cart, CheckOut, Overview, Final}) => {
    // Pages initialisation
    // const Login = new LoginPage(page);
    // const Inventory = new InventoryPage(page);
    // const Cart = new CartPage(page);
    // const CheckOut = new CheckOutPage(page);
    // const Overview = new OverviewPage(page);
    // const Final = new FinalPage(page);

    // Testcase flow

    await test.step('Log in', async ()=>{
      //Navigates to the particular URL
      await Login.goToLoginPage()
      // Login to the application
      await Login.login()
    });

    await test.step('Add items to the cart', async ()=>{
      // Add items to the cart
      await Inventory.addItemsToCart();
      // Check whether items are added or not
      await Inventory.AddedItemsStatus();
    });

    await test.step('Go to cart page', async ()=>{
      // Go to the cart page
      await Inventory.gotoCart();
    });

    await test.step('Remove item from cart', async ()=>{
      // Removes an item from the cart
      await Cart.removeItem();
      // Check whether item got removed or not
      await Cart.removedItemStatus();
    });

    await test.step('Go to check out page', async ()=>{
      // Go to checkOut page
      await Cart.gotoCheckOutPage();
    });

    await test.step('Fill checkout form', async ()=>{
      // Fill the checkOut form
      await CheckOut.fillTheDetails();
    });

    await test.step('Go to Overview Page', async ()=>{
      // Go to Overview Page
      await CheckOut.gotoOverviewPage();
    });

    await test.step('Go to Final Page', async ()=>{
      // Go to Final Page
      await Overview.gotoFinalPage();
    });

    await test.step('Check order status in final page', async ()=>{
      // Check the status of the order
      await Final.checkOrderStatus();
    });
    
    await test.step('Go back to inventory page', async ()=>{
      // Go back to Inventory page
      await Final.gotoInventoryPage();
    });

    await test.step('Log out', async ()=>{
      // Logout from the application
      await Inventory.logout();
      // Check whether it got logged out or not
      await Login.checkLogOutStatus()
    });
    
  });

})

