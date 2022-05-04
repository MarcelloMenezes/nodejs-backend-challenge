const express = require('express');
require('dotenv').config()
const { signUp } = require('../controller/signUp');
const { login }= require('../controller/login')
const verifyInfo = require('../middlewares/verifyInfo');

const routes = express();

//signUp
routes.post('/sign-up', verifyInfo, signUp);

//login
routes.post('/login', verifyInfo, login)

module.exports = routes;