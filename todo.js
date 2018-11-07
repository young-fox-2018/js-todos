const Controller = require('./controllers/Controller.js')
const argv = process.argv

const command = argv[2]
const option = argv.slice(3)

Controller.execute(command, option)

