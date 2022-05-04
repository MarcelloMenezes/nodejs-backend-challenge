const yup = require('./settings')

const schemaVerifyInfo = yup.object().shape({
    email: yup.string().required().email(),
    senha: yup.string().required()
})

module.exports = schemaVerifyInfo