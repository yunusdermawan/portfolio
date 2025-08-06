const db = require('../config/db')

const model = {}

model.getCertifications = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM certifications')
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

model.getCertificationById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM certifications WHERE id = ?', [id])
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

model.getCertificationByTitle = async (title) => {
    try {
        const [rows] = await db.query('SELECT * FROM certifications WHERE title = ?', [title])
        return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}

model.createCertification = async (user_id, title, issuer, issue_date, cert_url) => {
    try {  
        const [rows] = await db.query('INSERT INTO certifications (user_id, title, issuer, issue_date, cert_url) VALUES (?, ?, ?, ?, ?)', [user_id, title, issuer, issue_date, cert_url])
        return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}

module.exports = model