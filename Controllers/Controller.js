const Model = require('/Users/zhang/phase1/p1w2/js-todos/Models/Model.js')
const View = require('/Users/zhang/phase1/p1w2/js-todos/Views/View.js')


class Controller {
  static execute(command,task) {
    switch (command) {
      case 'help': Controller.help(); break;
      case 'list': Controller.list(); break;
      case 'add': Controller.add(task); break;
      case 'findById': Controller.findById(task); break;
      case 'delete': Controller.delete(task); break;
      case 'complete': Controller.complete(task); break;
      case 'uncomplete': Controller.uncomplete(task); break;
      default: Controller.help() ; break;
    }
  }

  static help(){
    View.help()
  }

  static list(){
    let data = Model.readFile()
    View.list(data)
  }

  static add(task){
    Model.add(task)
    View.add(task)
  }

  static findById(task){
    let data = Model.findById(task)
    View.display(data)
  }

  static delete(task){
    let data = Model.delete(task)
    View.delete(data)
  }

  static complete(task){
    let data = Model.readFile()
    Model.complete(task)
    View.displayStatus(data)
  }

  static uncomplete(task){
    let data = Model.readFile()
    Model.uncomplete(task)
    View.displayStatus(data)
  }
}


module.exports = Controller