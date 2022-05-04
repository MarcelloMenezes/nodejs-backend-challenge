const verifyTask = (req, res, next) => {
    const { description, deadline } = req.body;

    if (!description) return res.status(404).json('O campo descricao é obrigatório');
    if (!deadline) return res.status(404).json('O campo prazo tarefa é obrigatório');

    next()
}

module.exports = verifyTask