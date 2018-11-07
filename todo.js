const TodoController = require('./controller/controller')
const input = process.argv


switch (input[2]) {
    case 'help':
        TodoController.help()
        break;
    case 'list':
        TodoController.list()
        break;
    case 'add':
        let dataIn = input.slice(3)
        TodoController.add(dataIn)
        break;
    case 'findById':
        TodoController.findById(input[3])
        break;
    case 'delete':
        TodoController.delete(input[3])
        break;
    case 'complete':
        TodoController.complete(input[3])
        break;
    case 'uncomplete':
        TodoController.uncomplete(input[3])
        break;
    case 'list:created':
        switch (input[3]) {
            case 'desc':
                TodoController.sort(null, 'desc')
                break;
            default:
                TodoController.sort(null, 'asc')
                break;
        }
        break;
    case 'list:completed':
        switch (input[3]) {
            case 'desc':
                TodoController.sort('completed','desc')
                break;
            default:
                TodoController.sort('completed','asc')
                break;
        }
        break;
    default:
        TodoController.help()
        break;
}