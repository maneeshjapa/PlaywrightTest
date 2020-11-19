const assert = require('assert');
const { chromium } = require('playwright');
const { LoginPage } = require('../Pages/LoginPage');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://style-it-live.herokuapp.com");
    const loginPage = new LoginPage(page);
    await loginPage.login();
    assert(await page.waitForSelector('.homepage'));
    await browser.close();
})();  