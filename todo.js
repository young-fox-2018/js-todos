const fs = require("fs")
const argv = process.argv
const Controllers = require("./controllers/controller")

switch (argv[2]) {
    case undefined:
        Controllers.callHelp()
        break;
    case 'help':
        Controllers.callHelp()
        break;
    case 'list':
        Controllers.showList()
        break;
    case 'list:created':
        if (argv[3] === "asc") {
            Controllers.showListCreatedASC(argv[3])
        } else {
            Controllers.showListCreatedDES(argv[3])
        }
        break;
    case 'list:completed':
        if (argv[3] === "asc") {
            Controllers.showListCompletedASC(argv[3])
        } else {
            Controllers.showListCompletedDES(argv[3])
        }
        break;
    case 'add':
        Controllers.addData(argv.slice(3).join(" "))
        break;
    case 'findByID':
        Controllers.findID(argv[3])
        break;
    case 'delete':
        Controllers.deleteID(argv[3])
        break;
    case 'complete':
        Controllers.tagItComplete(argv[3])
        break;
    case 'uncomplete':
        Controllers.tagItIncomplete(argv[3])
        break;
    default:
        console.log(`
Please input the right command!
here is the list of commands you can use:
------------------------------------
$ node todo.js 
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_contect>
$ node todo.js findByID <task_id>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
`)
        break;
}