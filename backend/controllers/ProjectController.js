const model = require('../models/projectModel')
const ctrl = {}

ctrl.getProjects = async (req, res) => {
    try {
        const result = await model.getProjects()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl