class View {
    
    static showHelp(input) {
        return input
    }

    static showAddTask(input) {
        console.log(`Added "${input}" to your TODO list`)
    }

    static showList(input) {
        console.log(input)
    }

    static showFindTask(input) {
        console.log(input)
    }

    static showAlertDelete(input) {
        console.log(`deleted "${input}" to your TODO list`)
    }
}

module.exports = View