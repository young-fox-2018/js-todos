const fs = require('fs')

class List{
    static listParsing(){
        return JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    }

    static listCreated(sort){
        let data = List.listParsing()
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
        let dataList = List.listParsing()
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
        let dataList = List.listParsing()
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
}

module.exports = List