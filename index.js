const argv = process.argv
const Controller = require("./controllers/controller")
console.log("** ================= **");
switch (argv[2]) {
    case "help":
        Controller.help()
        break;
    case "list":
        Controller.list(argv[3])
        break;
    case "add":
        let data = argv.slice(3)
        Controller.add(data)
        break;
    case "findById":
        Controller.find(argv[3])
        break;
    case "delete":
        Controller.delete(argv[3])
        break;
    case "complete":
        Controller.complete(argv[3])
        break;
    case "uncomplete":
        Controller.uncomplete(argv[3])
        break;
    case "list:created":
        Controller.listCreated(argv[3])
        break;
    case "list:completed":
        Controller.listCreated(argv[3])
        break;
    case "tag":
        let tags = argv.slice(4)
        Controller.addTag(argv[3], tags)
        break;
    case "filter":
        Controller.filter(argv[3])
        break;
    case "t":




}
