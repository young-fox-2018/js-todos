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
    }
    static showData(data) {
        console.log(`=== Todo List ===`);
        
        for (let list in data) {       
            if (data[list]['status'] === 'uncomplete'){
                console.log(`${data[list]['id']}. [ ] ${data[list]['task']}`)
            } else {
                console.log(`${data[list]['id']}. [x] ${data[list]['task']}`)
            }
        }
    }
    static deleteData(data) {
        console.log(`Deleted "${data[0]['task']}" from your TODO list...`);
    }

}

module.exports = View;