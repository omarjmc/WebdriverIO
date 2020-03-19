class Navbar{
    //home tab
    get hometab(){
        return $('#homeMenu')
    }

    //online banking tab
    get bakingtab(){
        return $('#onlineBankingMenu')
    }

    //feedback tab
    get feedbacktab(){
        return $('#feedback')
    }

    get searchbox(){
        return $('#searchTerm')
    }

    get signin(){
        return $('#signin_button')
    }

    search(text){
        this.searchbox.waitForExist()
        this.searchbox.setValue(text)
        browser.keys('Enter')
    }
}

export default new Navbar()