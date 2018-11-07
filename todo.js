const Controller = require('./Controllers/Controller')
const argv = process.argv

switch (argv[2]) {
    case 'help':
        Controller.help()
        break;
    case 'list':
        Controller.list()
        break;
    case 'add':
        Controller.add(argv.slice(3).join(' '))
        break;
    case 'findById':
        Controller.findById(argv[3])
        break;
    case 'delete':
        Controller.delete(argv[3])
        break;
    case 'complete':
        Controller.complete(argv[3])
        break;
    case 'uncomplete':
        Controller.uncomplete(argv[3])
        break;
}
