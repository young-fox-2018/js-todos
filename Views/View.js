class View{
    static display(input){
        console.log(input)
    }
    static list(input){
        // input = JSON.parse(input)
        for(let i = 0 ; i < input.length ; i++){
            if(input[i]["status"] === false){
                console.log(`${i+1}. [ ] ${input[i]["task"]}`)
            }
            else{
                console.log(`${i+1}. [X] ${input[i]["task"]}`)
            }   
        }
    }
    static listFilter(input, file){
        // file = JSON.parse
        for(let i = 0 ; i < input.length ; i++){
            console.log(input)
            if(input[i]["status"] === false){
                console.log(`${i+1}. [ ] ${input[i]["task"]}`)
            }
            else{
                console.log(`${i+1}. [X] ${input[i]["task"]}`)
            }   
        }
    }
    static help(){
        console.log(`Please input a proper Command. Here is the list of Commans you can use: \n1. help: To show you the list of command you can use. If the command is not recognized, it will go here instead. \n2. list: Show all the tasks on the To-Do list \n3. add <task_id>: Add an item to the list \n4. findById <task_id>: Help finding a particular task \n5. delete <task_id>: Deleting a task from the list \n6. complete <task_id>: Mark the item as complete \n7. uncomplete <task_id>: To re-mark the task that have not been completed \n8. tag <task_id> <tag#1> <tag#2> ...: Adding tags to mark your To-Do item \n9. filter:<tag> : Providing a list with the appropriate To-Do list item with the tag provided`)
    }
}

module.exports = View