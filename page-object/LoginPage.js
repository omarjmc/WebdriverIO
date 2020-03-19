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
}

export default new LoginPage