
const Controller = require('/Users/zhang/phase1/p1w2/js-todos/Controllers/Controller.js')
const argv = process.argv[2]
const task = process.argv.slice(3)
// console.log(argv, task)
Controller.execute(String(argv), task.join(' ') )