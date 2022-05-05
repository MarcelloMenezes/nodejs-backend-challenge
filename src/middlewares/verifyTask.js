const { knex } = require('../database/connection');

const verifyTask = async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    try {
        const verifyTask = await knex('tasks').where({ id }).first()

        if (!verifyTask) return res.status(404).json('Tarefa não consta no sistema');
        if (verifyTask.user_id !== user.id) return res.status(404).json('Usuário não possui tarefa com esse ID');
        if (verifyTask.completed) return res.status(404).json('Tarefa já foi concluída, não pode ser atualizada');
    } catch (error) {
        console.log(error.message)
    }

    next()
}

module.exports = verifyTask