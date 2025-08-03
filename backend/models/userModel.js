const db = require('../config/db')

const model = {};

model.getUsers = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM users')
        return rows
    } catch(err) {
        throw err.message
    }
}


module.exports = model