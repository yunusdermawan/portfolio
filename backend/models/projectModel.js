const db = require('../config/db')
const model = {}

model.getProjects = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM projects')
        return rows
    } catch(err) {
        throw err.message
    }
}

module.exports = model