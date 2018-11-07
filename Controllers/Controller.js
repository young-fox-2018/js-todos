const View = require("../Views/View.js")
const Model = require("../Models/Model.js")

class Controller{
    static execute(command,option){
        switch(command){
            case "help": Controller.help(); break;
            case "list": Controller.list(); break;
            case "add": Controller.add(option); break;
            case "findById": Controller.findById(option); break;
            case "delete": Controller.delete(option); break;
            case "complete": Controller.complete(option); break;
            case "uncomplete": Controller.uncomplete(option); break;
            default: Controller.help(); break;
        }
    }

    static help(){
        View.help()
    }

    static list(){
        let data = Model.readFile()
        View.list(data)
    }

    static add(addList){
        Model.add(addList)
        View.displayMessage(`Added "${addList}" to your TODO list`)
    }

    static findById(id){
        let data = Model.findById(id)

        if ( data ) {
            View.displayMessage(id + ". " + data[0].task)
        } else {
            View.displayMessage("Data tidak ditemukan")
        }
    }

    static delete(id){
        let dataDeleted = Model.delete(id)
        View.displayMessage(`Deleted "${dataDeleted}" from your TODO list`)
    }

    static complete(id){
        Model.complete(id)
        let data = Model.readFile()
        View.list(data)
    }

    static uncomplete(id){
        Model.uncomplete(id)
        let data = Model.readFile()
        View.list(data)
    }
}

module.exports = Controller