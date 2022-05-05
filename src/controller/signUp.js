const { knex } = require('../database/connection');
const { encryptPasswordValue } = require('../utils/handlePassword');
const schemaVerifyInfo = require('../middlewares/schemaVerifyInfo');

const signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        await schemaVerifyInfo.validate(req.body)

        const userInfo = await knex('users').where({ email }).first();

        if (userInfo) return res.status(400).json("O email já existe");

        const passwordHash = await encryptPasswordValue(password);

        const user = await knex('users').insert({
            email,
            password: passwordHash,
        });

        if (!user) return res.status(400).json("Não foi possível cadastrar o usuário");

        return res.status(201).json("O usuário foi cadastrado");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    signUp
}