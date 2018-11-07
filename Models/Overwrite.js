const fs = require('fs')

class Overwrite{
    static write(value){
        fs.writeFileSync('./data.json', JSON.stringify(value, null, 4))
    }
}

module.exports = Overwrite