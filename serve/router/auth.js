const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth/auth")

router.get("/register", auth.getRegister);

module.exports = router;