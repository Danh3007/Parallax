
const Information = require("./../../models/info")

class Info {
    async postInfor(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        const infor = Information(req.body)
        infor.save()
        res.json("oke post")
    }
    async upAddress(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        let infor = await Information.findOneAndUpdate({email: req.body.email}, {$push: {address: req.body.address}})
        if (infor != null) {
            res.json("oke")
        }
    }
    async removeAddress(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        let infor = await Information.findOneAndUpdate({email: req.body.email}, {$pull: {address: req.body.element}})
        if (infor != null) {
            res.json("oke")
        }
    }
    async getInfor(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        let infor = await Information.findOne({email: req.body.email})
        if (infor != null) {
            res.json(infor)
        }
    }
    async updateInfor(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        let inFor = await Information.findOneAndUpdate({email: req.query.email}, req.query)
        if (inFor != null) {
            res.json("oke")
        }
    }
}

module.exports = new Info