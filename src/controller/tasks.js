const { knex } = require('../database/connection');

const registerTask = async (req, res) => {
    const { description, deadline } = req.body;
    const { user } = req;

    try {
        const insertion_date = new Date()

        const task = await knex('tasks').insert({
            description,
            insertion_date,
            update_date: insertion_date,
            deadline,
            user_id: user.id
        });

        if (!task) return res.status(400).json('A tarefa não foi cadastrada');

        return res.status(201).json("Tarefa cadastrada com sucesso");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    registerTask
}