const input = process.argv.slice(2)
const HelpController = require("./controllers/HelpController")
const TaskController = require("./controllers/TaskController")

switch (input[0]) {
    case 'help':
        HelpController.help()
        break;
    case 'list':
        TaskController.showList()
        break;
    case 'add':
        TaskController.addTask(input.slice(1).join(' '))
        break;
    case 'findById':
        TaskController.findById(Number(input[1]))
        break;
    case 'delete':
        TaskController.deleteTask(Number(input[1]))
        break;
    case 'complete':
        TaskController.completeTask(Number(input[1]))
        break;
    case 'uncomplete':
        TaskController.uncompleteTask(Number(input[1]))
        break;
    case 'list:created':
        TaskController.showListCreated(input[1])
        break;
    case 'list:outstanding':
        TaskController.showListOutstanding(input[1])
        break;
    case 'list:completed' :
        TaskController.showListCompleted(input[1])
        break;
    case 'tag':
        TaskController.addTag(Number(input[1]),input.slice(2))
    case 'filter':
        TaskController.filterByTag(input[1])
    default:
        break;
}
