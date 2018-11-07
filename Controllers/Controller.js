const View = require("../Views/View.js")
const Model = require("../Models/Model.js")

class Controller{
    static execute(argv,option){

        if(argv.length){
            var splitArgv = argv[0].split(":")
            var command = splitArgv[0]
            var command2 = splitArgv[1]
            // console.log(splitArgv+"--"+command+"=="+command2)
        }
        
        switch(command){
            case "help": Controller.help(); break;
            case "list": 
                    if(command2 === "created"){
                        Controller.listCreated(option, Model.readFile())
                    } else if(command2 === "completed"){
                        Controller.listCompleted(option, Model.readFile())
                    } else {
                        Controller.list(); 
                    }
                    break;
            case "add": Controller.add(option); break;
            case "findById": Controller.findById(option); break;
            case "delete": Controller.delete(option); break;
            case "complete": Controller.complete(option); break;
            case "uncomplete": Controller.uncomplete(option); break;
            case "tag": Controller.tag(option); break;
            case "filter": Controller.filter(command2,Model.readFile());break;
            default: Controller.help(); break;
        }
    }

    static listCreated(option,data){
        if(option[0] === "asc"){
            data.sort(function(a, b){return a.create_date > b.create_date});
            View.list(data)
        } else {
            data.sort(function(a, b){return a.create_date < b.create_date });
            View.list(data)
        }
    }

    static listCompleted(option,data){
        let completedTrue = []
        for( let i in data){
            if(data[i].completed){
                completedTrue.push(data[i])
            }
        }

        if(option[0] === "asc"){
            completedTrue.sort(function(a, b){return a.update_date > b.update_date});
            View.list(completedTrue)
        } else {
            completedTrue.sort(function(a, b){return a.update_date < b.update_date});
            View.list(completedTrue)
        }
    }

    static tag(option){
        let list = Model.tag(option)
        View.displayMessage(`Tagged task "${list}" with tag: ${option.slice(1)}`)
    }

    static filter(option,data){
        let dataFilter = Model.filter(option, data)
        for(let i = 0 ; i < dataFilter.length; i++){
            View.displayMessage(`${dataFilter[i].id}. ${dataFilter[i].list[0]} [${dataFilter[i].list[1]}]`)
        }
    }

    static help(){
        View.help()
    }

    static list(){
        let data = Model.readFile()
        View.list(data)
    }

    static add(addList){
        Model.add(addList)
        View.displayMessage(`Added "${addList}" to your TODO list`)
    }

    static findById(id){
        let data = Model.findById(id)
        if ( data ) {
            View.displayMessage(id + ". " + data[0].task)
        } else {
            View.displayMessage("Data tidak ditemukan")
        }
    }

    static delete(id){
        let dataDeleted = Model.delete(id)
        View.displayMessage(`Deleted "${dataDeleted}" from your TODO list`)
    }

    static complete(id){
        Model.complete(id)
        let data = Model.readFile()
        View.list(data)
    }

    static uncomplete(id){
        Model.uncomplete(id)
        let data = Model.readFile()
        View.list(data)
    }
}

module.exports = Controller