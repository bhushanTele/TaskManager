const authService = require("../services/authService");

const register = async (req, res) => {

    try {

        const response = await authService.register(req.body);

        res.status(201).json(response);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }

};

const login = async (req, res) => {

    try {

        const response = await authService.login(req.body);

        res.status(200).json(response);

    } catch (error) {

        res.status(401).json({
            message: error.message
        });

    }

};

module.exports = {

    register,

    login

};