
const Account = require("./../../models/account")

class Auth {
    async getLogin(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        let account = await Account.findOne({email: req.body.email})
        if (account != null) {
            res.json(account)
        }
    }
    async postLogin(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        let account = await Account.findOne({email: req.body.email, password: req.body.password})
        if (account !== null) {
            res.json({
                mess:"Đăng nhập thành công. Đang điều hướng về trang chủ",
                type:"success",
                duration:2000
            })
        } else {
            res.json({
                mess:"email hoặc mật khẩu sai. Mời kiểm tra lại",
                type:"error",
                duration:5000
            })
        }
    }
    getRegister(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        Account.find({}).then((data)=>res.json(data))
    }
    async postRegister(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        let account = await Account.findOne({email: req.body.email})
        if (account !== null) {
            res.json({
                mess:"Email đã tồn tại. Mời nhập lại",
                type:"error",
                duration:3000
            })
        } else {
            const newAccount = new Account(req.body)
            newAccount.save()
            res.json({
                mess: "Đăng ký thành công. Mời đăng nhập",
                type:"success",
                duration:5000
            })
        }

    }
}

module.exports = new Auth