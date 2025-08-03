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


module.exports = model