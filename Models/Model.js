const fs = require('fs')
const Task = require('./Task')

class Model {
    static readData(file) {
        let data = fs.readFileSync(file, 'utf8')
        return data
    }
    static writeData(file, saved) {
        let data = fs.writeFileSync(file, saved)
        return data
    }
    static help() {
        let list = Model.readData('./command.txt')
        return list
    }
    static addCommand(input) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let addTask = new Task(dataBase.length + 1, input)

        dataBase.push(addTask)
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
    }
    static list() {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < dataBase.length; i++) {
            if (dataBase[i].status) {
                result += `${dataBase[i].id}. [X] ${dataBase[i].task} \n`
            } else {
                result += `${dataBase[i].id}. [ ] ${dataBase[i].task} \n`
            }

        }
        return result
    }
    static findById(id) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < dataBase.length; i++) {
            if (Number(id) === dataBase[i].id) {
                result += `${dataBase[i].id}. ${dataBase[i].task}`
            }
        }
        return result
    }
    static delete(id) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < dataBase.length; i++) {
            if (Number(id) === dataBase[i].id) {
                result += `${dataBase[i].task}`
                dataBase.splice(i, 1)
            }
        }
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
        return result
    }
    static complete(id) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        for (let i = 0; i < dataBase.length; i++) {
            if (Number(id) === dataBase[i].id) {
                dataBase[i].status = true
                dataBase[i].updatedAt = new Date()
            }
        }
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
        return Model.list()
    }
    static uncomplete(id) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        for (let i = 0; i < dataBase.length; i++) {
            if (Number(id) === dataBase[i].id) {
                dataBase[i].status = false
            }
        }
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
        return Model.list()
    }
    static createdList(input) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        if (input === 'desc') {
            dataBase.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt)
            })
            let result = ''
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].status) {
                    result += `${dataBase[i].id}. [X] ${dataBase[i].task} \n`
                } else {
                    result += `${dataBase[i].id}. [ ] ${dataBase[i].task} \n`
                }

            }
            return result

        } else if (input === 'asc') {
            dataBase.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt)
            })
            let result = ''
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].status) {
                    result += `${dataBase[i].id}. [X] ${dataBase[i].task} \n`
                } else {
                    result += `${dataBase[i].id}. [ ] ${dataBase[i].task} \n`
                }
            }
            return result
        }
    }
    static completedList(input) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        if (input === 'desc') {
            dataBase.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt)
            })
            let result = ''
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].status) {
                    result += `${i + 1}. [X] ${dataBase[i].task} \n`
                }
            }
            return result

        } else if (input === 'asc') {
            dataBase.sort(function (a, b) {
                return new Date(a.createdAt) - new Date(b.createdAt)
            })
            let result = ''
            for (let i = 0; i < dataBase.length; i++) {
                if (dataBase[i].status) {
                    result += `${i - 1}. [X] ${dataBase[i].task} \n`
                }
            }
            return result
        }
    }
    static addTags(id, input) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let result = ''
        let condition = false
        for (let i = 0; i < dataBase.length; i++) {
            if (Number(id) === dataBase[i].id) {
                if (!dataBase[i].tags.length) {
                    dataBase[i].tags.push(input)
                    result = `Tagged task with ${dataBase[i].task} with tags:${input}`
                } else {
                    for (let j = 0; j < dataBase[i].tags.length; j++) {
                        if (dataBase[i].tags[j] === input) {
                            result = `Tag name already exists`
                            condition = true
                        } else {
                            dataBase[i].tags.push(input)
                            result = `Tagged task with ${dataBase[i].task} with tags:${input}`
                        }
                    }
                }

            }
        }
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
        return result
    }
    static filterTags(input) {
        let dataBase = JSON.parse(Model.readData('./data.json'))
        let result = ''
        for (let i = 0; i < dataBase.length; i++) {
            for (let j = 0; j < dataBase[i].tags.length; j++) {
                if (input === dataBase[i].tags[j]) {
                    result = `${dataBase[i].id}. ${dataBase[i].task} tags: [${dataBase[i].tags}]`
                }
            }
        }
        return result
    }
}

//}



module.exports = Model