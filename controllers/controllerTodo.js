"use strict"

const Model = require('../models/todo')
const View = require('../views/view')

class Controller {
    static help() {
        View.help(Model.help())
    }

    static list() {
        View.list(Model.list())
    }

    static listCreatedAsc() {
        View.listCreatedAsc(Model.listCreatedAsc())
    }

    static listCreatedDesc() {
        View.listCreatedDesc(Model.listCreatedDesc())
    }

    static listCompletedAsc() {
        View.listCompletedAsc(Model.listCompletedAsc())
    }

    static listCompletedDesc() {
        View.listCompletedDesc(Model.listCompletedDesc())
    }

    static listOutstandingAsc() {
        View.listOutstandingAsc(Model.listOutstandingAsc())
    }

    static listOutstandingDesc() {
        View.listOutstandingDesc(Model.listOutstandingDesc())
    }

    static addTag(id, input) {
        View.addTag(Model.addTag(id, input))
    }

    static filterTag(input) {
        View.filterTag(Model.filterTag(input))
    }

    static addTask(input) {
        Model.addTask(input)
        View.addTask()
    }

    static findTaskById(input) {
        View.findTaskById(Model.findTaskById(input))
    }

    static deleteTask(input) {
        Model.deleteTask(input)
        View.deleteTask()
    }

    static completeTask(input) {
        View.completeTask(Model.completeTask(input))
    }

    static uncompleteTask(input) {
        View.uncompleteTask(Model.uncompleteTask(input))
    }
}

module.exports = Controller