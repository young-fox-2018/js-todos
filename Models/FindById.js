const ReadList = require('./ReadList')

class FindById{
    static find(value){
        let data = ReadList.listParsing()
        let result = ""
        data.forEach(item => {
            if(item.task_id === value) result += `${item.task_id}. ${item.task}`
        })
        return result
    }
}

module.exports = FindById