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
      case 'created': Controller.created(task); break;
      case 'completed': Controller.completed(task); break;
      case 'tag': Controller.tag(task); break;
      // case 'filter': Controller.filter(task); break;

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
    Model.complete(task)
    this.list()
  }

  static uncomplete(task){
    Model.uncomplete(task)
    this.list()
  }

  static created(task) {
    let data = Model.readFile()
    if(task == 'asc') {
      this.list()   
    } else {
      data = Model.sortDesc(data)
      View.list(data)
    }
  }

  static completed(task) {
    let data = Model.getByComplete()
    if (task == 'desc') {
      data = Model.sortDesc(data)
      View.list(data)
    }
  }

  static tag(task){
    Model.tag(task)
  }
}


module.exports = Controller