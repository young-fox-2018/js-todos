const argv = process.argv.slice(2)
const request = argv[1]
const inputs = argv.slice(2)
const Controller = require('./Controllers/Controller')

switch (argv[0]) {
    case "help":
        Controller.help()
        break;

    case "list":
        Controller.list()
        break;
    
    case "add":
        Controller.add(request)
        break;

    case "findById":
        Controller.findById(Number(request))
        break;

    case "delete":
        Controller.delete(Number(request))
        break;

    case "complete":
        Controller.complete(Number(request))
        break;

    case "uncomplete":
        Controller.uncomplete(Number(request))
        break;

    case "list:created":
        Controller.listCreated(request)
        break;
    
    case "list:completed":
        Controller.listCompleted(request)
        break;

    case "list:uncompleted":
        Controller.listUncompleted(request)
        break;

    case "tag":
        Controller.tag(Number(request), inputs)
        break;

    case "filter":
        Controller.filter(request)
        break;

    default:
        Controller.help()
        break;
}