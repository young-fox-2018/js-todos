const ReadList = require('./ReadList')
const Overwrite = require('./Overwrite')

class Uncomplete{
    static undone(value){
        let data = ReadList.listParsing()
        data.forEach(item => {
            if(item.task_id === value){
                item.status = "[ ]"
                item.completed_date = 0
            }
        })
        Overwrite.write(data)
        return data
    }
}

module.exports = Uncomplete