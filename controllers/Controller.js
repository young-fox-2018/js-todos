"use strict"

const Model = require('../models/Model')
const View = require('/Users/hacktiv8/Desktop/robert/robert/js-todos/views/view.js')

class Controller {
    static inputCommand(command, options, message) {
        switch (command) {
            case 'list':
                Controller.getList()
                break;
            case 'list:created':
                Controller.getSortedList(command, options)
                break;
            case 'list:completed':
                Controller.getSortedList(command, options)
                break;
            case 'add':
                Controller.addData(options)
                break;
            case 'findById':
                Controller.findById(options)
                break;
            case 'delete':
                Controller.delete(options)
                break;
            case 'complete':
            Controller.update(command, options)
            break;
            case 'uncomplete':
            Controller.update(command, options)
            break;
            case 'tag':
            Controller.update(command, options, message)
            break;
        }    
    }

    static getList() {
        let data = Model.readDataFromJSON()
        View.printData(data)
    }

    static addData(options) {
        let data = Model.addDataToJSON(options)

        View.printAddData(data)
    }

    static findById(options) {
        let result = Model.findById(options)
        View.printSingleData(result)
    }

    static delete(options) {
        let result = Model.delete(options)
        View.printDeletedData(result)
    }

    static update(command, options, message) {
        let result = Model.update(command, options, message)
        View.printData(result)
    }

    static getSortedList(command, options) {
        let result = Model.getSortedList(command, options)

        View.printData(result)
    }
}

module.exports = Controller