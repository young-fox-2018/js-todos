const View = require("../Views/View")
const Model = require("../Models/Model")

class Controller {

    static list(){
        let list = Model.list();

        for( let i = 0; i < list.length; i++){
            View.display(list[i].id, list[i].status, list[i].task)
        }
    }

    static addTask(task){
        let message = `task adding failed`
        if(Model.addTask(task) === true){
            message = `adding task success`
        }

        View.console(message)

    }

    static deleteById(id){
        let deletedTask = Model.deleteById(id)
        let message = `Task ${deletedTask} deleted`

        if(deletedTask.length === 0){
            message =  `There is no task by that ID`
        }

        View.console(message)
    }

    static complete(id){
        Model.complete(id)

        Controller.list()
        
    }

    static uncomplete(id){
        Model.uncomplete(id)

        Controller.list()
        
    }

    static help(){
        let Command = Model.help()
        View.console(Command)
    }

    static findById(id){
        let result = Model.findById(id)
        View.display(result.id, result. task)
    }
}



module.exports = Controller