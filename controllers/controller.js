const Model = require("../models/model")
const View = require("../views/views")

class Controller {
    static callHelp() {
        View.help()
    }
    static showList() {
        let list = Model.getList()
        View.list(list)
    }
    static addData(input) {
        let data = Model.addData(input)
        View.addDataMessage(data)
    }
    static findID(input) {
        let data = Model.findID(input)
        View.addIDMessage(input, data)
    }
    static deleteID(input) {
        let data = Model.deleteID(input)
        View.deleteIDMessage(data)
    }
    static tagItComplete(input) {
        let data = Model.tagItComplete(input)
        View.taggedCompleteMessage(data)
    }
    static tagItIncomplete(input) {
        let data = Model.tagItIncomplete(input)
        View.taggedIncompleteMessage(data)
    }
    static showListCreatedASC(sort) {
        let data = Model.showlistCreatedASC(sort)
        View.showlistCreatedASC(data)
    }
    static showListCreatedDES(sort) {
        let data = Model.showlistCreatedDES(sort)
        View.showlistCreatedDES(data)
    }
    static showListCompletedASC(sort) {
        let data = Model.showlistCompletedASC(sort)
        View.showlistCompletedASC(data)
    }
    static showListCompletedDES(sort) {
        let data = Model.showlistCompletedDES(sort)
        View.showlistCompletedDES(data)
    }

}

module.exports = Controller