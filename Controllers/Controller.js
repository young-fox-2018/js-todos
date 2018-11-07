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
}

module.exports = Controller