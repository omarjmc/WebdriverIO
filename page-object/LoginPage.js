import BasePage from './BasePage'

class LoginPage extends BasePage  {
    //get login form
    get loginform(){
        return $('#login_form')
    }

    //get username
    get username(){
        return $('#user_login')
    }

    //get password
    get password(){
        return $('#user_password')
    }

    //get login button
    get loginbutton(){
        return $('.btn-primary')
    }

    //forgotten password 
    get forgottenPasswordLink(){
        return $('*=Forgot your password')
    }

    //get error message
    get errorMessage(){
        return $('.alert-error')
    }

    //get user icon
    get userIcon(){
        return $('.icon-user')
    }

    //get logout link
    get logoutLink(){
        return $('#logout_link')
    }

    //open
    open(){
        super.open('http://zero.webappsecurity.com/login.html')
    }

    loginToApplication(username, password){
        this.loginform.waitForExist()
        this.username.setValue(username)
        this.password.setValue(password)
        this.loginbutton.click()
    }

    logoutFromApplication(){
        this.userIcon.waitForExist(5000)
        this.userIcon.click()
        this.logoutLink.waitForExist(5000)
        this.logoutLink.click()
        this.logoutLink.waitForExist(5000, true)
    }
}

export default new LoginPage