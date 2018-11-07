
const Model = require("../models/model");

class Views {
    static help() {
        console.log("todo.js")
        console.log("todo.js help")
        console.log("todo.js list")
        console.log("todo.js add <task_content>")
        console.log("todo.js findById <task_id>")
        console.log("todo.js delete <task_id>")
        console.log("todo.js complete <task_id>")
        console.log("todo.js uncomplete <task_id>")
    }
    static list(data) {
        for(let i = 0; i < data.length; i++){
            console.log(data[i])
        }
    }

    static added(options) {
        console.log(`Added ${options} to your TODO list`)
        // console.log(options)
    }
    static findById(input) {
        console.log(input)
    }

    static deletedObj(input) {
        console.log(`Delted ${input} from yout TODO list`)
    }
    static completedTask(input) {
        console.log(input + " yay good job")
    }
}

module.exports = Views