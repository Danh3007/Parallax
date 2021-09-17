const express = require("express");
const router = express.Router();

const shop = require("../controllers/shop/shop")

router.post("/createShop", shop.createShop);
router.post("/getShop", shop.getShop);
router.post("/seeShop", shop.seeShop);


module.exports = router;