const ReadList = require('./ReadList')
const Overwrite = require('./Overwrite')

class Tag {
    static tag (id, inputs){
        let data = ReadList.listParsing()
        let task = ""
        let string = ""
        data.forEach(item => {
            if(item.task_id === id){
                item.tags = inputs
                task = item.task
                string = inputs.join(' ')
            }
        })
        Overwrite.write(data)
        return `Tagged task ${task} with tags: ${string}`
    }
}

module.exports = Tag