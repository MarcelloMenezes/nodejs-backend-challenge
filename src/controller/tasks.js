const { knex } = require('../database/connection');
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

module.exports = {
    registerTask,
    taskCompleted
}