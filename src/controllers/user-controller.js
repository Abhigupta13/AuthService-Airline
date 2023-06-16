const UserService = require('../service/user-service');

const userService = new UserService();


const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: "not able to create an user",
            data: {},
            success: false,
            err: {}
        });
    }
}

module.exports = {
    create,
}