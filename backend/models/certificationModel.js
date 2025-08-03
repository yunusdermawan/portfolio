const db = require('../config/db')

const model = {}

model.getCertifications = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM certifications')
        return rows
    } catch(err) {
        throw err.message
    }
}

module.exports = model