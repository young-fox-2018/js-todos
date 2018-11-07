const argv = process.argv.slice(2)
const option = argv.slice(1)

const Controller =  require("./Controllers/Controller.js")

Controller.execute(argv,option)
