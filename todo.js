
const args = process.argv;
const command = args[2];
const options = args.slice(3);

const Controller = require("./Controllers/Controller")

Controller.todos(command, options);
