"use strict"

const Controller = require('./controllers/controllerTodo')
const argv = process.argv

switch (argv[2]) {
    case 'help':
        Controller.help()
        break

    case 'list':
        Controller.list()
        break
    
    case 'list:created':
        switch (argv[3]) {
            case 'asc':
                Controller.listCreatedAsc()
                break
            
            case 'desc':
                Controller.listCreatedDesc()
                break
        }
        break
    
    case 'list:completed':
        switch (argv[3]) {
            case 'asc':
                Controller.listCompletedAsc()
                break
            
            case 'desc':
                Controller.listCompletedDesc()
                break
        }
        break

    case 'list:outstanding':
        switch (argv[3]) {
            case 'asc':
                Controller.listOutstandingAsc()
                break
            
            case 'desc':
                Controller.listOutstandingDesc()
                break
        }    
        break
    
    case 'tag':
        Controller.addTag(argv[3], argv.slice(4))
        break

    case 'filter':
        Controller.filterTag(argv[3])
        break

    case 'add':
        Controller.addTask(argv.slice(3).join(' '))
        break

    case 'findById':
        Controller.findTaskById(argv[3])
        break

    case 'delete':
        Controller.deleteTask(argv[3])
        break

    case 'complete':
        Controller.completeTask(argv[3])
        break

    case 'uncomplete':
        Controller.uncompleteTask(argv[3])
        break

    default:
        Controller.help()
        break
}