const argv = process.argv.slice(2)
// console.log(argv)
// const splitArgv = argv[0].split(":")

// const command = splitArgv[0]
// const command2 = splitArgv[1]
const option = argv.slice(1)
// console.log(option)
// console.log("//",command)
// console.log(",,,,",command2)
// console.log("???",option)

const Controller =  require("./Controllers/Controller.js")

Controller.execute(argv,option)
