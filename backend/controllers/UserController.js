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


module.exports = ctrl