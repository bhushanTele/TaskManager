// const register = async (userData) => {

//     return {
//         message: "Register route working",
//         userData
//     };

// };

// const login = async (userData) => {

//     return {
//         message: "Login route working",
//         userData
//     };

// };

// module.exports = {
//     register,
//     login
// };


const bcrypt = require("bcryptjs");

const User = require("../models/User");

const { generateToken } = require("../utils/generateToken");

const register = async (userData) => {

    const { username, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({
        username
    });

    if (existingUser) {

        throw new Error("Username already exists");

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({

        username,

        password: hashedPassword,

        role: "employee"

    });

    // Generate JWT
    const token = generateToken(user._id);

    return {

        message: "User registered successfully",

        token,

        user: {

            id: user._id,

            username: user.username,

            role: user.role

        }

    };

};

// const login = async (userData) => {

//     const { username, password } = userData;

//     // Find user
//     const user = await User.findOne({
//         username
//     });

//     if (!user) {

//         throw new Error("Invalid username or password");

//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(
//         password,
//         user.password
//     );

//     if (!isMatch) {

//         throw new Error("Invalid username or password");

//     }

//     // Generate JWT
//     const token = generateToken(user);

//     return {

//         message: "Login successful",

//         token,

//         user: {

//             id: user._id,

//             username: user.username,

//             role: user.role

//         }

//     };

// };


const login = async (userData) => {

    const { username, password } = userData;

    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Invalid username or password");
    }

    const token = generateToken(user._id);

    return {

        message: "Login successful",

        token,

        user: {

            id: user._id,

            username: user.username,

            role: user.role

        }

    };

};
module.exports = {

    register,

    login

};