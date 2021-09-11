const express = require("express");
const router = express.Router();

const shop = require("../controllers/shop/shop")

router.post("/createShop", shop.createShop);
router.post("/getShop", shop.getShop);


module.exports = router;