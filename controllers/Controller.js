let Model = require('../models/Model.js')
let View = require('../views/View.js')
class Controller {
    static execute(command, option, sortType) {


        switch (command) {
            case 'list':
                Controller.list(command, option, sortType)
                break;
            case 'add':
                Controller.add(option)
                break;
            case 'findById':
                Controller.findById(option)
                break;
            case 'delete':
                Controller.delete(option)
                break;
            case 'complete':
                Controller.complete(option)
                break;
            case 'uncomplete':
                Controller.uncomplete(option)
                break;
            case 'tag':
                Controller.tag(command, option, tag)
                break;
            case 'filter':
                Controller.filter(command, option)
                break;


            default:
                Controller.help()
                break;
        }
    }

    static list(command, option, sortType) {
        console.clear()
        let dataList = Model.makeList(command, option, sortType)
        return View.execute(dataList)
    }
    static add(option) {
        console.clear()
        let dataAdd = Model.makeData(option)
        return View.execute(dataAdd)
    }
    static findById(option) {
        console.clear()
        let dataFind = Model.idFind(option)
        return View.execute(dataFind)
    }
    static delete(option) {
        console.clear()
        let dataDelete = Model.makeDelete(option)
        return View.execute(dataDelete)
    }
    static complete(option) {
        console.clear()
        let dataComplete = Model.makeComplete(option)
        return View.execute(dataComplete)
    }
    static uncomplete(option) {
        console.clear()
        let dataUncomplete = Model.makeUncomplete(option)
        return View.execute(dataUncomplete)
    }
    static tag(command, option, sortType) {
        console.clear()
        let dataTag = Model.makeTag(command, option, tag)
        return View.execute(dataTag)

    }
    static help() {
        console.log(`Command List:`);
        console.log(`help`);
        console.log(`list`);
        console.log(`add <task_content>`);
        console.log(`findById <task_id>`);
        console.log(`delete <task_id>`);
        console.log(`complete <task_id>`);
        console.log(`uncomplete <task_id>`);
        console.log(``);
    }
    static filter(command, option){
        console.clear()
        let dataFilter = Model.makeFilter(command, option)
        return View.execute(dataFilter)
    }
}

module.exports = Controller