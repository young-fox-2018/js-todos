const TaskObject = require("./TaskObject")
const fs = require("fs")

class Task {

    static readFile() {
        let readData = fs.readFileSync("./data.json")
        return readData
    }

    static save(input) {
        fs.writeFileSync("./data.json",JSON.stringify(input,null,2))
    }
    
    static addTask(input) {
        let index = JSON.parse(Task.readFile())
        let i = null
        if (index.length ===  0) i = 0
        else i = index[index.length-1].id
        let newTask = new TaskObject(i+1,input)
        index.push(newTask)
        Task.save(index)
    }

    static showList() {
        let data = JSON.parse(Task.readFile())
        return data
    }

    static findById(input){
        let readData = JSON.parse(Task.readFile())
        let result = readData.find(task => {
            return task.id === input
        })
        return `${result.id}. ${result.task}`
    }

    static deleteTask(input) {
        let readData = JSON.parse(Task.readFile())
        let result = null
        let index = readData.indexOf(readData.find(task => {
            return task.id === input
        }))
        result = readData[index].task
        readData.splice(index,1)
        Task.save(readData)
        return result
    }

    static completeTask(input) {
        let readData = JSON.parse(Task.readFile())
        let result = readData.find(task => {
            return task.id === input
        })
        result.mark = true
        result.completeTask = new Date()
        Task.save(readData)
    }

    static uncompleteTask(input) {
        let readData = JSON.parse(Task.readFile())
        let result = readData.find(task => {
            return task.id === input
        })
        result.mark = false
        Task.save(readData)
    }

    static addTag(id,tag){
        let readData = JSON.parse(Task.readFile())
        let result = readData.find(task => {
            return task.id === id
        })
        tag.forEach(item => {
            if (!result.tags.find(tag => {
                return tag === item
            })) result.tags.push(item)
        })
        Task.save(readData)
    }
    
}

module.exports = Task