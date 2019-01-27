const argv = process.argv
const Controller = require("./Controllers/Controller.js")

const cmd = argv[2].split(":")
const task_id = argv.slice(3)

Controller.execute(cmd, task_id)