const argv = process.argv.slice(2)
const Controller = require("./Controller/Controller")


let command = argv[0];
let option = argv.slice(1).join(" ");
let commandExt

if(command.match(/:/g)){
    command = command.split(":")
    commandExt = command[1];
    command = command[0]
}

switch (command) {
    case "list":
        Controller.list(commandExt, option)
        break;
    
    case "help":
        Controller.help()
        break;

    case "add":
        Controller.addTask(option)
        break;

    case "findById":
        Controller.findById(Number(option))
        break;

    case "delete":
        Controller.deleteById(Number(option))
        break;

    case "complete":
        Controller.complete(Number(option))
        break;

    case "uncomplete":
        Controller.uncomplete(Number(option))
        break;

    case "tag":
        Controller.tag(option)
        break;

    case "filter":
        Controller.filter(commandExt)
        break;

    default:
        Controller.help()
        break;
}



