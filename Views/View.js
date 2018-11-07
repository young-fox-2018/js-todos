const Controller = require('../Controllers/TodoController')

class View {
    static help() {
        let list = ['help', 'list', 'add', 'findById', 'delete', 'complete', 'uncomplete']
        console.log(`node todo.js`)
        for (let i = 0; i < list.length; i++) {
            if (list[i] === 'add') {
                console.log(`node todo.js ${list[i]} <task_content`)
            } else if (list[i] !== 'help' && list[i] !== 'list' && list[i] !== 'add') {
                console.log(`node todo.js ${list[i]} <task_id>`)
            } else {
                console.log(`node todo.js ${list[i]}`)
            }
        }
    }
    static viewData(input) {
        console.log(input)
    }
    static viewError(input) {
        console.log(input)
    }
}


module.exports = View