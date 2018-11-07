class View {
    static help() {
        console.log(`
        =========== HELP ===========
        $ todo.js
        $ todo.js help
        $ todo.js list
        $ todo.js add <task_content>
        $ todo.js findById <task_id>
        $ todo.js delete <task_id>
        $ todo.js complete <task_id>
        $ todo.js uncomplete <task_id>`)
    }
    static list(data) {
        console.log(data)
    }
    static add(data) {
        console.log(`added ${data} to your TODO list`)
    }
    static findById(data) {
        console.log(`${data.id}. ${data.name}`)
    }
    static delete(data) {
        console.log(`Deleted ${data} from your TODO list`)
    }
    static sort(data) {
        console.log(data)
    }
    static err() {
        console.log(`Invalid Command`)
    }
}

module.exports = View