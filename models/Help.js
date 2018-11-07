const fs = require('fs')

class Help {

    static readFile() {
        let helpConsole = fs.readFileSync('./help.txt','utf8').toString()
        console.log(helpConsole)
        return helpConsole
    }
}

module.exports = Help