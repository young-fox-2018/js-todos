const View = require('../views/View.js');
const Model = require('../models/Model.js')

class Controller {
    static execute(command, task) {
        if (command !== undefined) {
            var commandList = command.split(':');
        } else {
            var commandList = ['']
        }

        switch(commandList[0]) {
            case 'help' : Controller.help(); break;
            case 'list' : Controller.list(commandList[1], task[0]); break;
            case 'add' : Controller.add(task[0]); break;
            case 'findById' : Controller.findId(task[0]); break;
            case 'delete' : Controller.delete(task[0]); break;
            case 'complete' : Controller.complete(task[0]); break;
            case 'uncomplete' : Controller.uncomplete(task[0]); break;
            case 'tag' : Controller.giveTags(task); break;
            case 'filter' : Controller.filterTags(commandList[1]); break;
            default : Controller.help(); break;
        }
    }

    static help() {
        View.help();
    }

    static list(command, task) {
        if (command === undefined && task === undefined) {            
            var data = Model.getTodos();
        } else {
            // console.log(`command`, command);
            // console.log(`task`, task);
            var data = Model.sort(command, task);
        }

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

    static giveTags(tags) {      
        let id = JSON.parse(tags[0])
        let data = Model.findTodo(id);
        Model.giveTags(tags);
        tags.shift();
        View.giveTags(data, tags);
    }

    static filterTags(tag) {
        let data = Model.filterTags(tag);
        View.showDataWithTags(data);
    }

}

module.exports = Controller