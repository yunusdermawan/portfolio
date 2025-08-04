const db = require('../config/db')
const model = {}

model.getUserSkills = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM user_skills')
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

module.exports = model