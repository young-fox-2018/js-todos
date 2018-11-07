const Model = require("../Models/todo_model")
const View = require("../Views/todo_view")

class TodoController {
        static list() {
            View.printMany(Model.list())
        }

        static add(task) { // no error lah ya
            let todo_list = new Model()
            let data = todo_list.add(task)
            View.printOne(data)
        }
     
        static findById(id) {
            let data = Model.findById(Number(id))
            if (data.length !== 0) {
                View.printOne(data)
            } else {
                View.printError("not found")
            }
        }

        static delete(id) {
            let data = Model.delete(id)
            if (data != null) {
                View.printOne(data)
            } else {
                View.printError("not found")
            }
        }

        static complete(id) {
            let data = Model.complete(id)
            if (data != null) {
                View.printOne(data)
            } else {
                View.printError("not found")
            }

        }

        static uncomplete(id) {
            let data = Model.uncomplete(id)
            if (data != null) {
                View.printOne(data)
            } else {
                View.printError("not found")
            }
        }
        
        static listSortedBy(sortedCategory,options) { // options: asc, desc
            let data = Model.listSortedBy(sortedCategory, options)
            if (data != null) {
                View.printMany(data)
            } else {
                View.printError(`No such field as ${sortedCategory}`)
            }
          
        }

        static listCompleted(input) {
            let data = Model.listCompleted(input)
            View.printMany(data)
        }

        static addTag(id, arr) {
            let data = Model.addTag(id, arr)
            View.printMany(data)
        }

        static filter(tag) {
            let data = Model.filter(tag)
            View.printMany(data)
        }

}


module.exports = TodoController

