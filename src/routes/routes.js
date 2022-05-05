const express = require('express');
require('dotenv').config()
const { signUp } = require('../controller/signUp');
const { login }= require('../controller/login');
const { registerTask, taskCompleted } = require('../controller/tasks');
const verifyLogin = require('../filters/verifyLogin');
const verifyTask = require('../middlewares/verifyTask');

const routes = express();

//signUp
routes.post('/sign-up', signUp);

//login
routes.post('/login', login)

// filter user
routes.use(verifyLogin);

//tasks
routes.post('/task', registerTask)
routes.put('/task/:id', verifyTask, taskCompleted)

module.exports = routes;