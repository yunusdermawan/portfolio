const db = require('../config/db')
const model = {}

model.getSkills = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM skills')
        return rows
    } catch(err) {
        throw err.message
    }
}

module.exports = model