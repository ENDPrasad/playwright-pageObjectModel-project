const {test} = require('../fixtures/pageObjectFixture');

test('Fixture testing', async ({page, Login})=>{
    await Login.goToLoginPage();
})