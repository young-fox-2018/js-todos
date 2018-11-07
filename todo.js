const argv = process.argv;
const command = argv[2];
const task = argv.slice(3)[0];

const Controller = require('./controllers/Controller.js');

Controller.execute(command, task);