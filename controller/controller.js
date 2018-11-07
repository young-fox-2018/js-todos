const TodoModel = require('../model/model')
const View = require('../view/view')

class TodoController {
    static help() {
        View.help()
    }
    static list() {
        View.list(TodoModel.list())
    }
    static add(input) {
        // TodoModel.add(input)
        // View.add(input)
        let data = new TodoModel(null, input)
        View.add(data.add())
    }
    static findById(id) {
        let data = TodoModel.findById(id)
        View.findById(data)
    }
    static delete(id) {
        let data = new TodoModel(id, null)
        View.delete(data.delete())
    }
    static complete(id) {
        let data = new TodoModel(id)
        data.complete()
        this.list()
    }
    static uncomplete(id) {
        let data = new TodoModel(id)
        data.uncomplete()
        this.list()
    }
    static sort(options, sort) {
        let data = TodoModel.sort(options, sort)
        if (data) {
            View.sort(data)
        } else {
            View.err()
        }
    }
}

module.exports = TodoController