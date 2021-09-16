
const Product = require("./../../models/product")

class Pro {

    // create product
    async createProduct(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        const data = new Product(req.body)
        data.save()
        res.json("oke")
    }
    
    // get product
    async getProduct(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        const data = await Product.find({idShop: req.body.idShop})
        if (data !== null) {
            res.json(data)
        } else {
            res.json("NO")
        }
    }
    // one product
    async Product(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        const data = await Product.findById({_id: req.body._id})
        if (data !== null) {
            res.json(data)
        } else {
            res.json("NO")
        }
    }

    // remove product
    async removeProduct(req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        const data = await Product.findByIdAndDelete({_id: req.body.id})
        if (data !== null) {
            res.json(data)
        } else {
            res.json("NO")
        }
    }
}

module.exports = new Pro