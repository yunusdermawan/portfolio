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

module.exports = model