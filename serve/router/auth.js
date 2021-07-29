const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/account");

// register
router.get("/login", async (req, res) => {
    const nerUser = User(req.body)
    nerUser.save()
});
router.post("/register", async (req, res) => {
    const nerUser = User(req.body)
    nerUser.save()
    
});

module.exports = router;
