"use strict"
const fs = require('fs')

class Model {
    static getData () {
        let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
        return data
    }

    static getList (command, options) {
        let data = Model.getData()
        for ( let i = 0; i < data.length; i++ ) {
            data[i].created_date = new Date(data[i].created_date)
        }
        
        if ( command === 'completed') {
            data = data.filter(function(word){
                return word.completed == true;
            })
            if ( options[0] === 'asc' ) {
                data = data.sort(function(a, b) {
                    let dateA = a.updated_date, dateB = b.updated_date;
                    return dateA > dateB;
                });
            } else if ( options[0] === 'desc' )  {
                data = data.sort(function(a, b) {
                    let dateA = a.updated_date, dateB = b.updated_date;
                    return dateA < dateB;
                });
            }
        } else if ( command === 'uncompleted' ) {
            data = data.filter(function(word){
                return word.completed == false;
            })
            if ( options[0] === 'asc' ) {
                data = data.sort(function(a, b) {
                    let dateA = a.updated_date, dateB = b.updated_date;
                    return dateA > dateB;
                });
            } else if ( options[0] === 'desc' )  {
                data = data.sort(function(a, b) {
                    let dateA = a.updated_date, dateB = b.updated_date;
                    return dateA < dateB;
                });
            }
        } else {
            if ( options[0] === 'asc' || options[0] === undefined ) {
                data = data.sort(function(a, b) {
                    let dateA = a[command], dateB = b[command];
                    return dateA > dateB;
                });
            } else if ( options[0] === 'desc' ) {
                data = data.sort(function(a, b) {
                        let dateA = a[command], dateB = b[command];
                        return dateA < dateB;
                    });
            }
        }

        
        
        return data
    }

    static writeData (data) {
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8')
    }

    static addData (options) {
        let data = Model.getData()
        let lastData = data[data.length-1]
        let counterId = (data.length === 0) ? 1 : lastData.id + 1

        for ( let index in options) {
            data.push({
                id : counterId,
                task: options[index],
                completed: false,
                tags: [],
                created_date: new Date(),
                updated_date: new Date()
            })
            counterId += 1
        }

        Model.writeData(data)
        return options
    }

    static findById (options) {
        let data = Model.getData()
        let result = []
    
        for ( let i in data ) {
            if ( options.indexOf(data[i].id.toString()) !== -1 ) {
                result.push(data[i])
            }
        }

       return result
    }

    static deleteData (options) {
        let data = Model.getData()
        let temp = []
        let deleted = []
        let counter = 1
        
        for ( let i in data ) {
            if (options.indexOf(data[i].id.toString()) == -1) {
                temp.push(JSON.parse(JSON.stringify(data[i])))
            } else {
                deleted.push(JSON.parse(JSON.stringify(data[i])))
            }
        }

        Model.writeData(temp)
        return deleted
    }

    static completeData(options) {
        let data = Model.getData()

        for ( let i in data ) {
            if ( options.indexOf(data[i].id.toString()) !== -1 ) {
                data[i].completed = true
                data[i].updated_date = new Date()
            }
        }
        Model.writeData(data)
        return data
    }

    static uncompleteData(options) {
        let data = Model.getData()

        for ( let i in data ) {
            if ( options.indexOf(data[i].id.toString()) !== -1 ) {
                data[i].completed = false
                data[i].updated_date = new Date()
            }
        }
        Model.writeData(data)
        return data
    }

    static tag (options) {
        let data = Model.getData()
        let target = options[0]
        let listTag = options.slice(1)
        let temp = []

        listTag = listTag.filter(function(item, pos) {
            return listTag.indexOf(item) == pos;
        })


        for ( let i = 0; i < data.length; i++ ) {
            if ( data[i].id == target ) {
                data[i].tags = listTag
                data[i].updated_date = new Date()
                temp.push(data[i])
            }
        }
        Model.writeData(data)

        return temp
    }

    static filterTag (sorter) {
        let data = Model.getData()
        let temp = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].tags.indexOf(sorter) !== -1 ) {
                temp.push(data[i])
            }
        }
        
        return temp
    } 
}

module.exports = Model