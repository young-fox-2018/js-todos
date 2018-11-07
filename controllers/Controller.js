const View = require('/Users/admin/Documents/Phase 1/Week 2/js-todos/views/View.js')
const Model = require('/Users/admin/Documents/Phase 1/Week 2/js-todos/models/Model.js')

class Controller {
    static execute (command, task) { 
        switch (command) {
            case 'help' : Controller.help();break
            case 'list' :  Controller.list();break
            case 'add' : Controller.add(task);break
            case 'findById' : Controller.findById(task);break
            case 'delete' : Controller.delete(task);break
            case 'complete' : Controller.complete(task);break
            case 'uncomplete' : Controller.uncomplete(task);break
            default : Controller.help();break;
        }
    }

    static help() {
        View.help()
    }

    static list() {
        let data = Model.readData()
        View.list(data)
    }

    static add(task) {
        Model.add(task)
        View.add(task)
    }

    static findById(task) {
        let data = Model.findById(task)
        View.display(data)
    }

    static delete(task){
        let data = Model.delete(task)
        View.delete(data)
    }

    static complete(task){
        let data = Model.readData()
        Model.complete(task)
        View.displayStatus(data)
    }

    static uncomplete(task){
        let data = Model.readData()
        Model.uncomplete(task)
        View.displayStatus(data)
    }
}

module.exports = Controller