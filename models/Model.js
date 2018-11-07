const fs = require('fs')
const databasePath = '/home/atrastudhi/Desktop/phase1/week2/wednesday/js-todos/data.json'
class Model {

    static getData(option) {
        let data = fs.readFileSync(databasePath, 'utf8')
        data = JSON.parse(data)
        
        if(option === undefined || option.field !== 'complete') {
            return data
        } else {
            let complete = []

            for(let i = 0; i < data.length; i++) {
                if(data[i].status === true) {
                    complete.push(data[i])
                }
            }

            return complete
        }   
    }

    static writeFile(data) {
        fs.writeFileSync(databasePath, data, 'utf8')
    }

    static add(data) {
        let listData = Model.getData()
        let newData = {
            'id': listData.length + 1,
            'task': data[0],
            'status': false,
            'createDate': new Date()
        }
        listData.push(newData)

        let strData = JSON.stringify(listData, null, 2)
        Model.writeFile(strData)

        return `added ${data} to your TODO list`
    }
    
    static findById(data) {
        let listData = Model.getData()
        let result = null
        for(let i = 0; i < listData.length; i++) {
            if(Number(listData[i].id) === Number(data)) {
                result = listData[i]
            }
        }

        if (result) {
            return [result]
        } else {
            return null
        }
    }

    static delete(option) {
        let result = []
        let listData = Model.getData()
        let counter = 1
        let temp = {}

        for(let i = 0; i < listData.length; i++) {
            if(Number(listData[i].id) !== Number(option[0])) {
                listData[i].id = counter
                result.push(listData[i])
                counter += 1
            } else {
                temp = listData[i]
            }
        }

        let strData = JSON.stringify(result, null, 2)
        Model.writeFile(strData)
        if(result.length !== listData.length) {
            return `deleted ${temp.task} from your TODO list`
        } else {
            return `Id tidak ditemukan`
        }
    }

    static complete(option) {
        let listData = Model.getData()
        listData[Number(option)-1].status = true
        listData[Number(option)-1].updateDate = new Date()

        let strData = JSON.stringify(listData, null, 2)
        Model.writeFile(strData)
        return listData
    }

    static uncomplete(option) {
        let listData = Model.getData()
        listData[Number(option)-1].status = false
        listData[Number(option)-1].updateDate = new Date()

        let strData = JSON.stringify(listData, null, 2)
        Model.writeFile(strData)
        return listData
    }

    static listSorted(option) {
        let listData = this.getData(option)
        
        if(option.field === 'createdAt') {
            if(option.option[0] === 'asc') {
                listData = listData.sort(function(a, b){return a.createDate < b.createDate})
            } else if(option.option[0] === 'desc') {
                listData = listData.sort(function(a, b){return a.createDate > b.createDate})
            }
        } else if(option.field === 'complete') {
            if(option.option[0] === 'asc') {
                listData = listData.sort(function(a, b){return a.updateDate < b.updateDate})
            } else if(option.option[0] === 'desc') {
                listData = listData.sort(function(a, b){return a.updateDate > b.updateDate})
            }
        }
        
        let counter = 1
        for(let i = 0; i < listData.length; i++) {
            listData[i].id = counter
            counter += 1
        }

        return listData
    }

    static addTag(option) {
        let list = Model.getData()
        let id = option[0]
        let tag = option.slice(1)

        if(list[Number(id)-1].tag === undefined) {
            list[Number(id)-1].tag = tag
        } else {
            for(let i = 0; i < tag.length; i++) {
                list[Number(id)-1].tag.push(tag[i])
            }
        }
        
        let strList = JSON.stringify(list, null, 2)
        Model.writeFile(strList)
        return `tanged task "${list[Number(id)-1].task}" with tags: ${String(tag)}`
    }

    static filter(option) {
        let list = Model.getData()
        let filterList = [] 
        
        for(let i = 0; i < list.length; i++) {
            if(list[i].tag !== undefined) {
                for(let j = 0; j < list[i].tag.length; j++) {
                    if(list[i].tag[j] === option) {
                        filterList.push(list[i])
                    }
                }
            }
        }
        
        return filterList
    }

}

module.exports = Model