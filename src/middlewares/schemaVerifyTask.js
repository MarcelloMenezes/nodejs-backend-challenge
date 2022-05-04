const yup = require('./settings')

const schemaVerifyTask = yup.object().shape({
    description: yup.string().required(),
    deadline: yup.date().required(),
    task_date: yup.date().default(function () {
        return new Date();
    })
})

module.exports = schemaVerifyTask