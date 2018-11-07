const Help = require("../models/Help")
const View = require("../views/View")

class HelpController {
    
    static help() {
        let res = Help.readFile()
        View.showHelp(res)
    }
}

module.exports = HelpController