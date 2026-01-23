const express = require('express');
const {body} = require('express-validator');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;