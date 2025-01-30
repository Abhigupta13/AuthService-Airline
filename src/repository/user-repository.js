const { User,Role } = require('../models/index');
const ValidationError = require('../utils/validation-error');
const ClientError =require('../utils/client-error');
const { StatusCodes } = require('http-status-codes');

class UserRepository{

async create(data){
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
         if(error.name == 'SequelizeValidationError') {
        throw new ValidationError(error);
    }
        console.log("Something went wrong on user-repository layer");
        throw {error}
    }
}
async delete(userId){
    try {
        await User.distroy({
            where:{
                id: userId,
            }
        });
        return true;
    } catch (error) {
        console.log("Something went wrong on user-repository layer");
        throw {error}
    }
}
async getById (userId){
    try {
        const user = await User.fingByPk(userId, {
            attribute: ['email','id']
        });
        return user;
    } catch (error) {
        console.log("Something went wrong on user-repository layer");
        throw {error}
    }
}
async getByEmail(userEmail) {
    try {
        const user = await User.findOne({where: {
            email: userEmail
        }});
        if(!user){
            throw new ClientError(
                'AttributeNotFound',
                'Invalid email send in the request',
                'Please check the email , as there is no record of the email',
                StatusCodes.NOT_FOUND
            )
        }
        return user;
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}
async isAdmin(userId) {
    try {
        const user = await User.findByPk(userId);
        const adminRole = await Role.findOne({
            where: {
                name: 'ADMIN'
            }
        });
        return user.hasRole(adminRole);
    } catch (error) {
        console.log("Something went wrong on repository layer");
        throw error;
    }
}

async assignRole(userId, roleId) {
    try {
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);

        if (!user || !role) {
            throw new Error("User or Role not found");
        }

        await user.addRole(role); // Sequelize automatically inserts into 'User_Roles'

        console.log(`Role ${role.name} assigned to user ${user.email}`);
    } catch (error) {
        console.error("Error assigning role:", error);
    }
}


     
}

module.exports = UserRepository