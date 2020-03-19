export default class BasePage{
    open(url){
        browser.url(url)
    }

    wait(timeout){
        browser.pause(timeout)
    }
}