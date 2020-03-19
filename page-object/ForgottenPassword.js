class ForgottenPassword {
    get email(){
        return $('#user_email')
    }

    get submit(){
        return $('.btn-primary')
    }

    get title(){
        return $('h3')
    }

    getNewPassword(email){
        this.email.waitForExist()
        this.email.setValue(email)
        this.submit.click()
    }
}
export default new ForgottenPassword