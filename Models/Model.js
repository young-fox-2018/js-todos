const fs = require('fs')

class Model {
    static readData(callback) {
        fs.readFile('./data.json', 'utf-8', (err, data) => {
            if (err) {
                throw (err, null)
            } else {
                callback(null, data)
            }
        })
    }
    static writeData(data, callback) {
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) throw callback(err)
            else callback("Data has been saved")
            // console.log(`Data has been saved!`)
        })
    }
    static list(callback) {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)

                list.forEach(element => {
                    if (element.status === true) {
                        console.log(`${element.id}. [x] ${element.name}`)
                    } else {
                        console.log(`${element.id}. [ ] ${element.name}`)
                    }
                })
            }
        })
    }
    static add(input, callback) {
        var listAll
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                listAll = JSON.parse(data)
                let lastId = listAll[listAll.length - 1].id
                let year = new Date().getFullYear(),
                    month = new Date().getMonth(),
                    date = new Date().getDate()
                let obj = {}
                obj.id = lastId + 1
                obj.name = input
                obj.status = false
                obj.createdAt = `${year}-${month+1}-${date}`
                listAll.push(obj)
                Model.writeData(listAll, (err) => {
                    callback(`Added ${input} to your TODO list...`)
                })

            }
        })
    }
    static findById(id, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw err
            } else {
                let list = JSON.parse(data)
                for (let i = 0; i < list.length; i++) {
                    if (list[i].id === Number(id)) {
                        callback(`${list[i].id}. ${list[i].name}`)
                    }
                }
            }
        })
    }
    static delete(id, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw err
            } else {
                let list = JSON.parse(data),
                    index = list.findIndex(idx => idx.id === Number(id))
                if (index === -1) {
                    callback(`List dengan id ${id} tidak ada di TODO...`)
                } else {
                    list.splice(index, 1)
                    Model.writeData(list)
                    callback(`Data dengan id: ${id} sudah dihapus!`)
                }
            }
        })
    }
    static complete(id, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw err
            } else {
                let list = JSON.parse(data),
                    index = list.findIndex(idx => idx.id === Number(id))
                if (index === -1) {
                    callback(`Data dengan id ${id} tidak ada di TODO...`)
                } else {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id === Number(id)) {
                            list[i].status = true
                        }
                    }
                    Model.writeData(list)
                    Model.list()
                }

            }
        })
    }
    static uncomplete(id, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw err
            } else {
                let list = JSON.parse(data),
                    index = list.findIndex(idx => idx.id === Number(id))
                if (index === -1) {
                    callback(`Data dengan id ${id} tidak ada di TODO...`)
                } else {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].id === Number(id)) {
                            list[i].status = false
                        }
                    }
                    Model.writeData(list)
                    Model.list()
                }

            }
        })
    }
    static listCreatedAsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(a.createdAt) - new Date(b.createdAt)
                })
                list.forEach(element => {
                    if (element.status === true) {
                        console.log(`${element.id}. [x] ${element.name}`)
                    } else {
                        console.log(`${element.id}. [ ] ${element.name}`)
                    }
                })
            }
        })
    }
    static listCreatedDsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                list.forEach(element => {
                    if (element.status === true) {
                        console.log(`${element.id}. [x] ${element.name}`)
                    } else {
                        console.log(`${element.id}. [ ] ${element.name}`)
                    }
                })
            }
        })
    }
    static listCompletedAsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(a.createdAt) - new Date(b.createdAt)
                })
                list.forEach(element => {
                    if (element.status === true) {
                        console.log(`${element.id}. [x] ${element.name}`)
                    }
                })
            }
        })
    }
    static listCompletedDsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                list.forEach(element => {
                    if (element.status === true) {
                        console.log(`${element.id}. [x] ${element.name}`)
                    }
                })
            }
        })
    }
    static listOutstandingAsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(a.createdAt) - new Date(b.createdAt)
                })
                list.forEach(element => {
                    if (element.status === false) {
                        console.log(`${element.id}. [ ] ${element.name}`)
                    }
                })
            }
        })
    }
    static listOutstandingDsc() {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                list.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt)
                })
                list.forEach(element => {
                    if (element.status === false) {
                        console.log(`${element.id}. [ ] ${element.name}`)
                    }
                })
            }
        })
    }
    static addTag(id, tag, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data),
                    index = list.findIndex(idx => idx.id === Number(id))
                for (let i = 0; i < tag.length; i++) {
                    list[index].tags.push(tag[i])
                }
                Model.writeData(list, (err) => {
                    callback(`Tagged task ${list[index].name} with task: ${tag.join(' ')}`)
                })
            }
        })
    }
    static filterTag(tag, callback) {
        Model.readData((err, data) => {
            if (err) {
                throw (err, null)
            } else {
                let list = JSON.parse(data)
                for (let i = 0; i < list.length; i++) {
                    if (list[i].tags.length >= 1) {
                        for (let j = 0; j < list[i].tags.length; j++) {
                            if (list[i].tags[j] === tag) {
                                callback(`${list[i].id}. ${list[i].name} [${list[i].tags}]`)
                            }
                        }
                    }

                }
            }
        })

    }
}

module.exports = Model