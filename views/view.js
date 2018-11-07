"use strict"

class View {
    static help(input) {
        console.log(input)
    }

    static list(input) {
        console.log(input)
    }

    static listCreatedAsc(input) {
        console.log(input)
    }

    static listCreatedDesc(input) {
        console.log(input)
    }

    static listCompletedAsc(input) {
        console.log(input)
    }

    static listCompletedDesc(input) {
        console.log(input)
    }

    static listOutstandingAsc(input) {
        console.log(input)
    }

    static listOutstandingDesc(input) {
        console.log(input)
    }

    static addTag(input) {
        console.log(input)
    }

    static filterTag(input) {
        console.log(input)
    }

    static addTask() {
        console.log(`New task added successfully, type "$ node todo.js list" to check`)
    }

    static findTaskById(input) {
        console.log(input)
    }

    static deleteTask() {
        console.log(`Task deleted successfully, type "$ node todo.js list" to check`)
    }

    static completeTask(input) {
        console.log(input)
    }

    static uncompleteTask(input) {
        console.log(input)
    }
}

module.exports = View