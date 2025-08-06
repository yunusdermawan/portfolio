const model = require('../models/userModel')
const ctrl = {}

ctrl.getUsers = async (req, res) => {
    try {
        const result = await model.getUsers();
        // const result = await model.test();
        
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }

};

ctrl.getSingleUserById = async (req, res) => {
    try {
        const result = await model.getSingleUserById(req.params.id)
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.getSingleUserByName = async (req, res) => {
    try {
        const {name} = req.query
        const result = await model.getSingleUserByName(name)
        return res.json(result)
    } catch(err) {
        res.json('Error : ' + err)
    }
}

ctrl.createUser = async (req, res) => {
    try {
        const {
            name, 
            job_headline, 
            profile_pict, 
            bio, 
            location, 
            email
        } = req.body
        const result = await model.createUser({
            name, 
            job_headline, 
            profile_pict, 
            bio, 
            location, 
            email
        })
        return res.json({
            id: result.insertId,
            name,
            job_headline,
            profile_pict,
            bio,
            location,
            email
        })
    } catch(err) {
        console.log(err)
        res.json('Error : ' + err)
    }
}

ctrl.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const {
            name, 
            job_headline, 
            profile_pict, 
            bio, 
            location, 
            email
        } = req.body
        const result = await model.updateUser({
            name, 
            job_headline, 
            profile_pict, 
            bio, 
            location, 
            email,
            id
        })
        return res.json(
            `User ` + id + ` successfully updated!\n` + 
            `
            name : ${name}
            job_headline : ${job_headline}, 
            profile_pict : ${profile_pict}, 
            bio : ${bio}, 
            location : ${location}, 
            email : ${email},
            `
        )
    } catch(err) {
        res.json('Error : ' + err)
    }
}

module.exports = ctrl