const express = require("express");
const router = express.Router();

const myHome = require("../controllers/myHome/myHome")

router.get("/getdata", myHome.getData);
router.post("/postdata", myHome.postData);

module.exports = router;