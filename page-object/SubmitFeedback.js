import BasePage from '../page-object/BasePage'

class SubmitFeedback extends BasePage{
    //get form
    get form(){
        return $('form')
    }

    //get name
    get name(){
        return $('#name')
    }

    //get email
    get email(){
        return $('#email')
    }

    //get subject
    get subject(){
        return $('#subject')
    }

    //get comment
    get comment(){
        return $('#comment')
    }

    //get submit
    get submit(){
        return $('.btn-primary')
    }

    //get feedbackmessage
    get feedbackmessage(){
        return $('#feedback-title')
    }

    submitFeedbackMessage(name, email, subject, comment){
        this.form.waitForExist()
        this.name.setValue(name)
        this.email.setValue(email)
        this.subject.setValue(subject)
        this.comment.setValue(comment)
        this.submit.click()
    }
}

export default new SubmitFeedback()