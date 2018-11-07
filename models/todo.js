"use strict"

const fs = require('fs')
const Task = require('./task')

class Model {
    static readData(path) {
        return fs.readFileSync(path, 'utf8')
    }

    static writeData(path, newFile) {
        return fs.writeFileSync(path, newFile)
    }

    static help() {
        let data = JSON.parse(Model.readData('./commandList.json'))
        let list = ''
        for (let i = 0; i < data.length; i++) {
            if (i == data[data.length - 1]) {
                list += `${data[i].command}`
            }
            else {
                list += `${data[i].command} \n`
            }
        }
        return list
    }

    static list() {
        let data = JSON.parse(Model.readData('./data.json'))
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == false) {
                todo += `${i + 1}. [ ] ${data[i].task} \n`
            }
            else {
                todo += `${i + 1}. [X] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listCreatedAsc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == false) {
                todo += `${i + 1}. [ ] ${data[i].task} \n`
            }
            else {
                todo += `${i + 1}. [X] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listCreatedDesc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == false) {
                todo += `${i + 1}. [ ] ${data[i].task} \n`
            }
            else {
                todo += `${i + 1}. [X] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listCompletedAsc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(a.completedAt) - new Date(b.completedAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == true) {
                todo += `${i + 1}. [X] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listCompletedDesc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(b.completedAt) - new Date(a.completedAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == true) {
                todo += `${i + 1}. [X] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listOutstandingAsc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == false) {
                todo += `${i + 1}. [ ] ${data[i].task} \n`
            }
        }
        return todo
    }

    static listOutstandingDesc() {
        let data = JSON.parse(Model.readData('./data.json'))
        data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        let todo = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == false) {
                todo += `${i + 1}. [ ] ${data[i].task} \n`
            }
        }
        return todo
    }

    static addTag(id, input) {
        let data = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < data.length; i++) {
            if (i + 1 == id) {
                if (data[i].tags.length === 0) {
                    data[i].tags = input
                    result = `Tagged task ${data[i].task} with tags: ${input}`
                }
                else {
                    for (let j = 0; j < input.length; j++) {
                        let tag = data[i].tags.filter(function (val) {
                            return val.toLowerCase() === input[j].toLowerCase()
                        })
                        if (tag.length == 0) {
                            result = `Tagged task ${data[i].task} with tags: ${input}`
                            data[i].tags.push(input[j])
                        }
                        else {
                            result += `Tag ${input[j]} already exist in task ${data[i].task} \n`
                        }                      
                    }
                }
            }
        }
        Model.writeData('./data.json', JSON.stringify(data, null, 2))
        return result
    }

    static filterTag(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tags.length; j++) {
                if (input === data[i].tags[j]) {
                    return `${data[i].task} [${data[i].tags}]`
                }             
            }
        }
        return `Tag does not exist`
    }

    static addTask(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        let newTask = new Task(input)
        data.push(newTask)
        Model.writeData('./data.json', JSON.stringify(data, null, 2))
    }

    static findTaskById(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < data.length; i++) {
            if (i + 1 == input) {
                if (data[i].status == false) {
                    result += `${i + 1}. [ ] ${data[i].task}`
                }
                else {
                    result += `${i + 1}. [X] ${data[i].task}`
                }
            }
        }
        return result
    }

    static deleteTask(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        data.splice(input - 1, 1)
        Model.writeData('./data.json', JSON.stringify(data, null, 2))
    }

    static completeTask(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        for (let i = 0; i < data.length; i++) {
            if (i + 1 == input) {
                data[i].status = true
                data[i].completedAt = new Date()
            }
        }
        Model.writeData('./data.json', JSON.stringify(data, null, 2))
        return Model.list()
    }

    static uncompleteTask(input) {
        let data = JSON.parse(Model.readData('./data.json'))
        for (let i = 0; i < data.length; i++) {
            if (i + 1 == input) {
                data[i].status = false
                data[i].completedAt = "null"
            }
        }
        Model.writeData('./data.json', JSON.stringify(data, null, 2))
        return Model.list()
    }
}

module.exports = Model
