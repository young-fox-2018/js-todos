const View = require('../Views/View')
const Help = require('../Models/Help')
const List = require('../Models/ReadList')
const Add = require('../Models/Add')
const FindById = require('../Models/FindById')
const Delete = require('../Models/Delete')
const Complete = require('../Models/Complete')
const Uncomplete = require('../Models/Uncomplete')
const Tag = require('../Models/Tag')
const Filter = require('../Models/Filter')

class Controller{
    static help(){
        View.showData(Help)
    }

    static list(){
        View.showList(List.listParsing())
    }

    static add(value){
        View.showData(Add.addItem(value))
    }

    static findById(value){
        View.showData(FindById.find(value))
    }

    static delete(value){
        View.showData(Delete.deleteById(value))
    }

    static complete(value){
        View.showList(Complete.completed(value))
    }

    static uncomplete(value){
        View.showList(Uncomplete.undone(value))
    }

    static listCreated(sort){
        View.showList(List.listCreated(sort))
    }

    static listCompleted(sort){
        View.showList(List.listCompleted(sort))
    }

    static listUncompleted(sort){
        View.showList(List.listUncompleted(sort))
    }

    static tag(id, tags){
        View.showData(Tag.tag(id,tags))
    }

    static filter(value){
        View.showList(Filter.filter(value))
    }
}

module.exports = Controller