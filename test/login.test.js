const expect = require('chai').expect
const dataHelper = require('../lib/data-helpers')
import LoginPage from '../page-object/LoginPage'
import {username, password} from '../lib/config'

describe('Should log into the app', () => {
    it('should deny access with incorrect creds', () => {
        LoginPage.open('http://zero.webappsecurity.com/login.html')
        LoginPage.loginToApplication('foo', 'bar')
        expect(LoginPage.errorMessage.getText()).to.contains('Login and/or password are wrong')
    })

    it('should successfuly log in', () => {
        LoginPage.open('http://zero.webappsecurity.com/login.html')
        LoginPage.loginToApplication(username, password)
    })

    it('should logout', () => {
        $('.icon-user').waitForExist('3000')
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#logout_link').waitForExist(5000, true)
    })
})