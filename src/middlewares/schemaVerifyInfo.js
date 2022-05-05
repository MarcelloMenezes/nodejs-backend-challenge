const yup = require('./settings')

const schemaVerifyInfo = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
})

module.exports = schemaVerifyInfo