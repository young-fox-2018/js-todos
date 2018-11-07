class View {
    static console (stuff){
        console.log(stuff)
    }
    static display (id, status,task){
        let box
        if(status === true) box = `[x]`
        else box = `[ ]`
        console.log(`${id}. ${box} ${task}`)
    }
}

module.exports = View