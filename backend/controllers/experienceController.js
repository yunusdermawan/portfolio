const model = require('../models/experienceModel')
const ctrl = {}

ctrl.getExperiences = async (req, res) => {
    try {
        const result = await model.getExperiences()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl