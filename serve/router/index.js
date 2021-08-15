
const auth = require("./auth")
const myHome = require("./myHome")

function route(app) {
    app.use('/auth', auth)
    app.use('/', myHome)
}

module.exports = route