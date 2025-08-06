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

ctrl.getCertificationById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await model.getCertificationById(id)
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.getCertificationByTitle = async (req, res) => {
    try {
        const {title} = req.query
        const result = await model.getCertificationByTitle(title)
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl