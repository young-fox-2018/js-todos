const View = require('../views/View.js');
const Model = require('../models/Model.js')

class Controller {
    static execute(command, task) {
        switch(command) {
            case 'help' : Controller.help(); break;
            case 'list' : Controller.list(); break;
            case 'add' : Controller.add(task); break;
            case 'findById' : Controller.findId(task); break;
            case 'delete' : Controller.delete(task); break;
            case 'complete' : Controller.complete(task); break;
            case 'uncomplete' : Controller.uncomplete(task); break;
            default : Controller.help(); break;
        }
    }

    static help() {
        View.help();
    }
    static list() {
        let data = Model.getTodos();
        View.showData(data);
    }
    static add(task) {
        Model.addTodo(task);
    }
    static findId(id) {
        id = JSON.parse(id);
        let data = Model.findTodo(id);
        View.showData(data);
        
    }
    static delete(id) {
        id = JSON.parse(id);
        let data = Model.findTodo(id);
        Model.deleteTodo(id);
        View.deleteData(data)
        
    }
    static complete(id) {
        id = JSON.parse(id);        
        Model.completeTodo(id);
        this.list();
    }
    static uncomplete(id) {
        id = JSON.parse(id);
        Model.uncompleteTodo(id);
        this.list();
    }
}

module.exports = Controller