
const Account = require("./../../models/account")

class Auth {
    getLogin(req, res) {
        res.send("danh")
    }
    postLogin(req, res) {
        res.send("danh")
    }
    getRegister(req, res) {
        Account.find({}).then((data)=>res.json(data))
    }
    postRegister(req, res) {
        const newAccount = new Account(req.query)
        newAccount.save()
        res.json(newAccount)
    }
}

module.exports = new Auth