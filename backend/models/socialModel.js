const db = require('../config/db')
const model = {}

model.getSocials = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM social_Links')
        return rows
    } catch(err) {
        throw err.message
    }
}


module.exports = model