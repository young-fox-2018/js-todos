const fs= require('fs')
const Controller = require('E:/Bootcamp/phase1/week2/wednesday/js-todos/controllers/Controller.js')

let command = process.argv.slice(2)
Controller.start(command)

