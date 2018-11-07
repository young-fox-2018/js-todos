
class View{
    static help(){
        console.log(`node todo.js\nnode todo.js help\nnode todo.js list\nnode todo.js add <task_content>\nnode todo.js findById <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>\nnode todo.js list:created <sort>\nnode todo.js list:completed <sort>\nnode todo.js tag <task_id> <add name tag>\nnode todo.js filter:<tag>`)
    }

    static list(data){
        for( let i = 0; i < data.length; i++){
            if(data[i].completed){
                console.log( `${(i+1)}. [x] ${data[i].task}`);
            } else {
                console.log( `${(i+1)}. [ ] ${data[i].task}`);
            }
        }
    }

    // static add(addList){
    //     console.log(`Added "${addList}" to your TODO list`)
    // }

    // static findById(data,id){
    //     let count = 0
    //     if ( data !== null ) {
    //         console.log(data)
    //     } else {
    //         console.log('data tidak ditemukan')
    //     }
    //     // for( let i = 0; i < data.length; i++){
    //     //     if( id == i+1 ){
    //     //         count = 1
    //     //         console.log(`${id}. ${data[i].task}`)
    //     //     }
    //     // }
    //     // if(data.length === 0){
    //     //     console.log("data tidak ditemukan")
    //     // }
    // }

    // static delete(deleteList){
    //     console.log(`Deleted "${deleteList}" from your TODO list`)
    // }

    static displayMessage(data){
        console.log(data)
    }
}

module.exports = View