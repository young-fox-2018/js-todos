// this is the main function (argv)



const Controller = require("./Controllers/todo_controller")
let argv = process.argv.slice(2)

const help = 
`
$ node todo.js # will call help
$ node todo.js help # menampilkan command apa saja yang tersedia
$ node todo.js list # Melihat daftar TODO
$ node todo.js add <task_content> # Menambahkan TODO ke dalam list
$ node todo.js findById <task_id> # Melihat detail TODO sesuai 'task_id' nya
$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya
$ node todo.js complete <task_id> # Menandai status TODO selesai
$ node todo.js uncomplete <task_id> # Menghapus TODO belum selesai
`
switch (argv[0]) {
    case ("help"): // done
        console.log(help)
        break;
    case ("list"): // done
        Controller.list()
        break;
    case ("add"): // done
        Controller.add(argv[1])
        break;
    case ("findById"): 
        Controller.findById(argv[1])
        break;   
    case ("delete"):
        Controller.delete(argv[1])
        break;
    case ("complete"):
        Controller.complete(argv[1])
        break;
    case ("uncomplete"):
        Controller.uncomplete(argv[1])
        break; 
    case ("list_sorted"):
        Controller.listSortedBy(argv[1], argv[2])
        break;
    case ("list_complete"):
        Controller.listCompleted("complete")
        break;
    case ("list_uncomplete"):
        Controller.listCompleted("uncomplete")
        break;
    case ("addtag"):
        Controller.addTag(argv[1], argv.slice(2))
        break
    case ("filter"):
        Controller.filter(argv[1])
        break
    default:
        break;
}