const Controller = require('/Users/admin/Documents/Phase 1/Week 2/js-todos/controllers/Controller.js')
const argv = process.argv

let command = argv[2]
let option = argv.slice(3)

Controller.execute(command, option.join(' '))
