const model = require('../models/userSkillModel')
const ctrl = {}

ctrl.getUserSkills = async (req, res) => {
    try {
        const result = await model.getUserSkills()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl