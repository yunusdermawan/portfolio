const model = require('../models/socialModel')
const ctrl = {}

ctrl.getSocials = async (req, res) => {
    try {
        const result = await model.getSocials()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}


module.exports = ctrl