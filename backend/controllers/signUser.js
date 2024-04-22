const User = require('../models/register');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.User = async (req, res) => {
    const secretKey = process.env.secretKey;

    const generateToken = (username) => {
        const payload = {
            username: username
        };

        return jwt.sign(payload, secretKey, { expiresIn: '1h' });
    };

    try {
        const { email, password } = req.body;
        const foundUser = await User.findOne({ email });
        console.log(email);
        if (foundUser) {
            if (foundUser.password === password) {
                res.status(200).json({
                    success: true,
                    token: generateToken(foundUser.name),
                    message: 'Login success'
                });
            } else {
                res.status(200).json({
                    success: false,
                    message: 'Incorrect password'
                });
            }
        } else {
            res.status(200).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        res.status(500).json({
            success: false,
            error: error,
            message: 'Internal server error'
        });
    }
};
