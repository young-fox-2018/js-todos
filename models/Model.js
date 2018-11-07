"use strict"

const fs = require('fs')
const jsonLocation = '/Users/hacktiv8/Desktop/robert/robert/js-todos/data.json'

class Model {
    static readDataFromJSON() {
        let data = fs.readFileSync(jsonLocation, 'utf8')
        data = JSON.parse(data)

        return data
    }

    static getSortedList(command, options, message) {
        let jsonData = Model.readDataFromJSON()

        if (options === 'desc' || options === '') {
            for (let i = 0; i < jsonData.length; i++) {
                let temp = null

                for (let j = i + 1; j < jsonData.length; j++) {
                    if (jsonData[j].created > jsonData[i].created) {
                        temp = jsonData[i]
                        jsonData[i] = jsonData[j]
                        jsonData[j] = temp
                    }
                }
            }
        } else if (options === 'asc') {
            console.log('asdad')
            for (let i = 0; i < jsonData.length; i++) {
                let temp = null

                for (let j = i + 1; j < jsonData.length; j++) {
                    if (jsonData[j].created < jsonData[i].created) {
                        temp = jsonData[i]
                        jsonData[i] = jsonData[j]
                        jsonData[j] = temp
                    }
                }
            }
        } else if (command === 'list:completed') {
            let result = []

            for (let i = 0; i < jsonData.length; i++) {
                if (jsonData[i].status) {
                    result.push(jsonData[i])
                }
            }
         
            for (let i = 0; i < result.length; i++) {
                for (let j = i + 1; j < result.length; j++) {
                    if (result[j].updateTime < result[i].updateTime) {
                        temp = result[i]
                        result[i] = result[j]
                        result[j] = temp
                    }
                }
            }

            jsonData = result
        }

        return jsonData
    }

    static addToJSONFile(jsonData) {
        jsonData = JSON.stringify(jsonData)
        fs.writeFileSync(jsonLocation, jsonData)
    }

    static addDataToJSON(data) {
        let jsonData = Model.readDataFromJSON()

        let dataToAdd = {
            task : data,
            status : "[ ]",
            created : new Date()
        }

        jsonData.push(dataToAdd)

        Model.addToJSONFile(jsonData)

        return data
    }

    static  findById(options) {
        let data = Model.readDataFromJSON()
        let result = null

        options = Number(options)

        for (let i = 0 ; i < data.length; i++) {
            if ( i + 1 === options) {
                result =  `${options}. ${data[i + 1].task}`
                break
            }
        }

        return result
    }

    static update(command, options, message) {
        let data = Model.readDataFromJSON()
        options = Number(options)

        if (command === 'complete') {
            for (let i = 0 ; i < data.length; i++) {
                if ( i + 1 === options) {
                    data[i].status = true
                    data[i].updateTime = new Date()
                    break
                }
            } 
        } else if (command === 'uncomplete') {
            for (let i = 0 ; i < data.length; i++) {
                if ( i + 1 === options) {
                    data[i].status = false
                    data[i].updateTime = new Date()
                    break
                }
            }
        } else if (command === 'tag') {
            console.log(message, "ASAS")
            for (let i = 0 ; i < data.length; i++) {
                if ( i + 1 === options) {
                    data[i].tag = message
                    data[i].updateTime = new Date()
                    break
                }
            }
            
        }

        Model.addToJSONFile(data)

        return data
    }

    static delete(options) {
        let data = Model.readDataFromJSON()
        let deletedData = ""

        options = Number(options)

        for (let i = 0 ; i < data.length; i++) {
            if ( i + 1 === options) {
                console.log('masuk ga')
                deletedData = data[i].task
                data.splice(i, 1)
                break
            }
        }

        Model.addToJSONFile(data)

        return deletedData
    }
}

module.exports = Model