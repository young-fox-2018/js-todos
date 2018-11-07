class View {

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