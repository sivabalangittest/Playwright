exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.url_link = page.goto('https://www.saucedemo.com/')
        this.username_textbox = page.locator('id=user-name')
        this.password_textbox = page.locator('id=password')
        this.login_button = page.locator('id=login-button')

    }

    async launchSaucedemoAndLogin (username, password) {
        await this.url_link
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }


}