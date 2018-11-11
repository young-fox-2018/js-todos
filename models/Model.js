class Model {
    static setData(inputData){
        const fs = require('fs')
        fs.writeFileSync('/home/taqi/Documents/Hacktiv8/phase1/w2/d3/js-todos/data.json', inputData)
    }
    static getData() {
        let fs = require('fs')
        let data = JSON.parse(fs.readFileSync('/home/taqi/Documents/Hacktiv8/phase1/w2/d3/js-todos/data.json', 'utf8'))
        let dataList = data
        return dataList
    }
    static makeList(command, option, sortType) {
        if (sortType == undefined && option == undefined) {
            let data = Model.getData()
            let result = ''
            if (data.length == 0) {
                console.clear()
                return "No todo list, you can add by executing $ add <task_content>"
            }
            console.clear()
            for (let i = 0; i < data.length; i++) {
                result += `${i + 1}. ${data[i].check} ${data[i].name} \n`
            }
            return result
        } else if (option == "created") {
            return sortCreated(option, sortType)
        } else if (option == "completed") {
            return sortCompleted(option, sortType)
        }

        function sortCreated(option, sortType) {
            if (sortType == 'asc') {
                let data = Model.getData()
                let result = ''
                let asc = data.sort(function (a, b) { return (a.created > b.created) ? 1 : ((b.created > a.created) ? -1 : 0); });
                for (let i = 0; i < asc.length; i++) {
                    result += `${i + 1}. ${data[i].check} ${data[i].name} \n`
                }
                return result
            } else if (sortType == 'desc') {
                let data = Model.getData()
                let result = ''
                let desc = data.sort(function (a, b) { return (a.created > b.created) ? -1 : ((b.created > a.created) ? 1 : 0); });
                for (let i = 0; i < desc.length; i++) {
                    result += `${i + 1}. ${data[i].check} ${data[i].name} \n`

                }
                return result
            }
        }
        function sortCompleted(option, sortType) {
            let data = Model.getData()
            let result = ''
            for (let i = 0; i < data.length; i++) {
                if (data[i].completed != false) {
                    result += `${i + 1}. ${data[i].check} ${data[i].name}`
                }
            }
            return result
        }
    }

    static makeData(task) {
        console.clear()
        let dataList = Model.getData()
        let idCounter = 1
        for (let i = 0; i < dataList.length; i++) {
            idCounter++
        }
        let obj = {
            id: idCounter,
            name: task,
            check: '[ ]',
            created: new Date(),
            completed: false,
            tag: []
        }
        dataList.push(obj)
        let inputData = JSON.stringify(dataList)
        Model.setData(inputData)

    }
    static idFind(params) {
        let data = Model.getData()
        let result = ''
        if (params > data.length-1) {
            return "No data by id"
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == params) {
                result += `${data[i].id}. ${data[i].check} ${data[i].name} \n`
            }
        }
        let inputData = JSON.stringify(data)

        this.setData(inputData)
        return result
    }

    static makeDelete(params) {
        let dataList = Model.getData()
        let result = ''
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].id == params) {
                result += `Deleted "${dataList[i].name}" from your TODO list..`
                dataList.splice(i, 1)
            }
        }
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].id != i + 1) {
                dataList[i].id = i + 1
            }
        }
        let inputData = JSON.stringify(dataList)
        Model.setData(inputData)
        return result
    }

    static makeComplete(params) {
        let dataList = Model.getData()
        let result = ''
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].check != '[x]' && dataList[i].id == params) {
                dataList[i].check = '[x]'
                dataList[i].completed = new Date()
            }
        }
        let inputData = JSON.stringify(dataList)
        Model.setData(inputData)
        
        return Model.makeList()
    }
    static makeUncomplete(params) {
        let dataList = Model.getData()
        let result = ''
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].check != '[ ]' && dataList[i].id == params) {
                dataList[i].check = '[ ]'
            }
        }
        let inputData = JSON.stringify(dataList)
        Model.setData(inputData)
        return Model.makeList()
    }

    static makeTag(command, option, tag){
        let data = Model.getData()
        let result = ''
        let arr = ''
        for (let i = 0; i < data.length; i++) {
            if (data[i].tag == undefined) {
                if (data[i].id == option) {
                    data[i].tag = tag
                }
                
            } else if (data[i].tag != undefined) {
                if (data[i].id == option) {
                    tag.forEach(element => {
                        data[i].tag.push(element) 
                    });
                }
            }
        }
        tag.forEach(element => {
            arr += element +' '
        });
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == option) {
                result += `Tagged task "${data[i].name} with tags: ${arr}"`
            }
        }
        let inputData = JSON.stringify(data)
        Model.setData(inputData)
        return result
    }
    static makeFilter(command, option){
        
        let data = Model.getData()
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].tag.length; j++) {
                if (data[i].tag[j] == option) {
                    return `${data[i].id}. ${data[i].name} [${data[i].tag}]`
                }
            }
        }
        return "Not found tag with that tag name"
        
    }



}
module.exports = Model