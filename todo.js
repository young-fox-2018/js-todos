
const Controller = require('/Users/zhang/phase1/p1w2/js-todos/Controllers/Controller.js')
const argv = process.argv[2]

let argv2 = argv.split(':')
const task = process.argv.slice(3)

if (argv2[0] !== undefined && argv2[1] !== undefined){
  Controller.execute(argv2[1], task.join(' '))
} else {
  Controller.execute(argv2[0], task.join(' ') )
}
// console.log(argv2, task)