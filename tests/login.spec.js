import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login'


test ('Login Validation', async({page}) =>{

    const Login = new LoginPage(page)

    await Login.launchSaucedemoAndLogin('standard_user', 'secret_sauce')

})
