const expect = require('chai').expect

import NavBar from '../components/Navbar'
import LoginPage from '../page-object/LoginPage'
import ForgottenPassword from '../page-object/ForgottenPassword'

describe('Forgotten password', () => {
    it('Should navigate to home page', () => {
        browser.url('http://zero.webappsecurity.com/')

        const metadata = browser.getMetaData()
        expect(metadata.title).to.contains('Personal Banking', 'Page title validation')
        expect(metadata.url).to.contains('zero.webappsecurity', 'Url Validation')
    })

    it('Should click on login', () => {
        NavBar.signin.waitForExist()
        NavBar.signin.click()

        const metadata = browser.getMetaData()
        expect(metadata.url).to.contains('login.html', 'Url Validation')
    })

    it('should click on forgotten password link', () => {
        LoginPage.forgottenPasswordLink.waitForExist()
        LoginPage.forgottenPasswordLink.click()
        ForgottenPassword.title.waitForExist()
        expect(ForgottenPassword.title.getText()).to.contains('Forgotten Password')
    })

    it('should request new password', () => {
        // browser.waitAndType('#user_email', 'random@password.com')
        // browser.waitAndClick('.btn-primary')
        ForgottenPassword.getNewPassword('random@password.com')
    })
})