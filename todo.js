const Controler = require("./Controlers/Controler")
const argv = process.argv[2]
let argv2 = argv.split(':')
const task = process.argv.slice(3)

if (argv2.length === 2){
    Controler.Execute(String(argv[1]),task.join(" "),)

}else(
    
    Controler.Execute(String(argv),task.join(" "))
)
