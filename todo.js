const Controller = require('./controllers/Controller.js')

const argv = process.argv.slice(2)
let command = argv[0]
let option = argv[1]
let sortType = undefined

if (argv != undefined) {
    if (argv[0] != undefined && argv[0].match(':')) {
        sort = argv[0].split(':')
        command = sort[0]
        option = sort[1]
        sortType = argv[1]
        Controller.execute(command, option, sortType)

    } else if (argv[0] != undefined && !argv[0].match(':') && command != "tag") {

        Controller.execute(command, option, sortType)
    } else if (argv[0] != undefined && !argv[0].match(':') && command == "tag") {
        command = argv[0]
        option = argv[1]
        tag = argv.slice(2)
        
        Controller.execute(command, option, tag)
        
        
    }


} else {
    Controller.execute(command, option, sortType)
}








