const fs = require("fs")
const Models = require("/home/arnold/Desktop/Phase1/h8-p1-w2/Wednesday/js-todos/Models/Models.js")
const View = require("/home/arnold/Desktop/Phase1/h8-p1-w2/Wednesday/js-todos/Views/View.js")


class Controller{
    static execute(cmd, task_id){
        switch(cmd[0]){
            default : Controller.help(); break;
            case "help" : Controller.help(); break;
            case "list" :  Controller.list(cmd[1], task_id); break;
            case "add" : Controller.add(task_id); break;
            case "findById" : Controller.findById(task_id); break;
            case "delete" : Controller.delete(task_id); break;
            case "complete" : Controller.complete(task_id); break;
            case "uncomplete" : Controller.uncomplete(task_id); break;
            case "tag" : Controller.tag(task_id); break;
            case "filter" : Controller.filter(cmd[1]); break;
        }
    }

    static help(){
        View.help()
    }
    static list(task_id, order){
        let dataFile = Models.getData(task_id, order)
        View.list(dataFile)
    }
    static add(task_id){
        let dataFile = Models.add(task_id)
        View.display(dataFile)
    }
    static findById(task_id){
        let dataFile = Models.findById(task_id)
        View.display(dataFile)
    }
    static delete(task_id){
        let dataFile = Models.delete(task_id)
        View.display(dataFile)
    }
    static complete(task_id){
        Models.complete(task_id)
        Controller.list()
    }
    static uncomplete(task_id){
        Models.uncomplete(task_id)
        Controller.list()
    }
    static tag(task_id){
        Models.tag(task_id)
        Controller.list()
    }
    static filter(task_id){
        let arrIndex = Models.filter(task_id)
        View.listFilter(arrIndex) 
    }
}



module.exports = Controller