const ReadList = require('./ReadList')
const Overwrite = require('./Overwrite')

class Delete{
    static deleteById (value) {
        let data = ReadList.listParsing()
        let willDelete = ""
        data.forEach (item => {
            if(item.task_id === value){
                willDelete += item.task
                data.splice(value - 1, 1)
            }
        })
        Overwrite.write(data)
        return `Deleted ${willDelete} from your TODO list`
    }
}

module.exports = Delete