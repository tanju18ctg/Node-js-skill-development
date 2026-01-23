const {body} = require('express-validator');
const express = require('express');

const userController = require('../controllers/user.controller');
const router = express.Router();


router.post(
    '/',
    [
        body('email').isEmail(),
        body('password').isLength({min:6})
    ],
    userController.createUser
)
