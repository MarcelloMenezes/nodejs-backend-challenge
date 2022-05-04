const express = require('express');
require('dotenv').config()
const { signUp } = require('../controller/signUp');
const verifyInfo = require('../middlewares/verifyInfo');

const routes = express();

//signUp
routes.post('/sign-up', verifyInfo, signUp);

module.exports = routes;