const model = require('../models/certificationModel')
const ctrl = {}

ctrl.getCertifications = async (req, res) => {
    try {
        const result = await model.getCertifications()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl