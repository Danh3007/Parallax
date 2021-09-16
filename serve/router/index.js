
const auth = require("./auth")
const myHome = require("./myHome")
const info = require("./info")
const shop = require("./shop")
const product = require("./product")

function route(app) {
    app.use('/product', product)
    app.use('/shop', shop)
    app.use('/info', info)
    app.use('/auth', auth)
    app.use('/', myHome)
}

module.exports = route