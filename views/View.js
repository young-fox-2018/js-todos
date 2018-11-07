class View {
    static help() {
        console.log(`=== Todo JS Command List ===`);
        console.log(`node todo.js help`);
        console.log(`node todo.js list`);
        console.log(`node todo.js add <task_content>`);
        console.log(`node todo.js findById <task_content>`);
        console.log(`node todo.js delete <task_content>`);
        console.log(`node todo.js complete <task_content>`);
        console.log(`node todo.js uncomplete <task_content>`);
        console.log(`node todo.js list:created asc|desc`);
        console.log(`node todo.js list:completed asc|desc`);
        console.log(`node todo.js list:uncompleted asc|desc`);
        console.log(`node todo.js tag <task_id> <tag_name> <tag_name>`);
        console.log(`node todo.js filter:<tag_name>`);
    }

    static showData(data) {        
        console.log(`=== Todo List ===`);
        
        for (let list in data) {       
            if (data[list]['completed'] === false){
                console.log(`${data[list]['id']}. [ ] ${data[list]['task']}`)
            } else {
                console.log(`${data[list]['id']}. [x] ${data[list]['task']}`)
            }
        }
    }

    static showDataWithTags(data) {
        console.log(`=== Todo List ===`);
        
        for (let list in data) {       
            if (data[list]['completed'] === false){
                console.log(`${data[list]['id']}. [ ] ${data[list]['task']} [${data[list]['tag']}]`)
            } else {
                console.log(`${data[list]['id']}. [x] ${data[list]['task']} [${data[list]['tag']}]`)
            }
        }
    }

    static deleteData(data) {
        console.log(`Deleted "${data[0]['task']}" from your TODO list...`);
    } 
    
    static giveTags(data, tags) {
        console.log(`Tagged task '${data[0]['task']}' with [${tags}]`);
    }

}

module.exports = View;