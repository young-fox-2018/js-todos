const fs = require('fs')

class Model{

    static write(value){
        fs.writeFileSync('./data.json', JSON.stringify(value, null, 4))
    }
    static read(){
        return JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    }

    static listCreated(sort){
        let data = Model.read()
        if (sort === "asc") {
            data.sort(function(a,b){
                return a.created_date - b.created_date
            })
            return data
        } else {
            data.sort(function(a, b){
                return b.created_date - a.created_date
            })
            return data
        }
    }

    static listCompleted(sort){
        let dataList = Model.read()
        let data = []
        dataList.forEach(item => {
            if(item.status === "[x]") data.push(item)
        })
        if (sort === "asc") {
            data.sort(function(a,b){
                return a.completed_date - b.completed_date
            })
            return data
        } else {
            data.sort(function(a, b){
                return b.completed_date - a.completed_date
            })
            return data
        }
    }

    static listUncompleted(sort){
        let dataList = Model.read()
        let data = []
        dataList.forEach(item => {
            if(item.status === "[ ]") data.push(item)
        })
        if (sort === "asc") {
            data.sort(function(a,b){
                return a.created_date - b.created_date
            })
            return data
        } else {
            data.sort(function(a, b){
                return b.created_date - a.created_date
            })
            return data
        }
    }
    static add(string){
        let parsingResult = Model.read()
        let obj = {}
        obj.task_id = parsingResult[parsingResult.length-1].task_id + 1
        obj.task = string
        obj.status = "[ ]"
        obj.created_date = new Date().getDate()
        obj.completed_date = 0
        obj.tags = []
        parsingResult.push(obj)
        Model.write(parsingResult)
        return `Added ${string} to your TODO list`
    }

    static delete (value) {
        let data = Model.read()
        let willDelete = ""
        data.forEach (item => {
            if(item.task_id === value){
                willDelete += item.task
                data.splice(value - 1, 1)
            }
        })
        Model.write(data)
        return `Deleted ${willDelete} from your TODO list`
    }

    static complete(value){
        let data = Model.read()
        data.forEach(item => {
            if(item.task_id === value){
                item.status = "[x]"
                item.completed_date = new Date().getDate()
            }
        })
        Model.write(data)
        return data
    }

    static uncomplete(value){
        let data = Model.read()
        data.forEach(item => {
            if(item.task_id === value){
                item.status = "[ ]"
                item.completed_date = 0
            }
        })
        Model.write(data)
        return data
    }

    static filter(value){
        let data = Model.read()
        let gotTag = []
        data.forEach(item => {
            item.tags.forEach(element => {
                if(element === value) gotTag.push(item)
            })
        })
        return gotTag
    }
    
    static find(value){
        let data = Model.read()
        let result = ""
        data.forEach(item => {
            if(item.task_id === value) result += `${item.task_id}. ${item.task}`
        })
        return result
    }

    static tag (id, inputs){
        let data = Model.read()
        let task = ""
        let string = ""
        let isSame = false
        for (let i = 0; i < inputs.length-1; i++){
            for(let j = i+1; j < inputs.length; j++){
                if(inputs[i] === inputs[j]) isSame = true
            }
        }

        if(isSame === false) {
            data.forEach(item => {
                if(item.task_id === id){
                    item.tags = inputs
                    task = item.task
                    string = inputs.join(' ')
                }
            })
            Model.write(data)
            return `Tagged task ${task} with tags: ${string}`
        }else{
            return `Tags can not be the same / be repeated`
        }        
    }


}

module.exports = Model