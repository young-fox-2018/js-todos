class View {
    static help() {
        console.log(`
        $ node todo.js 
        $ node todo.js help
        $ node todo.js list 
        $ node todo.js add <task_content>
        $ node todo.js findById <task_id>
        $ node todo.js delete <task_id>
        $ node todo.js complete <task_id>
        $ node todo.js uncomplete <task_id>
        $ node todo.js list:created asc|desc
        $ node todo.js list:completed asc|desc
        $ node todo.js filter:<tag_name>`)
    }
    static getList(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`${i+1}. ${data[i].completed ? '[x]' : '[ ]'} ${data[i].task}`)
        }
    }
    static addData(data) {
        console.log(`added ${data} to your TODO List`)
    }
    static show(data) {
        console.log(data)
    }
    static showDeletedData(data) {
        console.log(`Deleted "${data}" from your TODO List`)
    }
    static showTagAdded(task_name, tag_list) {
        console.log(`Tagged task ${task_name} with tags : ${tag_list.join(' ')}`)
    }
    static showDataFiltered(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
        }
    }
}
module.exports = View