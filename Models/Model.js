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
            result += `${dataBase[i].id}. ${dataBase[i].checkBox} ${dataBase[i].task} \n`
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
                if (dataBase[i].status) {
                    dataBase[i].checkBox = '[X]'
                }
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
                if (!dataBase[i].status) {
                    dataBase[i].checkBox = '[ ]'
                }
            }
        }
        Model.writeData('./data.json', JSON.stringify(dataBase, null, 4))
        return Model.list()
    }

}



module.exports = Model