const model = require('../models/skillModel')
const ctrl = {}

ctrl.getSkills = async (req, res) => {
    try {
        const result = await model.getSkills()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl