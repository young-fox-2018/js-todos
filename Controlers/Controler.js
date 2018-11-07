const Model = require('../Models/Model')
const View = require('../Views/View')

class Controler {
   static Execute(command,task,){
       switch (command) {
            case "help": Controler.help() ; break;
            case "list": Controler.list() ;break;
            case "created": Controler.created(task);break;
            case "add" : Controler.add(task) ;break;
            case "findById": Controler.findById(task);break;
            case "delete" : Controler.delete(task);break;
            case "complete": Controler.complete(task);break;
            case "uncomplete": Controler.uncomplete(task);break;
            case "tag": Controler.tag();break;
            case "filer": Controler.fiter();break;
           default: Controler.help();break;
       }

    }

   static help() {
       View.help()

   }
   static list() {
       let data = Model.readFile()
       View.list(data)

   }
   static created(task){
    let data = Model.listCreated(task)
    View.list(data)


    }
   static add(task) {
    Model.addData(task)
    View.add(task)


   }
   static findById(task) {
       let result = Model.findById(task)
       View.displayData(result)

   }
   static delete(task) {
       let result = Model.delete(task)
       View.delete(result)

   }
   static complete(task) {
       Model.complete(task)
       this.list()

        // View.displayStatus(data)
   }
   static uncomplete(task){
        Model.uncomplete(task)
        this.list()
   }
   
}

module.exports = Controler