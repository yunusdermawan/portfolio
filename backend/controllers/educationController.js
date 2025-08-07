const model = require('../models/educationModel')
const ctrl = {}

ctrl.getEducations = async (req, res) => {
    try {
        const result = await model.getEducations()
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.getEducationById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await model.getEducationById(id)
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.createEducation = async (req, res) => {
    try {
        const {
            user_id, 
            school, 
            degree, 
            major, 
            start_year, 
            end_year, 
            description, 
            document_url
        } = req.body
        const result = await model.createEducation(
            user_id, 
            school, 
            degree, 
            major, 
            start_year, 
            end_year, 
            description, 
            document_url
        )
        return res.json({
            id: result.insertId,
            user_id, 
            school, 
            degree, 
            major, 
            start_year, 
            end_year, 
            description, 
            document_url
        })
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl