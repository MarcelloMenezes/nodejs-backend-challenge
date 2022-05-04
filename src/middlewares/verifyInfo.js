const verifyInfo = (req, res, next) => {
    const { email, senha } = req.body;

    if (!email) return res.status(400).json("O campo email é obrigatório");
    if (!senha) return res.status(400).json("O campo senha é obrigatório");

    next()
}

module.exports = verifyInfo