const Model = require('../Models/Model.js');
const View = require('../Views/View.js');

class Controller {
  static execute (command, options) {
    switch (command) {
      case "list":
        Controller.list()
        break;

      case "add":
        Controller.add(options)
        break;

      case "findById":
        Controller.findById(options)
        break;

      case "delete":
        Controller.delete(options)
        break;

      case "complete":
        Controller.complete(options)
        break;

      case "uncomplete":
        Controller.uncomplete(options)
        break;

      case "list:created":
        Controller.list(options)
        break;

      case "completed":
        Controller.completed(options)
        break;

      case "tag":
        Controller.tag(options)
        break;

      case "filter":
        Controller.filter(options)
        break;

      default: Controller.help()
    }
  }
  static help() {
    console.log(`Ini adalah aplikasi to do list`);
    console.log(`\n-------------------------------`);
    console.log(`node tojo.js \nnode todo.js help \nnode todo.js list \nnode todo.js add <task_content> \nnode todo.js findById <task_id> \nnode todo.js delete <task_id> \node todo.js complete <task_id \nnode todo.js uncomplete <task_id>`);
  }

  static list(options) {
    let result = Model.list(options)
    View.execute(result)
  }

  static add(options) {
    let result = Model.add(options)
    View.execute(result)

  }

  static findById(options) {
    let result = Model.findById(Number(options))
    View.execute(result)

  }

  static delete(options) {
    let result = Model.delete(Number(options))
    View.execute(result)
  }

  static complete(options) {
    let result = Model.complete(Number(options))
    View.execute(result)
  }

  static uncomplete(options) {
    let result = Model.uncomplete(Number(options))
    View.execute(result)
  }

  static completed(options) {
    let result = Model.completed(options)
    View.execute(result)
  }

  static tag(options) {
    let result = Model.tag(options)
    View.execute(result)
  }

  static filter(options) {
    let result = Model.filter(options)
    View.execute(result)
  }
}

module.exports = Controller