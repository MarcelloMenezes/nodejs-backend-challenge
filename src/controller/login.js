const { knex } = require('../database/connection');
const { comparePasswords } = require('../utils/handlePassword')
const jwt = require('jsonwebtoken');
const jwtSecret = require('../service/jwtSecret');

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await knex('users').where({ email }).first();

        if (!user) return res.status(404).json('O usuario não foi encontrado');

        const correctPassword = await comparePasswords(senha, user.password);

        if (!correctPassword) return res.status(400).json("Email e senha não conferem");

        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '8h' });

        const { password, ...infoUser } = user;

        return res.status(200).json({
            user: infoUser,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}