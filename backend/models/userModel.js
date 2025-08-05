const db = require('../config/db')

const model = {};

model.getUsers = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM users')
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

model.getSingleUserById = async (id) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id])
        return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}

model.getSingleUserByName = async (name) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE name = ?', [name])
        return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}

model.createUser = async ({
    name, 
    job_headline, 
    profile_pict, 
    bio, 
    location, 
    email
}) => {
    try {
        const [rows] = await db.query(`INSERT INTO users (
            name, 
            job_headline, 
            profile_pict, 
            bio, 
            location, 
            email
            ) VALUES (
             ?, 
             ?, 
             ?, 
             ?, 
             ?, 
             ?
             )`, [
                name, 
                job_headline, 
                profile_pict, 
                bio, 
                location, 
                email
            ])
        return rows
    } catch(err) {
        throw 'Error : ' + err.message
    }
}

model.updateUser = async ({
    name, 
    job_headline, 
    profile_pict, 
    bio, 
    location, 
    email,
    id
}) => {
    try {
        const [rows] = await db.query(`UPDATE users SET 
            name = ?, 
            job_headline = ?, 
            profile_pict = ?, 
            bio = ?, 
            location = ?, 
            email = ? 
            WHERE id = ?` 
            , [
                name, 
                job_headline, 
                profile_pict, 
                bio, 
                location, 
                email,
                id
            ])
        return rows
    } catch(err) {
        throw 'Error : ' + err
    }
}


module.exports = model