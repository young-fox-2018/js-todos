const argv = process.argv.slice(2)
const splitArgv = argv[0].split(":")

const command = splitArgv[0]
const command2 = splitArgv[1]
const option = argv[1]

const Controller =  require("./Controllers/Controller.js")

Controller.execute(command,option)
