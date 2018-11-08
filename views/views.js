

class View {
    static help() {
        console.log(`
list of helps :
------------------------------------
$ node todo.js 
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_contect>
$ node todo.js findByID <task_id>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
`)
    }
    static list(input) {
        console.log(input)
    }
    static addDataMessage(input) {
        console.log(input)
    }
    static addIDMessage(input, data) {
        console.log(`${input}. ${JSON.stringify(data)}`)
    }
    static deleteIDMessage(data) {
        console.log(`task ${data} been deleted`)
    }
    static taggedCompleteMessage(list) {
        return `${list}`
    }
    static taggedIncompleteMessage(list) {
        return `${list}`
    }
    static showlistCreatedASC(data) {
        console.log(data)
    }
    static showlistCreatedDES(data) {
        console.log(data)
    }
    static showlistCreadASC(data) {
        console.log(data)
    }
    static showlistCompletedDES(data) {
        console.log(data)
    }
}

module.exports = View