
const auth = require("./auth")
const myHome = require("./myHome")
const info = require("./info")
const shop = require("./shop")

function route(app) {
    app.use('/shop', shop)
    app.use('/info', info)
    app.use('/auth', auth)
    app.use('/', myHome)
}

module.exports = route