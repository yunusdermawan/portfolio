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

ctrl.createCertification = async (req, res) => {
    try {
        const {
            user_id, 
            title, 
            issuer, 
            issue_date, 
            cert_url
        } = req.body
        const result = await model.createCertification(
            user_id, 
            title, 
            issuer, 
            issue_date, 
            cert_url
        )
        return res.json({
            id: result.insertId,
            user_id, 
            title, 
            issuer, 
            issue_date, 
            cert_url
        })
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.updateCertification = async (req, res) => {
    try {
        const id = req.params.id
        const {
            user_id, 
            title, 
            issuer, 
            issue_date, 
            cert_url
        } = req.body
        const result = await model.updateCertification({
            user_id, 
            title, 
            issuer, 
            issue_date, 
            cert_url,
            id
        })
        return res.json(
            `Certificate ` + id + ` is successfully updated!\n` +
            `
            user_id : ${user_id} 
            title : ${title}
            issuer : ${issuer}
            issue_date ${issue_date}
            cert_url: ${cert_url}
            `
        )
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl