const db = require('../config/db')

const model = {}

model.getEducations = async () => {
    try {
        const [rows] = await db.query('SELECT * from educations')
        return rows
    } catch(err) {
        throw err.message
    }
}

model.getEducationById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM educations WHERE id = ?', [id])
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

module.exports = model