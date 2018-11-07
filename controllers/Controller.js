"use strict"
const Model = require('../models/Model')
const View = require('../views/View')

class Controller {
    static run(command, sorter, options){
        switch(command) {
            case 'help' : Controller.help(); break;
            case 'list' : Controller.list(sorter, options); break;
            case 'add' : Controller.add(options); break;
            case 'findById' : Controller.findById(options); break;
            case 'delete' : Controller.delete(options); break;
            case 'complete' : Controller.complete(options); break;
            case 'uncomplete' : Controller.uncomplete(options); break;
            case 'tag' : Controller.tag(options); break;
            case 'filter' : Controller.filter(sorter); break;
            default: Controller.help(); break;
        }
    }

    static help () {
        View.displayHelp()
    }
    
    static list (command, options) {
        let data = Model.getList(command, options)
        View.displayList(data)
    }

    static add (options) {
        let addTodos = Model.addData(options) 
        View.displayData(addTodos)
    }

    static findById (options) {
        let findTodosById = Model.findById(options)
        View.displayList(findTodosById)
    }

    static delete (options) {
        let deleted = Model.deleteData (options)
        View.displayDelete(deleted)
    }

    static complete (options) {
        let complete = Model.completeData(options)
        View.displayList(complete)
    }

    static uncomplete (options) {
        let complete = Model.uncompleteData(options)
        View.displayList(complete)
    }

    static tag (options) {
        let addedTag = Model.tag(options)
        View.displayTag(addedTag)
    }

    static filter (sorter) {
        let dataFilter = Model.filterTag(sorter)
        View.displayTag(dataFilter)
    }
}

module.exports = Controller 