const express = require('express');
const UserController = require('../../controllers/user-controller');
const {AuthRequestValidators} = require('../../middleware/index')
const router = express.Router();
router.post(
    '/signup' ,
    AuthRequestValidators.validateUserAuth,
    UserController.create);
router.post(
    '/signin' , 
    AuthRequestValidators.validateUserAuth,
    UserController.signIn);

    router.get('/isAuthenticated', UserController.isAuthenticated);
    router.get('/isAdmin',AuthRequestValidators.validateIsAdminRequest, UserController.isAdmin);
    router.post('/assignRole',AuthRequestValidators.validateAssignRoleRequest, UserController.assignRole);

module.exports = router;