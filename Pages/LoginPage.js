class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async login() {
        await this.page.click('text="SIGN IN"');
        await this.page.fill('[name=email]', 'user1@react.com');
        await this.page.fill('[name=password]', 'reactuser');
        await this.page.click('"Sign In"');
    }
}
module.exports = { LoginPage };