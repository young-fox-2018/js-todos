const Controller = require('./Controllers/Controller.js');

let argv = process.argv.slice(2)

let command = argv[0]
let options = argv.slice(1)

if (command.match("filter:")) {
  let commandfilter = command.split(":")
  command = commandfilter[0]
  options = commandfilter[1]
}

Controller.execute(command, options)
