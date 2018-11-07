"use strict"

const fs = require('fs')
const jsonLocation = './data.json'

class Model {
    static readDataFromJSON() {
        let data = fs.readFileSync(jsonLocation, 'utf8')
        data = JSON.parse(data)

        return data
    }

    static getSortedList(command, extraCommand, options, objectToSort) {
        let jsonData = Model.readDataFromJSON()
       
        if (command === 'filter' && options === 'asc') {
            console.log('ADASDAD')
            for (let i = 0; i < objectToSort.length; i++) {
                for (let j = i + 1; j < objectToSort.length; j++) {
                    if (objectToSort[j].updateTime < objectToSort[i].updateTime) {
                        temp = objectToSort[i]
                        objectToSort[i] = objectToSort[j]
                        objectToSortsult[j] = temp
                    }
                }
            }
            
            jsonData = objectToSort
        } else if (objectToSort != null && command === 'filter' && options === 'desc') {
            let result = []
    
            for (let i = 0; i < objectToSort.length; i++) {
                for (let j = i + 1; j < objectToSort.length; j++) {
                    if (objectToSort[j].updateTime < objectToSort[i].updateTime) {
                        temp = objectToSort[i]
                        objectToSort[i] = objectToSort[j]
                        objectToSort[j] = temp
                    }
                }
            }

            jsonData = objectToSort
        }else if (options === 'desc' || options === '') {
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
        } else if (extraCommand === 'completed') {
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
        jsonData = JSON.stringify(jsonData,null,4)
        fs.writeFileSync(jsonLocation, jsonData)
    }

    static addDataToJSON(data) {
        let jsonData = Model.readDataFromJSON()

        let dataToAdd = {
            task : data,
            status : false,
            updatedTime : "",
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
        let tagUser = null

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
            for (let i = 0 ; i < data.length; i++) {
                if ( i + 1 === options) {
                    if (data[i].tag == null) {
                        data[i].tag = [message]
                    } else {
                        if (!data[i].tag.includes(message)) {
                            data[i].tag.push(message)
                        }
                    }

                    data[i].updateTime = new Date()
                    tagUser = data[i]
                    break
                }
            }     
        }

        Model.addToJSONFile(data)

        if (tagUser != null) {
            return tagUser
        } else {
            return data
        }
    }

    static delete(options) {
        let data = Model.readDataFromJSON()
        let deletedData = ""

        options = Number(options)

        for (let i = 0 ; i < data.length; i++) {
            if ( i + 1 === options) {
                deletedData = data[i].task
                data.splice(i, 1)
                break
            }
        }

        Model.addToJSONFile(data)

        return deletedData
    }

    static filter(command, extraCommand, options, objectToSort) {
        let data = Model.readDataFromJSON()
        let result = []
        
        for (let i = 0 ; i < data.length; i++) {
            if (data[i].tag != null) {
                for (let j = 0 ; j < data[i].tag.length; j++) {
                    if (data[i].tag[j] === extraCommand) {
                        result.push(data[i])
                    }
                } 
            }
        } 
     
        result = Model.getSortedList(command, '', options, result)

        return result
    }
}

module.exports = Model