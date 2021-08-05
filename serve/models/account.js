const mongoose = require("mongoose")

const accountSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nameUser: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("accounts", accountSchema)