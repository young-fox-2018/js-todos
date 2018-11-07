class View {

    static help(){
        console.log(`
        list
        add <task content>
        findById <task_id>
        delete <task_id>
        complete <task_id>
        uncomplete <task id>
        list:created
        list:completed
        tag <id> <name_1> <name_2>
        filter: <tag_name>
        `)
    }

    static showError(err){
        console.log("THIS IS ERROR MESSAGE:")
        console.log("================================")
        console.log(err)
    }

    static showData(data){
        console.log(data)
    }

    static showList(arrOfObject){
        arrOfObject.forEach(item => {
            console.log(`${item.task_id}. ${item.status} ${item.task}`)
        })
    }
}

module.exports = View