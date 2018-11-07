"use strict"

const Model = require('../models/Model')
const View = require('/Users/hacktiv8/Desktop/robert/robert/js-todos/views/view.js')

class Controller {
    static inputCommand(command,extraCommand, options, message) {
        switch (command) {
            case 'list':
                Controller.getSortedList(command,extraCommand, options)
                break
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
            case 'filter':
                Controller.filter(command, extraCommand, options)
                break;
        }    
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
        if (message != null) {
            View.printTagData(result)
        } else {
            View.printData(result)
        }
    }

    static getSortedList(command,extraCommand, options) {
        let result = Model.getSortedList(command,extraCommand, options)
        View.printData(result)
    }

    static filter(command, extraCommand, options) {
        let data = Model.filter(command, extraCommand, options)  
        View.printFilterData(data)
    }
}

module.exports = Controller