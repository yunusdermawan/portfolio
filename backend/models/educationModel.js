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

model.createEducation = async ({
    user_id, 
    school, 
    degree, 
    major, 
    start_year, 
    end_year, 
    description, 
    document_url
}) => {
    try {
        const [rows] = await db.query(`INSERT INTO educations (
        user_id, 
        school, 
        degree, 
        major, 
        start_year, 
        end_year, 
        description, 
        document_url
        ) VALUES (
         ?, 
         ?, 
         ?, 
         ?, 
         ?, 
         ?, 
         ?, 
         ?)`, [
            user_id, 
            school, 
            degree, 
            major, 
            start_year, 
            end_year, 
            description, 
            document_url
         ])
         return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}

module.exports = model