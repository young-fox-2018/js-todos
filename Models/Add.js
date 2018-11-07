const ReadList = require('./ReadList')
const Overwrite = require('./Overwrite')

class Add{
    static addItem(string){
        let parsingResult = ReadList.listParsing()
        let obj = {}
        obj.task_id = parsingResult[parsingResult.length-1].task_id + 1
        obj.task = string
        obj.status = "[ ]"
        obj.created_date = new Date().getDate()
        obj.completed_date = 0
        obj.tags = []
        parsingResult.push(obj)
        Overwrite.write(parsingResult)
        return `Added ${string} to your TODO list`
    }
}

module.exports = Add