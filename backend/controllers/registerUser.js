const Register = require("../models/register");

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await Register.create({ name, email, password });
        res.status(200).json({
            success: true,
            data: newUser,
            message: 'User created successfully'
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message,
        });
    }
};
