const fs = require("fs")
const help = require("../helps/help")

class Model {
    constructor() {
    }
    static display(input) {
        let database = input
        return database
    }

    static generateDate() {
        let year = new Date().getFullYear()
        let month = new Date().getMonth()
        let day = new Date().getDate()
        return `${year} -${month} -${day} `
    }
    static help() {
        return help
    }
    static readFile() {
        return JSON.parse(fs.readFileSync("./database/data.json", "utf8"))

    }
    static save(data) {
        return fs.writeFileSync("./database/data.json", JSON.stringify(data))
    }
    static list() {
        let database = Model.readFile()
        let result = ""
        for (let i = 0; i < database.length; i++) {
            if (database[i].status === true) {
                result += `${database[i].id}. [X] ${database[i].task} \n`
            }
            else {
                result += `${database[i].id}. [ ] ${database[i].task} \n`
            }
        }
        return result
    }

    static add(data) {
        let newlist = ""
        for (let i = 0; i < data.length; i++) {
            newlist += data[i] + " "
        }

        let database = Model.readFile()
        let newId = 0
        if (database.length === 0) {
            newId = 1
        } else {
            newId = Number(database[database.length - 1].id) + 1
        }

        let obj = {
            id: newId,
            status: false,
            task: newlist,
            created_date: Model.generateDate(),
            completed_date: "0",
            tag: []

        }
        database.push(obj)
        Model.save(database)
        return `Add ${newlist} to your TODO list`
    }
    static findById(id) {
        let database = Model.readFile()
        for (let i = 0; i < database.length; i++) {
            if (database[i].id === Number(id))
                return database[i].task
        }
    }
    static delete(id) {
        let database = Model.readFile()
        let index = 0
        let todo = ""
        for (let i = 0; i < database.length; i++) {
            if (database[i].id === Number(id))
                index = Number(i)
            todo = database[i].task
        }
        database.splice(index, 1)
        Model.save(database)
        return `Delete ${todo} on your TODO list`
    }
    static complete(id) {
        let database = Model.readFile()
        let index = 0
        let todo = ""
        for (let i = 0; i < database.length; i++) {
            if (database[i].id === Number(id))
                index = Number(i)
            todo = database[i].task
        }
        database[index].complete_date = Model.generateDate()
        database[index].status = true
        Model.save(database)

        return `complete ${todo} on your TODO list`
    }
    static uncomplete(id) {
        let database = Model.readFile()
        let index = 0
        let todo = ""
        for (let i = 0; i < database.length; i++) {
            if (database[i].id === Number(id))
                index = Number(i)
            todo = database[i].task
        }

        database[index].status = false
        Model.save(database)
        return `uncomplete ${todo} on your TODO list`
    }
    static listCreated(sort) {
        let database = Model.readFile();

        if (sort === "asc") {
            database.sort(function (a, b) {
                let dateA = Number(a.created_date.split("-").join(""))
                let dateB = Number(b.created_date.split("-").join(""))
                return dateA - dateB
            });
            return Model.display(database)

        }
        else {
            database.sort(function (a, b) {
                let dateA = Number(a.created_date.split("-").join(""))
                let dateB = Number(b.created_date.split("-").join(""))
                return dateB - dateA
            });
            return Model.display(database)
        }

    }
    static completed_date(sort) {
        let database = Model.readFile();
        if (sort === "asc") {
            database.sort(function (a, b) {
                let dateA = Number(a.completed_date.split("-").join(""))
                let dateB = Number(b.completed_date.split("-").join(""))
                return dateA - dateB
            });
            return Model.display(database)

        }
        else {
            database.sort(function (a, b) {
                let dateA = Number(a.completed_date.split("-").join(""))
                let dateB = Number(b.completed_date.split("-").join(""))
                return dateB - dateA
            });
            return Model.display(database)
        }
    }
    static addTag(id, data) {
        let database = Model.readFile()
        let index = 0
        for (let k = 0; k < database.length; k++) {
            if (database[k].id === Number(id)) {
                index = k
            }
        }
        let isTrue = false
        for (let i = 0; i < database[index].tags.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (database[index].tags[i] === data[j]) {
                    isTrue = true
                }

            }
        }

        if (isTrue === false) {
            for (let l = 0; l < data.length; l++) {
                database[index].tags.push(data[l])
            }
            Model.save(database)
            return `completed add your Tag ${data} `
        }
        else {
            return `your data on database`
        }

    }
    static filter(data) {
        let database = Model.readFile()
        let isTrue = ""
        for (let i = 0; i < database.length; i++) {
            for (let j = 0; j < database[i].tags.length; j++) {
                if (data === database[i].tags[j]) {
                    isTrue = `${database[i].id}. ${database[i].status} ${database[i].task} [${database[i].tags}]`
                }
            }
        }
        return isTrue
    }

}

module.exports = Model