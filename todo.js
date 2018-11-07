const input = process.argv.slice(2)
const Controller = require('./Controllers/TodoController')

// console.log('Helooo')

switch (input[0]) {
    case 'help':
        Controller.help()
        break
    case 'list':
        Controller.list()
        break
    case 'add':
        Controller.add(input.slice(1).join(' '))
        break
    case 'findById':
        Controller.findById(input[1])
        break
    case 'delete':
        Controller.delete(input[1])
        break
    case 'complete':
        Controller.complete(input[1])
        break
    case 'uncomplete':
        Controller.uncomplete(input[1])
        break
    case 'list:created':
        switch (input[1]) {
            case 'asc':
                Controller.listCreatedAsc(input[1])
                break
            case 'desc':
                Controller.listCreatedDsc(input[1])
                break

        }
    case 'list:completed':
        switch (input[1]) {
            case 'asc':
                Controller.listCompletedAsc(input[1])
                break
            case 'desc':
                Controller.listCompletedDsc(input[1])
                break
        }
    case 'list:outstanding':
        switch (input[1]) {
            case 'asc':
                Controller.listOutstandingAsc(input[1])
                break
            case 'desc':
                Controller.listOutstandingDsc(input[1])
                break
        }
    case 'add:tag':
        // Controller.addTag(input[1], input.slice(2))
        break
    case 'filter:':
        // Controller.filterTag(input[1])
        break
}