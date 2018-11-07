"use strict"

const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

let command = argv[0]
let extraCommand = ""
let options = argv[1]
let tagMessage = argv[2]

if (command.includes(':')) {
    command = command.split(':')
    extraCommand = command[1]
    command = command[0]
} 

Controller.inputCommand(command, extraCommand, options, tagMessage)
