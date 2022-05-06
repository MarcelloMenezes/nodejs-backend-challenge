const format = require('date-fns/format')

function formatTask(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].deadline < new Date()) {
            tasks[i].status = "TAREFA ATRASADA!"
        }
        tasks[i].deadline = (format(tasks[i].deadline, 'dd-MM-yyyy'))
    }
    
    return tasks
}

module.exports = { formatTask }