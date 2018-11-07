const Model = require('E:/Bootcamp/phase1/week2/wednesday/js-todos/models/Model.js')
const View = require('E:/Bootcamp/phase1/week2/wednesday/js-todos/views/View.js')
class Controller {
    static start(command) {
        let order = command[0].split(':')
        let task_content  = command[1]
        let typeSort = command[1]
        let task_id = command[1]
        let orderBy = order[1]
        let searchTag = order[1]
        let list_tag = command.slice(2)
        switch (order[0]) {
            case 'help': Controller.getHelp()
                break;
            case 'list' : Controller.getList(orderBy,typeSort)
                break;
            case 'add' : Controller.addTask(task_content)
                break;
            case 'findById' : Controller.findById(task_id)
                break;
            case 'delete' : Controller.deleteById(task_id)
                break;
            case 'complete' : Controller.completeTask(task_id)
                break;
            case 'uncomplete' : Controller.uncompleteTask(task_id)
                break;
            case 'tag' : Controller.addTag(task_id, list_tag)
                break;
            case 'filter' : Controller.filter(searchTag)
                break;
            case 'resetAllDate' : Controller.setDate()
                break;
            default: Controller.getHelp()
                break;
        }
    }
    static resetAllDate() {
        Model.resetAllDate()
    }
    static getHelp() {
        View.help()
    } 

    static getList(orderBy,typeSort){
        if(orderBy === undefined) {
            let data = Model.getList()
            View.getList(data)
        }else {
            let data = Model.getList(orderBy,typeSort)
            View.getList(data)
        }
    }

    static addTask(task_content) {
        Model.addTask(task_content)
        View.addData(task_content)
    }

    static findById(task_id) {
        View.show(Model.findById(task_id))
    }

    static deleteById(task_id) {
        View.showDeletedData( Model.deleteTask(task_id))
    }

    static completeTask(task_id) {
        Model.completeTask(task_id)
        View.getList(Model.getList())
    }

    static addTag(task_id, list_tag) {
        let nama_task = Model.addTag(task_id, list_tag)
        View.showTagAdded(nama_task, list_tag)
    }

    static uncompleteTask(task_id) {
        Model.uncompleteTask(task_id)
        View.getList(Model.getList())
    }
    static filter(searchTag) {
       View.showDataFiltered(Model.filter(searchTag))
    }

}

module.exports = Controller