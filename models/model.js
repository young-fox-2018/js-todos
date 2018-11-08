const fs = require("fs")
const databasePath = "/home/cascade/Documents/hacktiv8immersive/phase1reload/week2/day3/js-todos/database/data.json"

class Model {
    static readData() {
        let data = fs.readFileSync(databasePath, 'utf8')
        return JSON.parse(data)
    }
    static save(newData) {
        fs.writeFileSync(databasePath, newData)
    }
    static getList() {
        let data = Model.readData()
        data.forEach(element => {
            let check = ""
            if (element.check === false) {
                check = "[ ]"
            } else {
                check = "[x]"
            }
            console.log(check, element.task)
        });
        return ""
    }
    static showlistCreatedASC(input) {
        let data = Model.readData()
        let sortedData = data.sort()
        return Model.getList(sortedData)
    }
    static showlistCreatedDES(input) {
        let data = Model.readData()
        let sorted = []
        data.forEach(element => {
            if(element.check === true){
                sorted.push(element.check,element.task)
            }
        });
        return sorted
    }
    static showlistCompleteddASC(input) {
        let data = Model.readData()
        let sorted = []
        data.forEach(element => {
            if(element.check === true){
                sorted.push(element)
            }
        });
        sorted.forEach(element => {
            let check = ""
            if (element.check === false) {
                check = "[ ]"
            } else {
                check = "[x]"
            }
            console.log(check, element.task)
        });
        return 
    }
    static showlistCompletedDES(input) {
        let data = Model.readData()
        let sorted = []
        data.forEach(element => {
            if(element.check === true){
                sorted.push(element.check,element.task)
            }
        });
        return sorted
    }
    static addData(input) {
        let data = Model.readData()
        let obj = {
            date:new Date(),
            check: false,
            task: input
        }
        data.push(obj)
        fs.writeFileSync(databasePath, JSON.stringify(data, null, 2))
        return `${input} has been added`
    }
    static findID(input) {
        let data = Model.readData()
        return data[input]
    }
    static deleteID(input) {
        let data = Model.readData()
        let temp = data[input]
        data.splice(input - 1, 1)
        Model.save(JSON.stringify(data, null, 4))
        return JSON.stringify(temp)
    }
    static tagItComplete(input) {
        let data = Model.readData()
        data[input - 1].check = true
        Model.save(JSON.stringify(data, null, 4))
        return Model.getList()
    }
    static tagItIncomplete(input) {
        let data = Model.readData()
        data[input - 1].check = false
        Model.save(JSON.stringify(data, null, 4))
        return Model.getList()
    }

}

module.exports = Model