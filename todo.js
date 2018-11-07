"use strict"

const Controller = require('./controllers/Controller')
const argv = process.argv.slice(2)

let command = argv[0].split(':')[0]
let sorter = argv[0].split(':')[1]
let options = argv.slice(1)

Controller.run(command, sorter, options)
