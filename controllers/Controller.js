const View = require('../views/View.js')
const Model = require('../models/Model.js')

class Controller {

    static execute(command, option) {
        let commandSplit = command.split(':')
        if(command === 'help') {
            View.help()
        } else if(command === 'list') {
            Controller.getData()
        } else if(command === 'add') {
            Controller.addData(option)
        } else if(command === 'findById') {
            Controller.findId(option)
        } else if(command === 'delete') {
            Controller.delete(option)
        } else if(command === 'complete' || command === 'uncomplete') {
            Controller.status(option, command)
        } else if(command === 'list:created') {
            Controller.listcreate({
                option: option,
                field: 'createdAt'
            })
        } else if(command === 'list:complete') {
            Controller.listComplete(option)
        } else if(command === 'tag') {
            Controller.addTag(option)
        } else if(commandSplit[0] === 'filter') {
            Controller.filter(commandSplit[1])
        } else {
            View.help()
        }

    }

    static getData() {
        let data = Model.getData()
        View.displayList(data)
    }

    static addData(option) {
        let data = Model.add(option)
        View.display(data)
    }

    static findId(option) {
        let byId = Model.findById(option)
        if (byId) {
            View.displayList(byId)
        } else {
            View.notFound("Tidak ditemukan")
        }
    }

    static delete(option) {
        let deleted = Model.delete(option)
        View.display(deleted)
    }

    static status(option, command) {
        if(command === 'complete') {
            let complete = Model.complete(option)
            View.displayList(complete)
        } else {
            let uncomplete = Model.uncomplete(option)
            View.displayList(uncomplete)
        }
    }

    static listcreate(option) {
        let list = Model.listSorted(option)
        View.displayList(list)
    }

    static listComplete(option) {
        let sorted = Model.listSorted({
            'field': 'complete',
            'option': option 
        })
        if(sorted.length !== 0) {
            View.displayList(sorted)
        } else {
            View.display('Tidak ada yang complete')
        }
    }

    static addTag(option) {
        let list = Model.addTag(option)
        View.display(list)
    }

    static filter(option) {
        let list = Model.filter(option)
        View.filterDisplay(list)
    }

}

module.exports = Controller