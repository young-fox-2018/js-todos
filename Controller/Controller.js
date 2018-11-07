const View = require("../Views/View")
const Model = require("../Models/Model")

class Controller {

    static list(commandExt, option){
        let list = []
        if(commandExt === undefined){
            list = Model.list();
        }
        else if(commandExt === "completed"){
            list = Model.listCompleted();
            list.sort(function(a, b){return a.completed_at < b.completed_at})            
        }
        else{
            View.console(`list by that order is not available`)
            return false
        }

        if(option === "desc") list.reverse()

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

    //data[0] == id dan sisanya == tag
    static tag(data){
        let taggedTask = Model.tag(data);
        let tags = data.slice(1).trim()

        if(!taggedTask) {
            View.console(`failed to add tags`)
            return false;
        } else {
            View.console(`tagged task "${taggedTask}" with tags: ${tags}`)
        }

    }

    static filter(tag){
        let filtered = Model.filter(tag);

        for(let i = 0; i < filtered.length; i++){
            View.display(filtered[i].id, "", filtered[i].task, filtered[i].tags)
        }
    }
}



module.exports = Controller