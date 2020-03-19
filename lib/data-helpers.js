module.exports = {
    getRandomName : function(){
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        return 'name${new Date().getTime().toString()}${randomNumber}'
    },

    getRandomID: function(){
        let randomID = Math.floor(Math.random() * 100 + 1)
        return 'name${new Date().getTime().toString()}${randomID}'
    },

    getRandomPhoneNumber: function(){
        return Math().random().toString().slice(2, 5)
    },

    getRandomEmail: function(){
        return '${new Date().getTime().toString()}${"@email.com"}'
    }
}