
const auth = require("./auth")
const myHome = require("./myHome")
const info = require("./info")

function route(app) {
    app.use('/info', info)
    app.use('/auth', auth)
    app.use('/', myHome)
}

module.exports = route