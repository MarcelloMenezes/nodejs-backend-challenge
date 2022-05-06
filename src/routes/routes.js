const express = require('express');
require('dotenv').config();
const { signUp } = require('../controller/signUp');
const { login } = require('../controller/login');
const {
    registerTask,
    taskCompleted,
    taskUpdate,
    listTasks,
    filterTasks } = require('../controller/tasks');
const verifyLogin = require('../filters/verifyLogin');
const verifyTask = require('../middlewares/verifyTask');

const routes = express();

routes.post('/sign-up', signUp);

routes.post('/login', login);

routes.use(verifyLogin);

routes.post('/task', registerTask);
routes.put('/task/:id', verifyTask, taskCompleted);
routes.put('/task-update/:id', verifyTask, taskUpdate);
routes.get('/tasks', listTasks);
routes.get('/list-tasks', filterTasks);

module.exports = routes;