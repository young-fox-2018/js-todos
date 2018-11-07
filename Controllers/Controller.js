
const Model = require("../models/model");
const View = require("../views/view")


class Controller {

    static todos (command, options) {
        // console.log("pasti jalan ..")
        switch (command) {
            case "help" : 
                View.help(); 
                break;
            case "list" : 
                Controller.list(); 
                break;
            case "add" : 
                Controller.add(options); 
                break;
            case "findId" : 
                Controller.findId(options);
                break;
            case "delete" : 
                Controller.deleted(options); 
                break;
            case "completed" : 
                Controller.completed(options);
                break;
            // default: "will call help"; break;
        }
    }

    static list() {
        let data = Model.list()
        View.list(data)
    }

    static add(options) {
        let add = Model.addTodo(options);
        View.added(options)
    }
    static findId(options) {
        let find = Model.findId(options);
        View.findById(find);
    }
    static deleted(options) {
        let deleteObj = Model.delete(options)
        View.deletedObj(deleteObj)
    }

    static completed(options) {
        let task = Model.complete(options);
        // View.completedTask(options)
    }
}
module.exports = Controller