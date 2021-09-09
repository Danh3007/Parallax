const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth/auth")

router.post("/datalogin", auth.getLogin);
router.post("/login", auth.postLogin);
router.post("/updatelogin", auth.updateLogin);
router.post("/register", auth.postRegister);

module.exports = router;