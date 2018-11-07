class View {
    static showHelp(input) {
        console.log(input)
    }
    static showAdd(input) {
        console.log(`Added ${input} to your TODO list`)
    }
    static showList(input) {
        console.log(input)
    }
    static showById(input) {
        console.log(input)
    }
    static showDelete(input) {
        console.log(`Deleted "${input}" from your TODO list`)
    }
    static showComplete(input) {
        console.log(input)
    }
    static showUncomplete(input) {
        console.log(input)
    }
}

module.exports = View