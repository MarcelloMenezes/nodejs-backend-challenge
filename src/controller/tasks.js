const { knex } = require('../database/connection');
const { viewPage } = require('../utils/handlePage');
const { formatDate } = require('../utils/handleDate');
const schemaVerifyTask = require('../middlewares/schemaVerifyTask');

const registerTask = async (req, res) => {
    const { description, deadline } = req.body;
    const { user } = req;

    try {
        const { task_date } = await schemaVerifyTask.validate(req.body)

        const task = await knex('tasks').insert({
            description,
            insertion_date: task_date,
            update_date: task_date,
            deadline,
            user_id: user.id
        });

        if (!task) return res.status(400).json('A tarefa não foi cadastrada');

        return res.status(201).json("Tarefa cadastrada com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const taskCompleted = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    try {
        const update_date = new Date()

        const task = await knex('tasks')
            .update({ update_date, completed })
            .where({ id });

        if (!task) return res.status(400).json("A tarefa não foi atualizada para concluída");

        return res.status(200).json("A tarefa foi concluída com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const taskUpdate = async (req, res) => {
    const { id } = req.params
    const { description, deadline } = req.body;

    try {
        const { task_date } = await schemaVerifyTask.validate(req.body)

        const task = await knex('tasks')
            .update({ update_date: task_date, description, deadline })
            .where({ id });

        if (!task) return res.status(400).json("A tarefa não foi atualizada para concluída");

        return res.status(200).json("A tarefa foi atualizada com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listTasks = async (req, res) => {
    let { limit = 5, page = 1 } = req.query;
    const { user } = req;

    try {
        let tasks
        if (user.email === process.env.EMAIL_ADM) {
            const currentPage = viewPage(limit, page)

            tasks = await knex('tasks')
                .join('users', 'users.id', '=', 'tasks.user_id')
                .orderBy('deadline')
                .select('users.email', 'tasks.description', 'tasks.deadline')
                .limit(limit)
                .offset(currentPage)

        } else {
            tasks = await knex('tasks')
                .where({ user_id: user.id, completed: false })
                .orderBy('deadline')
                .select('id', 'description', 'deadline')
        }

        if (!tasks.length) return res.status(400).json("Não foi possível listar tarefas");
        
        formatDate(tasks)

        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerTask,
    taskCompleted,
    taskUpdate,
    listTasks
}