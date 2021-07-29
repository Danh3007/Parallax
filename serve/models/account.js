const mongoose = require("mongoose")
const Schema = mongoose.Schema

const accountSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("accounts", accountSchema)