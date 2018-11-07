const View = require('../Views/View')
const Model = require('../Models/Model')

class Controller{
    static help(){
        View.help()
    }

    static list(){
        View.showList(Model.read())
    }

    static add(value){
        View.showData(Model.add(value))
    }

    static findById(value){
        View.showData(Model.find(value))
    }

    static delete(value){
        View.showData(Model.delete(value))
    }

    static complete(value){
        View.showList(Model.complete(value))
    }

    static uncomplete(value){
        View.showList(Model.uncomplete(value))
    }

    static listCreated(sort){
        View.showList(Model.listCreated(sort))
    }

    static listCompleted(sort){
        View.showList(Model.listCompleted(sort))
    }

    static listUncompleted(sort){
        View.showList(Model.listUncompleted(sort))
    }

    static tag(id, tags){
        View.showData(Model.tag(id,tags))
    }

    static filter(value){
        View.showList(Model.filter(value))
    }
}

module.exports = Controller