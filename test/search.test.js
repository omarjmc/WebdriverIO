const expect = require('chai')

import NavBar from '../components/Navbar'

describe('Search Test', () => {
    it('Should run a search', () => {
        browser.url('http://zero.webappsecurity.com/')
        NavBar.search('test')
    })
})
