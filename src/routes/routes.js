const express = require('express');
require('dotenv').config()
const { signUp } = require('../controller/signUp');
const { login }= require('../controller/login');
const { registerTask } = require('../controller/tasks');
const verifyLogin = require('../filters/verifyLogin');
const verifyInfo = require('../middlewares/verifyInfo');
const verifyTask = require('../middlewares/verifyTask');

const routes = express();

//signUp
routes.post('/sign-up', verifyInfo, signUp);

//login
routes.post('/login', verifyInfo, login)

// filter user
routes.use(verifyLogin);

//tasks
routes.post('/task', verifyTask, registerTask)

module.exports = routes;