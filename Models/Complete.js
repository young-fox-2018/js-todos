const ReadList = require('./ReadList')
const Overwrite = require('./Overwrite')

class Complete{
    static completed(value){
        let data = ReadList.listParsing()
        data.forEach(item => {
            if(item.task_id === value){
                item.status = "[x]"
                item.completed_date = new Date().getDate()
            }
        })
        Overwrite.write(data)
        return data
    }
}

module.exports = Complete