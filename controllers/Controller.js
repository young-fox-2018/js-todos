const Model = require('../models/Model')
const View = require('../views/View')

class Controller {
    static execute(command, option) {
        switch (command) {
            case 'help': Controller.help(); break;
            case 'list': Controller.list(); break;
            case 'add': Controller.add(option); break;
            case 'findById': Controller.findId(option); break;
            case 'delete': Controller.delete(option); break;
            case 'complete': Controller.complete(option); break;
            case 'uncomplete': Controller.uncomplete(option); break;
            case 'list:created': Controller.list_created(option); break;
            // case 'list:completed': Controller.list_completed(option); break;

            default: Controller.help(); break;
        }
    }

    static help() {
        View.help();
    }

    static list() {
        let data = Model.list();
        View.list(data);
    }

    static add(option) {
        let add = Model.add(option);
        View.print(add);
    }

    static findId(option) {
        let id = Model.findId(option);
        View.print(id)
    }

    static delete(option) {
        Model.delete(option);
        View.list(Model.list());
    }

    static complete(option) {
        Model.complete(option);
        View.list(Model.list());
    }

    static uncomplete(option) {
        Model.uncomplete(option);
        View.list(Model.list());
    }

    static list_created(option) {
        Model.list_created(option);
        View.list(Model.list());
    }

    // static list_completed(option) {
    //     var result = Model.list_completed(option);
    //     View.list(Model.list);
    // }
}

module.exports = Controller