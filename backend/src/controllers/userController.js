const User = require("../models/User");

const getEmployees = async (req, res, next) => {

    try {

        const employees = await User.find({

            role: "employee"

        }).select("_id username");

        res.status(200).json(employees);

    } catch (error) {

        next(error);

    }

};

module.exports = {
    getEmployees
};