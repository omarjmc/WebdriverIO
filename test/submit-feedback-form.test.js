const expect = require('chai').expect
import SubmitFeedback from '../page-object/SubmitFeedback'
import Navbar from '../components/Navbar'

describe('Submit feedback form', () => {
    before(function(){
        browser.url('http://zero.webappsecurity.com')

        const metadata = browser.getMetaData()
        expect(metadata.title).to.contains('Personal Banking')
        expect(metadata.url).to.contains('webapp')
    })

    it('Should click on feedback tab', () => {
        Navbar.feedbacktab.click()
    })

    it('should submit the form', () => {
        SubmitFeedback.submitFeedbackMessage('omar', 'foo@test.com', 'sub', 'test')
    })

    it('should validate feedback was submitted', () => {
        SubmitFeedback.feedbackmessage.waitForExist()
        expect(SubmitFeedback.feedbackmessage).to.exist
    })
})