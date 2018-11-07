class View{
    static help(){
        console.log("=======Command yg tersedia ====")
        console.log('node todo.js help')
        console.log('node todo.js list')
        console.log('node todo.js add <task_content>')
        console.log('node todo.js findById <task_id>')
        console.log('node todo.js delete <task_id>')
        console.log('node todo.js complete <task_id>')
        console.log('node todo.js uncomplete <task_id>')
    }
    static list(data){
        for(let i = 0 ; i < data.length; i++){
            if(data[i].status === "complete"){
                console.log( `${data[i].id}. [X] ${data[i].task} `)
            }else if(data[i].status === "uncomplete"){
                console.log( `${data[i].id}. [ ] ${data[i].task} `)
            }

        }
    }
    static add(task){
        console.log(`added ${task} to your TODO list....`)
    }
    static displayData(data){
        console.log(data) 
    }
    static delete(data){
        console.log(`deleted ${data} from your TODO list....`)
    }
    
}


module.exports = View