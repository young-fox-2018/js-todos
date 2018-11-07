const Model = require('../Models/Model')
const View = require('../Views/View')

class Controller {
    static help() {
        let command = Model.help()
        View.showHelp(command)
    }
    static add(input) {
        Model.addCommand(input)
        View.showAdd(input)
    }
    static list() {
        let list = Model.list()
        View.showList(list)
    }
    static findById(input) {
        let find = Model.findById(input)
        View.showById(find)
    }
    static delete(input) {
        let data = Model.delete(input)
        View.showDelete(data)
    }
    static complete(input) {
        let data = Model.complete(input)
        View.showComplete(data)
    }
    static uncomplete(input) {
        let data = Model.uncomplete(input)
        View.showUncomplete(data)
    }
    static createdList(input) {
        let data = Model.createdList(input)
        View.showCreatedList(data)
    }
    static completedList(input) {
        let data = Model.completedList(input)
        View.showCompletedList(data)
    }
    static addTags(id, input) {
        let data = Model.addTags(id, input)
        View.showAddTags(data)
    }
    static filterTags(input) {
        let data = Model.filterTags(input)
        View.showFilterTags(data)
    }
}

module.exports = Controller