const ReadList = require('./ReadList')

class Filter{
    static filter(value){
        let data = ReadList.listParsing()
        let gotTag = []
        data.forEach(item => {
            item.tags.forEach(element => {
                if(element === value) gotTag.push(item)
            })
        })
        return gotTag
    }
}

module.exports = Filter