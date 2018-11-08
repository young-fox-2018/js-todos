const View = require("../views/view")
const Model = require("../models/model")

class Controller {
    static help() {
        let data = Model.help()
        View.data(data)
    }
    static list() {
        let list = Model.list()
        View.data(list)
    }
    static add(data) {
        let msg = Model.add(data)
        View.data(msg)
    }
    static find(data) {
        let msg = Model.findById(data)
        View.data(msg)
    }
    static delete(data) {
        let msg = Model.delete(data)
        View.data(msg)
    }
    static complete(data) {
        let msg = Model.complete(data)
        View.data(msg)
    }
    static uncomplete(data) {
        let msg = Model.uncomplete(data)
        View.data(msg)
    }
    static listCreated(sort) {
        let msg = Model.listCreated(sort)
        View.data(msg)
    }
    static completed_date(sort) {
        let msg = Model.completed_date(sort)
        View.data(msg)
    }
    static addTag(id, data) {
        let msg = Model.addTag(id, data)
        View.data(msg)

    }
    static filter(data) {
        let msg = Model.filter(data)
        View.data(msg)

    }

}

module.exports = Controller