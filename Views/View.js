class View {
    static console (stuff){
        console.log(stuff)
    }
    static display (id, status,task, tags){
        let box
        if(status === true) box = `[x]`
        else box = `[ ]`
        if(status.length === 0){
            console.log(`${id}. ${task}, [${tags}]`)    
            return false
        }
        console.log(`${id}. ${box} ${task}`)
    }
}

module.exports = View