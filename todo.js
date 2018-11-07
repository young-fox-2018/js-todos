"use strict"

const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

let command = argv[0]
let options = argv[1]
let tagMessage = argv[2]

Controller.inputCommand(command, options, tagMessage)
