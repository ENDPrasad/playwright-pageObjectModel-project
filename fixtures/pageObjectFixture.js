import {test} from '@playwright/test'
import { CartPage } from '../pages/cartPage';
import { CheckOutPage } from '../pages/checkOutPage';
import { FinalPage } from '../pages/finalPage';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage'
import { OverviewPage } from '../pages/overviewPage';


// Extending the test class with all the page objects
// So that we can use them in the testing section
exports.test = test.extend({
    Login: async ({page}, use)=>{
        await use(new LoginPage(page))
    },
    Inventory: async ({page}, use)=>{
        await use(new InventoryPage(page))
    },
    Cart: async ({page}, use)=>{
        await use(new CartPage(page))
    },
    CheckOut: async ({page}, use)=>{
        await use(new CheckOutPage(page))
    },
    Overview: async ({page}, use)=>{
        await use(new OverviewPage(page))
    },
    Final: async ({page}, use)=>{
        await use(new FinalPage(page))
    },
});

exports.expect = test.expect;
exports.describe = test.describe;