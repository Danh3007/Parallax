
const listProduct = require("./../../models/listProduct")

class myHome {
    getData(req, res) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3007');
        listProduct.find({}).then((data)=>res.json(data))
    }
    postData(req, res) {
        const data = new listProduct(req.query)
        data.save()
        res.json("thanh cong")
    }
}

module.exports = new myHome