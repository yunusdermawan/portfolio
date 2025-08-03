const db = require('../config/db')

const model = {}

model.getExperiences = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM experiences')
        return rows
    } catch(err) {
        throw err.message
    }
}

module.exports = model